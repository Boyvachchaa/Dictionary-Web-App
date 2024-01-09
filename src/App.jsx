import React, { Component } from 'react';
import "./App.scss"
import Header from './Components/Header/Header';
import searchIcon from './assets/Icons/searchIcon.svg'
import Main from './Components/Main/Main';
import MainItems from './Components/MainItems/MainItems';
import loadingImg from './assets/Icons/loader.svg'

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
      loading: false,
      fonts: 'Inter',
    }
  }

  


  handleSearch = async () => {

    this.setState({ loading: true, })

    if(!this.state.searchValue.trim()) {
      this.setState({ err: 'Whoops, can’t be empty…', showRes: false, resErr: false, result: null, inputEmpty: true, loading: false })
    }


    try {
      const getData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchValue}`)
      const data = await getData.json()
      if(data.message) {
        this.setState({ err: '', showRes: false, result: null, resErr: true, inputEmpty: false, loading: false })
      } 
      else {
        this.setState({ showRes: true, result: data[0], resErr: false, loading: false, inputEmpty: false, err: '' })
      }
    } catch(err) {
      console.log(err)
    }
  }

  handleModeChange = (newMode) => {
    this.setState({
      changeMode: newMode,
    })
  };

  handleFontsChange = (newFont) => {
    this.setState({
        fonts: newFont,
    });
};

  
  render() {
    const { showRes, result, inputEmpty, resErr, loading, changeMode, fonts } = this.state
    return (
      <div className={`app ${changeMode ? 'light' : 'dark'} ${fonts}`}>
        <div className="container">
          <Header 
            changeMode={changeMode}
            onModeChange={this.handleModeChange}
            onFontChange={this.handleFontsChange}
          />

              <div className={`${inputEmpty ? 'border-red' : ''} input-area`}>
                <form name="search" onSubmit={(e) => e.preventDefault()}>
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

          {loading ?
            <div className="loader">
              <img src={ loadingImg } alt="Loader" />
            </div>
            :
            <>
              
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
            </>
          }

        </div>
      </div>
    );
  }
}

export default App;