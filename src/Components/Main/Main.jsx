import React, { Component } from 'react';
import './Main.scss'
import playAudio from '../../assets/Icons/playBtn.svg'
import noPlayBtn from '../../assets/Icons/no-play.png'

class Main extends Component {

    playAudioFunction = () => {
        const audio = new Audio(this.props.phonetics[0].audio)
        audio.play()
    }
    render() {
        const {  word, phonetics, sourceUrls, meanings } = this.props
        return (
            <div >
                <div className="head">
                    <div className="head_word">
                        <h1>{ word }</h1>
                        {phonetics.map((phonetic, idx) => {
                            <p key={idx}>{phonetic.text}</p>
                        })}
                        <p>{phonetics[0].text}</p>
                    </div>
                    <div className="head_audio" >
                        {phonetics[0].audio ?
                            <img src={ playAudio } alt="play Btn" onClick={this.playAudioFunction} className='play-audio'/>
                            :
                            <img src={ noPlayBtn } alt="no Play Btn" className='play-audio'/>
                        }
                        
                    </div>
                </div>
                <div className="meaning_head">
                    <p className='type'>{meanings[0].partOfSpeech}</p>
                    <div className="line"></div>
                </div>
                <div className="meanings">
                    <p className='meaning'>Meaning</p>
                    <ul>
                        {meanings[0].definitions?.map((meaning, idx) => {
                            return (
                                <li key={idx}><p>{meaning.definition}</p></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="synonm">
                    <h4>Synonyms</h4>
                    <p>{meanings[0].synonyms.join(', ')}</p>
                </div>
                <div className="meaning_head">
                    <p className='type'>{meanings[1]?.partOfSpeech}</p>
                    <div className="line"></div>
                </div>
                <div className="meanings">
                    <p className='meaning'>Meaning</p>
                    <ul>
                        {meanings[1].definitions?.map((meaning, idx) => {
                            return (
                                <li key={idx}><p>{meaning.definition}</p></li>
                            )
                        })}
                    </ul>
                    <p className="example">
                        {/* “Keyboarding is the part of this    job I hate the most.” */}
                        {meanings[1]?.definitions[0].example}
                    </p>
                </div>
                <div className="full_line"></div>
                {sourceUrls && (
                    <div className="source">
                        <p>Source</p>
                        <a href={sourceUrls}>{sourceUrls}</a>
                    </div>
                )}
            </div>
        );
    }
}

export default Main;