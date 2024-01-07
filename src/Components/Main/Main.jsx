import React, { Component } from 'react';
import './Main.scss'
import playAudio from '../../assets/Icons/playBtn.svg'

class Main extends Component {
    render() {
        return (
            <div>
                <div className="head">
                    <div className="head_word">
                        <h1>Word</h1>
                        <p>phonetic</p>
                    </div>
                    <div className="head_audio">
                        <img src={ playAudio } alt="Play Audio Btn" />
                    </div>
                </div>
                <div className="meaning_head">
                    <p className='type'>noun</p>
                    <div className="line"></div>
                </div>
                <div className="meanings">
                    <p className='meaning'>Meaning</p>
                    <ul>
                        <li><p>(etc.) A set of keys used to operate a typewriter, computer etc.</p></li>
                        <li><p>A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.</p></li>
                    </ul>
                </div>
                <div className="synonm">
                    <h4>Synonyms</h4>
                    <p>electronic keyboard</p>
                </div>
                <div className="meaning_head">
                    <p className='type'>verb</p>
                    <div className="line"></div>
                </div>
                <div className="meanings">
                    <p className='meaning'>Meaning</p>
                    <ul>
                        <li><p>To type on a computer keyboard.</p></li>
                    </ul>
                    <p className="example">
                        “Keyboarding is the part of this    job I hate the most.”
                    </p>
                </div>
                <div className="full_line"></div>
                <div className="source">
                    <p>Source</p>
                    <a href='https://en.wiktionary.org/wiki/keyboard'>https://en.wiktionary.org/wiki/keyboard</a>
                </div>
            </div>
        );
    }
}

export default Main;