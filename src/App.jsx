import React, { Component } from 'react';
import "./App.scss"
import Header from './Components/Header/Header';
import searchIcon from './assets/Icons/searchIcon.svg'
import Main from './Components/Main/Main';
import MainItems from './Components/MainItems/MainItems';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      result: null, 
      showRes: false,
      changeMode: true,
      err: '',
      resErr: false,
      inputEmpty: false,
    }
  }

  


  handleSearch = async () => {

    if(!this.state.searchValue.trim()) {
      this.setState({ err: 'Whoops, can’t be empty…', showRes: false, resErr: false, result: null, inputEmpty: true })
    }

    try {
      const getData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchValue}`)
      const data = await getData.json()
      
      if(data.message) {
        this.setState({ err: '', showRes: false, result: null, resErr: true, inputEmpty: false })
      } 
      else {
        this.setState({ showRes: true, result: data[0], resErr: false })
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  render() {
    const { showRes, result, inputEmpty, resErr } = this.state
    return (
      <div className='app container' data-theme={`${this.state.changeMode ? 'light' : 'dark'}`}>
        <Header />
        <div className={`${inputEmpty ? 'border-red' : ''} input-area`}>
          <form name="search" onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="search"
              placeholder='Search for any word…'
              value={this.state.searchValue}
              onChange={(e) => this.setState({ searchValue: e.target.value })}
            />
            <button
              onClick={this.handleSearch}
            >
              <img 
                src={searchIcon} 
                alt="searchIcon" />
            </button>
          </form>

        </div>
        <p className='error'>{this.state.err}</p>

        {resErr && (
          <div className="error_items">
            <h2>😕</h2>
            <p className='not_found'>No Definitions Found</p>
            <p className="not_found_definitions">
              Sorry pal, we couldn't find definitions for the word you were looking for. You can try the  search again at later time or head to the web instead.
            </p>
          </div>
        )}

        {showRes && (
          <MainItems 
            result={ result }
          />
        )}
      </div>
    );
  }
}

export default App;