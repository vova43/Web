import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {

    render() {
        return (
            <>
                <footer id="footer">
                    <div id="footer-1">
                        <ul id="footer-list">

                            <li className="facebook"><a href="/"><img src="public/facebook.png" title="Facebook"/></a>
                            </li>
                            <li className="telegram"><a href="/"><img src="public/telegram.png" title="Telegram"/></a>
                            </li>
                            <li className="twitter"><a href="/"><img src="public/twitter.png" title="Twitter"/></a></li>
                            <li className="rss"><a href="/"><img src="public/rss.png" title="RSS"/></a></li>
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}

export default Footer;
