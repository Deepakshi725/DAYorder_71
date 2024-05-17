/* eslint-disable */
import React, { Component } from 'react';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import ResultComponent from './component/ResultComponent';

class App extends Component {
  state = {
    currentScreen: 'home',
    quizData: null
  };

  navigateTo = (screen, data = null) => {
    this.setState({
      currentScreen: screen,
      quizData: data
    });
  };

  render() {
    const { currentScreen, quizData } = this.state;

    switch (currentScreen) {
      case 'home':
        return <HomeComponent navigateTo={this.navigateTo} />;
      case 'quiz':
        return <QuizComponent navigateTo={this.navigateTo} />;
      case 'result':
        return <ResultComponent navigateTo={this.navigateTo} {...quizData} />;
      default:
        return <HomeComponent navigateTo={this.navigateTo} />;
    }
  }
}

export default App;
