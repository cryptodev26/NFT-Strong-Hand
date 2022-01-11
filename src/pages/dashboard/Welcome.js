import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Welcome extends React.Component {
    render () {
        return (
            <div className="welcome">
                <Container>
                    <Row className="page-header">
                        <Col lg={6} md={6} sm={6} xs={6} className="diamond">
                            <span>
                                <strong>DIAMOND<br />HAND<br />PASSPORT
                                </strong>
                            </span>
                            <img src={require('../../assets/img/diamond.svg').default} alt = "..."/>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} className="follow">
                            <a href="https://twitter.com">
                                <img src={require('../../assets/img/twitter.png').default} alt = "..."/>
                                <strong>FOLLOW US<br />NOT TO MISS<br />LAUNCH</strong>
                            </a>
                        </Col>
                    </Row>
                    <p>
                        <strong>CONCEPT:</strong>
                            Create a “Diamond Hands Passport”, which will be a single standard for checking track 
                            record of a collector in flipping or diamond-handing projects, based on community-defined criteria, 
                            allowing projects to identify true collectors as well as collectors get easier whitelisting for projects.
                    </p>
                    <Row>
                        <Col md={12}>
                            <p className="text-center margin-top-30 sub-title">
                                <strong>WHAT KIND OF COLLECTOR HANDS DO YOU HAVE?</strong>
                            </p>
                            <div className="timeline">
                                <img src={require('../../assets/img/timeline.svg').default} width="90%" alt = "..."/>
                                <div class="timeline-row">
                                    <div className="time-one">
                                        <img src={require('../../assets/img/paper.svg').default} alt = "..."/>
                                        <h3>Paper-HANDS</h3>
                                        <p>"I flip... mostly at a loss."</p>
                                    </div>
                                    <div className="time-one">
                                        <img src={require('../../assets/img/weakhand.svg').default} alt = "..."/>
                                        <h3>WEAK-HANDS</h3>
                                        <p>"I sell when I need liq... which is almost always."</p>
                                    </div>
                                    <div className="time-one">
                                        <img src={require('../../assets/img/stronghand.svg').default} alt = "..."/>
                                        <h3>Strong-HANDS</h3>
                                        <p>"I hold... but I do take profits when I can."</p>
                                    </div>
                                    <div className="time-one">
                                        <img src={require('../../assets/img/diamondhand.svg').default} alt = "..."/>
                                        <h3>DIAMOND-HANDS</h3>
                                        <p>"I hold... even in the brutal bear market."</p>
                                    </div>
                                    <div className="time-one">
                                        <img src={require('../../assets/img/tangsten.svg').default} alt = "..."/>
                                        <h3>TUNGSTEN-HANDS</h3>
                                        <p>"I... am either ultimate chad or just lost my ledger pass phrase."</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <p>
                        <span className="question">What does it mean for a collector?</span> <br />You will be able to generate a “Diamond Hands Passport” that will verify how 
                        loyal you have been to the projects you have minted, or you have purchased by holding their tokens / NFTs. This 
                        passport will over time allow you to gain direct access to whitelists of important projects that would like to 
                        assemble a real community of holders. You will avoid silly “hoops” through which projects currently make you 
                        jump through (retweet competitions, discord shilling, assignments etc.)
                    </p>
                    <p>
                        <span className="question">What does it mean for a flipper?</span> <br />Umm… yeah, I think you know the answer. On the bright side, the passport is 
                        dynamic and you can start to improve your behaviors and eventually see the “Diamond Hands” rating on your 
                        passport
                    </p>
                    <p>
                        <span className="question">What does it mean for a project?</span> <br />By vetting collectors using “Diamond Hands Passport” you are essentially 
                        guaranteed to white-list wallets that have behaved loyally and held projects they have invested in. The passport 
                        provides sufficient criteria for you to be able to define a fairly narrow filter (e.g. “wallets that have sold less than 
                        5% of minted tokens within first 1 month from mint” could be one criteria you define or “wallets that have minted 
                        more than 100 NFTs and have never sold a single one” can be another).
                    </p>
                    <p>
                        <span className="question">What is the DAO about?</span> <br />Once initial concept is released we would like to hand-over the definition of “Diamond 
                        Hands” levels to the holders of passports (we will look into a separate governance token later to potentially 
                        introduce additional parties to the table, such as projects implementing passport-based whitelists). This means the 
                        community will decide whether, say, having held a CryptoPunk for a year or having sold less than 10% of minted 
                        tokens is sufficient to be in the “Diamond Hands” league
                    </p>
                    <p>
                        <span className="question">How will it work?</span> <br />The Passport will be an NFT which will be minted on this site. NFT metadata will represent key 
                        parameters of your collecting behavior, such as:
                    </p>
                    <ul>
                        <li>
                        How often do you mint projects
                        </li>
                        <li>
                        How long do you hold your mints
                        </li>
                        <li>
                        Do you sell minted projects at a loss
                        </li>
                        <li>
                        What share of minted projects you hold to date
                        </li>
                        <li>
                        etc
                        </li>
                    </ul>
                    <p>
                        Furthermore, the Passport will contain an X/100 overall rating, defined based on algorithm agreed by the DAO 
                        (initially set by the project team) and a categorization into 5 categories of hands (with corresponding mini-artworks 
                        which you can also use as your banner or avatar background if you wish). NFT will be tied to your wallet address 
                        and projects will be able to check this metadata to white-list only collectors that have truly demonstrated loyal 
                        behaviors to projects they have minted.
                    </p>
                    <p>
                        <span className="question">Will it cost something?</span> <br />Initial mint will be free, but over time mint fee will increase as adoption of the Passport 
                        increases, representing increasing utility of the Passport. Hence, we would recommend you to sign up soon!
                    </p>
                    <p className="text-center sub-title">
                        <strong>LAUNCHING IN DECEMBER! STAY TUNED AND FOLLOW OUR TWITTER</strong>    
                    </p>
                    <p className="text-center page-footer">
                        <a href="https://twitter.com/@DiamondPassport">
                            <img src={require('../../assets/img/twitter.png').default} alt = "..."/>
                        </a>
                    </p>
                </Container>
            </div>
        );
    }
}

export default Welcome;