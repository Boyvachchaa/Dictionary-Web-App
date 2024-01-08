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
                    <div className="head_audio" >
                        {phonetics[0].audio ?
                            <img src={ playAudio } alt="play Btn" onClick={this.playAudioFunction} className='play-audio'/>
                            :
                            <img src={ noPlayBtn } alt="no Play Btn" className='play-audio'/>
                        }
                        
                    </div>
                </div>
                {meanings.map((meaning, idx) => (
                        <>
                            <div key={idx} className="meaning-head">
                                <p className="type">{meaning.partOfSpeech}</p>
                                <div className="line"></div>
                            </div>
                            <div className="meanings">
                                <p className='meaning-label'>Meaning</p>
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
                            {/* {!meaning.definition.example ? 
                                
                                
                                // <p className="example">
                                //     {meanings.definitions.map((definition, idx) => {
                                //         return 
                                //             <p className="meaning" key={idx}>{definition?.example}</p>
                                        
                                //     })}
                                // </p>
                            } */}

                            {meaning.definitions.map((definition, idx) => {
                                return <p key={idx}>{definition.example}</p>
                            })}
                        </>
                ))}

                {/* <div className="meaning_head">
                    <p className='type'>{meanings[0]?.partOfSpeech}</p>
                    <div className="line"></div>
                </div>
                <div className="meanings">
                    <p className='meaning'>Meaning</p>
                    <ul>
                        {meanings[0]?.definitions?.map((meaning, idx) => {
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
                        {meanings[1]?.definitions?.map((meaning, idx) => {
                            return (
                                <li key={idx}><p>{meaning.definition}</p></li>
                            )
                        })}
                    </ul>
                    <p className="example">
                        {meanings[1]?.definitions[0]?.example}
                    </p>
                </div>
                <div className="full_line"></div> */}
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