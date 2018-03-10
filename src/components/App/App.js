import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Button from '../Button/Button';

//redux
import { connect } from 'react-redux';
//redux actions
import * as newsActions from '../../store/actions/news.action.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {this.props.bla.data.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <Button
              onClick={() => { console.log(item.title + ' is being deleted'); this.delNews(item) }}
              style={{ backgroundColor: 'white', color: 'red' }}
            >
              Delete
          </Button>
          </div>
        )
        )}

        <hr />
        <input ref={(i => this.inputRef = i)} />
        <Button
          onClick={() => { console.log(this.inputRef.value); this.addNews() }}
        >
          Add Headline
        </Button>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  //redux actions
  addNews = () => {
    return this.props.dispatch(newsActions.addNews({
      id: this.props.bla.data.length + 1,
      title: this.inputRef.value
    }))
  }

  delNews = (news) => {
    return this.props.dispatch(newsActions.delNews(news))
  }



}







//redux
function mapStateToProps(state) {
  return {
    bla: state.news
  };
}

export default connect(mapStateToProps)(App); //connect fron redux is a higher order function
