import React, {Component} from 'react';

class AdditionalMenu extends Component {


    render() {
        return (
            <>
                <header id="info-panel">
                    <div id="secondary-menu">
                        <ul id="header-list">
                            <li className="phone"><img src="public/phone.png" title="Telephone"/></li>
                            <li><p>+38 077 22 33 10</p></li>
                            <li className="facebook"><a href="/"><img src="public/facebook.png" title="Facebook"/></a>
                            </li>
                            <li className="telegram"><a href="/"><img src="public/telegram.png" title="Telegram"/></a>
                            </li>
                            <li className="twitter"><a href="/"><img src="public/twitter.png" title="Twitter"/></a></li>
                            <li className="rss"><a href="/"><img src="public/rss.png" title="RSS"/></a></li>
                        </ul>
                    </div>
                </header>
            </>


        )
    }
}

export default AdditionalMenu;
