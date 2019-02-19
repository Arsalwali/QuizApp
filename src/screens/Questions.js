import React, { Component } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Header, Button } from '../components';
import { getQuestion } from '../actionCreators/questions';
import { colors } from '../theme';

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  scoreContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

let clock;

export class QuestionPage extends Component {
  state = {
    questionId: 0,
    totalCorrectAnswer: 0,
    isAnswerCorrect: false,
    isStarted: false,
    isCompleted: false,
    tick: 0,
  }

  componentDidMount() {
    this.props.getQuestion();
  }

  timer = () => {
    this.setState({ tick: this.state.tick + 1 });
  }

  renderQuestion = () => {
    const { question, correct_answer, incorrect_answers } = this.props.questionList[this.state.questionId];
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.questionContainer}>
          <Text>{question}</Text>
        </View>
        <Button title={correct_answer} onButtonPress={this.onAnswerSelection(correct_answer)}/>
        {incorrect_answers.map(item => <Button title={item} onButtonPress={this.onAnswerSelection(item)}/>)}
      </View>
    );
  }

  renderScore = () => (
    <View style={styles.scoreContainer}>
      <Text>Your Score is {this.state.totalCorrectAnswer} out of 10</Text>
      <Text>Time in seconds {this.state.tick}</Text>
    </View>
  );

  onAnswerSelection = (answer) => () => {
    const { correct_answer } = this.props.questionList[this.state.questionId];
    const isCorrect = answer === correct_answer;
    const { isAnswerCorrect } = this.state;

    if (isAnswerCorrect && !isCorrect) {
      this.setState({
        totalCorrectAnswer: this.state.totalCorrectAnswer - 1,
        isAnswerCorrect: false,
      });
    }
    if (isCorrect) {
      this.setState({
        totalCorrectAnswer: this.state.totalCorrectAnswer + 1,
        isAnswerCorrect: true,
      });
    }
  }

  onNextPress = () => {
    if (this.state.questionId < this.props.questionList.length - 1) {
      this.setState({
        questionId: this.state.questionId + 1,
        isAnswerCorrect: false,
      });
    } else {
      this.setState({ isCompleted: true });
      clearInterval(clock);
    }
  }

  onPlayAgainPress = () => {
    this.setState({
      questionId: 0,
      isAnswerCorrect: false,
      totalCorrectAnswer: 0,
      isCompleted: false,
      tick: 0,
    });
    clock = setInterval(this.timer, 1000);
  }

  onStartPress = () => {
    this.setState({ isStarted: true });
    clock = setInterval(this.timer, 1000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Quiz App" />
        {this.props.isLoaded && !this.state.isStarted && <Button title="Start Quiz" buttonStyle={{ backgroundColor: colors.success }} onButtonPress={this.onStartPress} />}
        {this.state.isStarted && !this.state.isCompleted && this.renderQuestion()}
        {this.state.isStarted && !this.state.isCompleted && <Button title="Next" buttonStyle={{ backgroundColor: colors.success }} onButtonPress={this.onNextPress} />}
        {this.state.isCompleted && this.renderScore()}
        {this.state.isCompleted && <Button title="Play Again" buttonStyle={{ backgroundColor: colors.success }} onButtonPress={this.onPlayAgainPress} />}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { questions } = state;
  const { questionList, isLoaded } = questions;
  return { questionList, isLoaded };
};

const mapDispatchToProps = { getQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
