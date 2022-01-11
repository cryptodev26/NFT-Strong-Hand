import React from "react";

class Footer extends React.Component {


    render () {
        return (
            <div className="footer">
                <p>
                    LAUNCHING IN DECEMBER! STAY TUNED AND FOLLOW OUR TWITTER
                </p>
                <div>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <img src={require('../assets/img/twitter.png').default} alt = "..."/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;