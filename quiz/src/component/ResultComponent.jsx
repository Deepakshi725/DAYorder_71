/* eslint-disable */
import React, { Component } from 'react';
import './resultComponent.css';

class ResultComponent extends Component {
  calculateScore = () => {
    const { answers, questions } = this.props;
    let correctAnswers = 0;
    let attemptedQuestions = 0;

    answers.forEach((answer, index) => {
      if (answer !== null) {
        attemptedQuestions++;
        if (questions[index].answer === questions[index][`option${answer}`]) {
          correctAnswers++;
        }
      }
    });

    const totalQuestions = questions.length;
    const score = (correctAnswers / totalQuestions) * 100;

    return {
      correctAnswers,
      attemptedQuestions,
      totalQuestions,
      score: score.toFixed(2) 
    };
  };

  handleRetry = () => {
    this.props.navigateTo('home');
  };

  render() {
    const { correctAnswers, attemptedQuestions, totalQuestions, score } = this.calculateScore();

    return (
      <div className="result-container">
        <p className='title'>Quiz Result</p>
        <h1 className='your-score'>Your score is {score}%</h1>
        <p className="score1">Total number of questions<span className='number'>{totalQuestions}</span></p>   
        <p className='score2'>Number of attempted questions<span className='number'>{attemptedQuestions}</span></p>
        <p className='score3'>Number of correct answers<span className='number'>{correctAnswers}</span></p>
        <p className='score4'>Number of wrong answers<span className='number'>{attemptedQuestions - correctAnswers}</span></p>
        
        <button className="retry-button" onClick={this.handleRetry}>Retry Quiz</button>
      </div>
    );
  }
}

export default ResultComponent;
