import React, { Component } from 'react';
import Logo from '../../assets/Icons/logo.svg';
import lightModeIcon from '../../assets/Icons/lightMode.svg';
import darkModeIcon from '../../assets/Icons/darkMode.svg';
import './Header.scss';

class Header extends Component {
    
    changeModeFunction = () => {
        const { onModeChange, changeMode } = this.props
        onModeChange(!changeMode);
    }

    changeFonts = (font) => {
        const { onFontChange } = this.props;
    
        switch (font) {
            case 'Sans Serif':
                onFontChange('Inter');
                break;
            case 'Serif':
                onFontChange('Lora');
                break;
            case 'Mono':
                onFontChange('Inconsolata');
                break;
            default:
                onFontChange('Inter');
        }
    };
    

    render() {
        const { changeMode } = this.props
        return (
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <div className="fonts">
                        <form name="fonts">
                            <select name="fonts" onChange={(e) => this.changeFonts(e.target.value)}>
                                <option value="Sans Serif" className="sans">
                                    Sans Serif
                                </option>
                                <option value="Serif" className="serif">
                                    Serif
                                </option>
                                <option value="Mono" className="mono">
                                    Mono
                                </option>
                            </select>
                        </form>
                    </div>
                    <div className="line"></div>
                    <div className="changeMode" onClick={this.changeModeFunction}>
                        {changeMode ? 
                            <img src={ lightModeIcon } alt="Mode Icons" onClick={this.changeModeFunction}/>
                            :
                            <img src={ darkModeIcon } alt="Mode Icons" onClick={this.changeModeFunction}/>
                        }
                        
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
