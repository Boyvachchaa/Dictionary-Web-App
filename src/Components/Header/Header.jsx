import React, { Component } from 'react';
import Logo from '../../assets/Icons/logo.svg';
import lightModeIcon from '../../assets/Icons/lightMode.svg';
import darkModeIcon from '../../assets/Icons/darkMode.svg';
import './Header.scss';

class Header extends Component {
    


    render() {
        return (
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav>
                    <div className="fonts">
                        <form name="fonts">
                            <select name="fonts">
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
                    <div className="changeMode">
                        <img src={ lightModeIcon } alt="Mode Icons"/>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
