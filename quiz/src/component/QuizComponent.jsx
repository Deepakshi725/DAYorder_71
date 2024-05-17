/* eslint-disable */
import React, { Component } from 'react';
import './QuizComponent.css';
import questions from '../resources/quizQuestion.json';

class QuizComponent extends Component {
  state = {
    currentQuestionIndex: 0,
    selectedOption: null,
    answers: Array(questions.length).fill(null)
  };

  handleNext = () => {
    this.setState((prevState) => {
      const newAnswers = [...prevState.answers];
      newAnswers[prevState.currentQuestionIndex] = prevState.selectedOption;
      return {
        currentQuestionIndex: Math.min(prevState.currentQuestionIndex + 1, questions.length - 1),
        selectedOption: newAnswers[prevState.currentQuestionIndex + 1],
        answers: newAnswers
      };
    });
  };

  handlePrevious = () => {
    this.setState((prevState) => {
      return {
        currentQuestionIndex: Math.max(prevState.currentQuestionIndex - 1, 0),
        selectedOption: prevState.answers[prevState.currentQuestionIndex - 1]
      };
    });
  };

  handleQuit = () => {
    if (window.confirm('Are you sure you want to quit?')) {
      this.props.navigateTo('home');
    }
  };

  handleOptionChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleSubmit = () => {
    this.setState((prevState) => {
      const newAnswers = [...prevState.answers];
      newAnswers[prevState.currentQuestionIndex] = prevState.selectedOption;
      this.props.navigateTo('result', {
        answers: newAnswers,
        questions
      });
    });
  };

  render() {
    const { currentQuestionIndex, selectedOption } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p className="question-text">{currentQuestion.question}</p>
          <div className="options-container">
            {['A', 'B', 'C', 'D'].map(option => (
              <div className="option" key={option}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedOption === option}
                  onChange={this.handleOptionChange}
                /> {option}. {currentQuestion[`option${option}`]}
              </div>
            ))}
          </div>
          <div className="button-container">
            <button className="nav-button" onClick={this.handlePrevious}>Previous</button>
            {currentQuestionIndex < questions.length - 1
              ? <button className="nav-button" onClick={this.handleNext}>Next</button>
              : <button className="nav-button" onClick={this.handleSubmit}>Submit</button>
            }
            <button className="nav-button" onClick={this.handleQuit}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;


