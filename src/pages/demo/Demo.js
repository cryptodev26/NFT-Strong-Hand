import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Button, Row, Col } from 'react-bootstrap';
import Web3 from 'web3';

class Demo extends React.Component {
    constructor () {
        super();
        this.state = {
            wallet : '0x0000000000000000000000000',
            button : 'I AM READY TO FIND OUT'
        }
        this.connect = this.connect.bind(this)
    }

    async connect () {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
            const accounts = await window.web3.eth.getAccounts()
            this.setState({
                wallet: accounts[0]
            })

        } else if(window.web3) {
            window.web3 = new Web3(window.web3.currentProvider) 
            const accounts = await window.web3.eth.getAccounts()
            this.setState({
                wallet: accounts[0]
            })
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }

    }
    render () {
        return (
            <div>
                <Container>
                    <Header />
                    <div className="demo">
                        <div className="content page-header">
                            <div className="follow">
                                <a href="https://twitter.com" target="_blank">
                                    <img src={require('../../assets/img/twitter.png').default} />
                                </a>
                                <span className="title">&nbsp;FOLLOW US NOT TO MISS LAUNCH</span>
                            </div>
                            <div className="connect">
                                <Button variant="outline-primary" className="title" onClick={this.connect}>Connect Wallet</Button>
                            </div>
                        </div>
                        <div className="content">
                            <p className="title">
                            Please connect Wallet and click below to test out the algorithm
                            </p>
                        </div>
                        <div className="content collector">
                            <p className="title">
                                WHAT KIND OF COLLECTOR HANDS DO YOU HAVE?
                            </p>
                            <img src={require('../../assets/img/timeline.png').default} />
                        </div>
                        <div className="content">
                            <p className="title text-center">Wallet connected : {this.state.wallet}</p>
                        </div>
                        <div className="content text-center find-out">
                            <Button variant="outline-primary">
                                {this.state.button}
                            </Button>
                        </div>
                        <div className="content result-header">
                            <div className="progress-diamond">
                                <img src={require('../../assets/img/diamond.svg').default} />
                                <img src={require('../../assets/img/diamond.svg').default} />
                                <img src={require('../../assets/img/diamond.svg').default} />
                                <img src={require('../../assets/img/diamond.svg').default} />
                                <img src={require('../../assets/img/diamond.svg').default} />
                            </div>
                            <h1 className="text-center">STRONG HANDS! (85/100)</h1>
                        </div>
                        <div className="content horizontal-line">
                            <div className="line">
                                {/* <img src={require('../../assets/img/1.svg').default} /> */}
                            </div>
                        </div>
                        <Row className="content output">
                            <Col lg="6" md="12" sm="12" xs="12">
                                <p className="title">NFT MINTING</p>
                                <div className="find">
                                    <label>#NFTS MINTED:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">155</Button>
                                    </div>
                                </div>
                                <div className="find">
                                    <label>% OF MINTED SOLD:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">20%</Button>
                                    </div>
                                </div>
                                <div className="find">
                                    <label>% SOLD WITHIN 1 WEEK:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">10%</Button>
                                    </div>
                                </div>
                                <div className="find">
                                    <label>% SOLD BELOW MINT:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">30%</Button>
                                    </div>
                                </div>
                            </Col> 
                            <Col lg="6" md="12" sm="12" xs="12">
                                <p className="title">NFT PURCHASING</p>
                                <div className="find">
                                    <label>#NFTS BOUGHT:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">155</Button>
                                    </div>
                                </div>
                                <div className="find">
                                    <label>% OF BOUGHT SOLD:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">20%</Button>
                                    </div>
                                </div>
                                <div className="find">
                                    <label>% SOLD WITHIN 1 WEEK:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">10%</Button>
                                    </div>
                                </div>
                                <div className="find">
                                    <label>% SOLD BELOW BUY:</label>
                                    <div className="rating">
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                        <div className="column"></div>
                                    </div>
                                    <div className="result">
                                        <Button variant="secondary">30%</Button>
                                    </div>
                                </div>
                            </Col> 
                        </Row>
                        <Row className="content bonus">
                            <Col lg="12" md="12" sm="12" xs="12">
                                <p className="title">BONUS</p>
                                <div className="bonus-info">
                                    <label>BLUE CHIPS:</label>
                                    <div className="chips">
                                        <div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label title="" for="formBasicCheckbox" class="form-check-label">CRYPTOPUNK</label>
                                            </div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label title="" for="formBasicCheckbox" class="form-check-label">AUTOGLYPH</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label title="" for="formBasicCheckbox" class="form-check-label">BAYC</label>
                                            </div>
                                            <div class="form-check">
                                                <input type="checkbox" class="form-check-input" />
                                                <label title="" for="formBasicCheckbox" class="form-check-label">FIDENZA</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="age">
                                        <label>WALLET AGE: </label>
                                        <div>
                                            <Button variant="secondary">150</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="content passport">
                            <Col lg="12" md="12" sm="12" xs="12">
                                <p className="title">YOUR PASSPORT AVATAR</p>
                                <div className="avatar-section">
                                    <div className="avatar-panel">
                                        <p className="sub-title">STRONG HANDS! (85/100)</p>
                                        <div className="progress-diamond">
                                            <img src={require('../../assets/img/diamond.svg').default} />
                                            <img src={require('../../assets/img/diamond.svg').default} />
                                            <img src={require('../../assets/img/diamond.svg').default} />
                                            <img src={require('../../assets/img/diamond.svg').default} />
                                            <img src={require('../../assets/img/diamond.svg').default} />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Footer />
                </Container>
            </div>
        )
    }
}

export default Demo;