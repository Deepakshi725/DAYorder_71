/* eslint-disable */
import React, { Component } from 'react';
import './HomeComponent.css';

class HomeComponent extends Component {
  handleStartQuiz = () => {
    this.props.navigateTo('quiz');
  }

  render() {
    return (
      <div className="home-container">
        <h1>Quiz App</h1>
        <button className="start-button" onClick={this.handleStartQuiz}>Start Quiz</button>
      </div>
    );
  }
}

export default HomeComponent;
