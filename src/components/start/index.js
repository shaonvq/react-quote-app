// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import Matrix from '../matrix/index';

import React, { Component } from 'react';
import $ from 'jquery';

import styles from './style.scss';

let author = '';
let quote = '';


export default class Start extends Component {
  constructor(props){
    super(props);
    this.state = {
      author,
      quote,
      hidden: 'show',
      bool: true,
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    $.ajax({
      type: 'GET',
      url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: (data, type) => {
        if (this.state.bool) {
          this.state.bool = false;
          let quotes = JSON.parse(data).quotes;
          let number = Math.floor(Math.random() * quotes.length);
          this.setState({ hidden: 'hide' });
          setTimeout(() => {
            this.setState({
              quote: JSON.parse(data).quotes[number].quote,
              author: JSON.parse(data).quotes[number].author,
            });
            this.setState({ hidden: 'show', bool: true });
          }, 1000);
          console.log(this.state.quote);
        }
      },
    });
  }

  render() {
    return (
      <div className="container" >       
        <div id="quote-box" className={`gay ${this.state.hidden}`}>
          <h1>quote generator</h1>
          <p id="text" className={this.state.hidden}>'{this.state.quote}'</p>
          <span id="author" className={this.state.hidden}>{this.state.author}</span>
          <div id="buttons">
            <button id="new-quote" onClick={this.getRandomQuote}>new quote</button>
            <button id="tweet-quote">tweet quote</button>
          </div>

        </div>

      </div>
    );
  }
}
