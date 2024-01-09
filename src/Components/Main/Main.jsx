import React, { Component } from 'react';
import './Main.scss'
import playAudio from '../../assets/Icons/playBtn.svg'
import noPlayBtn from '../../assets/Icons/no-play.png'

class Main extends Component {


    playAudioFunction = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
    }


    render() {
        const {  word, phonetics, sourceUrls, meanings, phoneticTexts } = this.props
        return (
            <div>
                <div className="head">
                    <div className="head_word">
                        <h1>{ word }</h1>
                        <div className="phonetics">
                            <p>{phoneticTexts}</p>
                        </div>
                    </div>
                    <div className="head_audio">
                        {phonetics?.map((phonetic, idx) => (
                            phonetic.audio !== ""? 
                                <img
                                    src={playAudio}
                                    alt="play Btn"
                                    onClick={() => this.playAudioFunction(phonetic.audio)}
                                    className='play-audio'
                                    key={idx}
                                />
                            :
                                null
                        ))}
                    </div>
                </div>
                {meanings.map((meaning, idx) => (
                    <>
                        <div key={idx} className="meaning-head">
                            <p className="type">{meaning.partOfSpeech}</p>
                            <div className={`${meaning.partOfSpeech.length > 4 ? 'line_long' : 'line'}`}></div>
                        </div>

                        <div className="meanings">
                            <p className='meaning'>Meaning</p>
                            <ul>
                                {meaning.definitions.map((definition, subIdx) => (
                                    <li key={subIdx}><p className="meaning-text">{definition.definition}</p></li>
                                ))}
                            </ul>
                        </div>
                        {!meaning.synonyms.length ? null : (
                            <div className="synonm">
                                <h4>Synonyms</h4>
                                <p>{meaning.synonyms.join(', ')}</p>
                            </div>
                        )}
                        {/* <div className="examples">
                            {meaning.definitions.map((definition, idx) => {
                                return <p key={idx} className='example'>{definition.example}</p>
                            })}
                        </div> */}
                        <div className="examples">
                            {meaning.definitions.map((definition, idx) => {
                                    return(
                                        <p className='example'>{definition.example}</p>
                                    )
                                })}
                        </div>
                    </>
                ))}
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