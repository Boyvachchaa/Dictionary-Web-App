import React, { Component } from 'react';
import Main from '../Main/Main';
class MainItems extends Component {
    render() {
        const { result } = this.props
        return (
            <div>
                <Main
                    word={result.word}
                    phonetics={result.phonetics}
                    phoneticTexts = {result.phonetics.map((phonetic, idx) => phonetic.text)}
                    sourceUrls={result.sourceUrls[0]}
                    meanings={result.meanings}
                />
            </div>
        );
    }
}

export default MainItems;