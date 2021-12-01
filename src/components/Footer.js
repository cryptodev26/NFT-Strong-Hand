import React from "react";

class Footer extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div className="footer">
                <p>
                    LAUNCHING IN DECEMBER! STAY TUNED AND FOLLOW OUR TWITTER
                </p>
                <div>
                    <a href="https://twitter.com" target="_blank">
                        <img src={require('../assets/img/twitter.png').default} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;