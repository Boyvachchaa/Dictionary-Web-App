import React, { Component } from 'react';
import "./App.scss"
import Header from './Components/Header/Header';
import searchIcon from './assets/Icons/searchIcon.svg'
import Main from './Components/Main/Main';

class App extends Component {
  render() {

    return (
      <div className='container'>
        <Header />
        <div className="input-area">
          <form name="search">
            <input 
              type="search"
              placeholder='Search for any word…'
            />
            <img src={searchIcon} alt="searchIcon" />
          </form>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;