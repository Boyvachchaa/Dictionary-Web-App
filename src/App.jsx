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
      err: false,
    }
  }

  


  handleSearch = async () => {
    try {
      const getData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchValue}`)
      const data = await getData.json()
      
      if(!this.state.searchValue.trim()) {
        this.setState({ err: 'Input to`ldirilmadi', showRes: false, result: null })
      } else {
        this.setState({ showRes: true, result: data[0] })
      }
      console.log(data[0])
    } catch(err) {
      console.log(err)
    }
  }
  
  render() {
    const { showRes, result } = this.state
    return (
      <div className='app container' data-theme={`${this.state.changeMode ? 'light' : 'dark'}`}>
        <Header />
        <div className="input-area">
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