import React, {Component} from 'react';

class MainMenu extends Component {


    render() {
        return (
            <>
                <header id="main-header">
                    <div id="logo-name">
                        <img src="public/logo1.png" title="Circus" id="logo"/>
                    </div>
                    <div id="header-menu">
                        <menu id="main-menu">
                            <li><a href="/">Про нас</a></li>

                            <li><a href="/">Каталог</a>
                                <ul className="submenu">
                                    <li><a href="/">1</a></li>
                                    <li><a href="/">2</a></li>
                                    <li><a href="/">3</a></li>
                                </ul>
                            </li>
                            <li><a href="/">Новини</a></li>
                            <li><a href="http://localhost:63343/LearnServlets/web/html/Calculator.html?_ijt=d8oas5fa5g8r3qt86tjjdtf3ii">Контакти</a></li>
                        </menu>
                    </div>
                </header>
            </>
        )


    }
}

export default MainMenu;
