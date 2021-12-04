import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, Button, Row, Col } from 'react-bootstrap';
import Web3 from 'web3';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Moralis = require('moralis');


const serverUrl = "https://s6gixbeuyfx4.usemoralis.com:2053/server";
const appId = "PISnhV8BumWtmODGXXq6xyhwf62lA3YZqLHra34j";

const etherWeb3    = new Web3("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
const handTypes = [
    'PAPER HANDS',
    'WEAK HANDS',
    'STRONG HANDS',
    'DIAMOND HANDS',
    'TUNGSTEN HANDS'
]

class Demo extends React.Component {
    constructor () {
        super();
        this.state = {
            walletAddress               : '0x0000000000000000000000000',
            button                      : <Button variant="outline-primary" onClick={()=> this.checkAll("0x2a4fab37ba4eda353f46a1155ac762f71eadca02")}>
                                            I AM READY TO FIND OUT</Button>,
            start                       : true,
            resultImage                 : '',
            diamond                     : [],
            mintNumber                  : 0,
            mintNumberContainer         : [],
            mintSold                    : 0,
            mintSoldContainer           : [],
            mintSoldWeek                : 0,
            mintSoldWeekContainer       : [],
            mintSoldBelow               : 0,
            mintSoldBelowContainer      : [],
            buynumber                   : 0,
            buynumberContainer          : [],
            buySold                     : 0,
            buySoldContainer            : [],
            buySoldWeek                 : 0,
            buySoldWeekContainer        : [],
            buySoldBelow                : 0,
            buySoldBelowContainer       : [],
            walletAge                   : 0,
            cryptpunk                   : 0,
            bayc                        : 0,
            autography                  : 0,
            artblock                    : 0,
            walletValue                 : 0,
            baycstate                   : false,
            cryptopunkstate             : false,
            artblockstate               : false,
            autographystate             : false,
        }
    }

    async componentWillMount(){
        Moralis.start({ serverUrl, appId });
    }

    async checkAll(address){
        this.setState({
            button : <Button variant="outline-primary">Please wait...</Button>
        })
        try {
            await this.mintCheck(address)
            await this.buyCheck(address)
            await this.holdCheck(address)
            await this.walletAge(address)
            await this.valueCheck()
            this.setState({
                button : ''
            })
        } catch {
            this.setState({
                button : <Button variant="outline-primary" onClick={()=> this.checkAll("0x2a4fab37ba4eda353f46a1155ac762f71eadca02")}>Error
                            </Button>
            })
        }
    }

    async mintCheck(address){
        let mint_to_sale_days = []
        let mint_sold = 0
        let sold_below_mint = 0
        let mint_array = []
        const options = { 
            chain: "eth", 
            address: address ,
            limit: "10000" 
        };

        let transfersNFT = await Moralis.Web3API.account.getNFTTransfers(options);
        transfersNFT = transfersNFT.result
        for (let i = 0; i < transfersNFT.length; i++) {
            if (transfersNFT[i].from_address === "0x0000000000000000000000000000000000000000"){
                mint_array.push({data : transfersNFT[i], i})
            }
        }
        for (let i = 0; i < mint_array.length; i++) {
            for (let j = mint_array[i].i + 1; j < transfersNFT.length; j++) {
                if(mint_array[i].data.token_address == transfersNFT[j].token_address && mint_array[i].data.token_id == transfersNFT[j].token_id && transfersNFT[j].from_address == address){
                    if (Date.parse(transfersNFT[j].block_timestamp) / 1000 - Date.parse(mint_array[i].data.block_timestamp) / 1000 < 86400 * 7){
                        mint_to_sale_days.push(Date.parse(transfersNFT[j].block_timestamp) / 1000 - Date.parse(mint_array[i].data.block_timestamp) / 1000)
                    }
                    if(mint_array[i].data.value > transfersNFT[j].value){
                        sold_below_mint = sold_below_mint + 1
                    }
                    mint_sold = mint_sold + 1
                    break
                }
            }
        }

        let result = {
        mint_count          : mint_array.length,
        rate_mint_sold      : ((mint_sold / mint_array.length) * 100).toFixed(2),
        rate_mint_week_sold : ((mint_to_sale_days.length/mint_array.length) * 100).toFixed(2),
        rate_below_mint     : ((sold_below_mint / mint_array.length) * 100).toFixed(2)
        }
        let mintNumberContainer = [], 
            mintSoldContainer = [], 
            mintSoldWeekContainer = [],
            mintSoldBelowContainer = []
        for(let i = 0; i < Math.ceil(result.mint_count / 20); i ++ ) {
            mintNumberContainer.push(<div className="column"></div>)
        }
        for(let i = 0; i < Math.ceil(result.rate_mint_sold / 20); i ++ ) {
            mintSoldContainer.push(<div className="column"></div>)
        }
        for(let i = 0; i < Math.ceil(result.rate_mint_week_sold / 20); i ++ ) {
            mintSoldWeekContainer.push(<div className="column"></div>)
        }
        for(let i = 0; i < Math.ceil(result.rate_below_mint / 20); i ++ ) {
            mintSoldBelowContainer.push(<div className="column"></div>)
        }
        this.setState({
        mintNumber : result.mint_count,
        mintSold : result.rate_mint_sold,
        mintSoldWeek : result.rate_mint_week_sold,
        mintSoldBelow : result.rate_below_mint,
        mintNumberContainer : mintNumberContainer,
        mintSoldContainer : mintSoldContainer,
        mintSoldWeekContainer : mintSoldWeekContainer,
        mintSoldBelowContainer : mintSoldBelowContainer,
        })
    }

    async buyCheck(address){
        let buy_array = []
        let buy_to_sale_days = []
        let buy_sold = 0
        let sold_below_buy = 0
        let options = { 
            chain: "eth", 
            address: address ,
            limit: "10000" 
        };
        let transfersNFT = await Moralis.Web3API.account.getNFTTransfers(options);
        transfersNFT = transfersNFT.result
        for (let i = 0; i < transfersNFT.length; i++) {
            if (transfersNFT[i].to_address === address && transfersNFT[i].value !== '0'){
            buy_array.push({data : transfersNFT[i], i})
            }
        }

        for (let i = 0; i < buy_array.length; i++) {
            for (let j = buy_array[i].i + 1; j < transfersNFT.length; j++) {
                if(buy_array[i].data.token_address === transfersNFT[j].token_address && buy_array[i].data.token_id === transfersNFT[j].token_id && transfersNFT[j].from_address === address){
                    if (Date.parse(transfersNFT[j].block_timestamp) / 1000 - Date.parse(buy_array[i].data.block_timestamp) / 1000 < 86400 * 7){
                    buy_to_sale_days.push(Date.parse(transfersNFT[j].block_timestamp) / 1000 - Date.parse(buy_array[i].data.block_timestamp) / 1000)
                    } 
                    buy_sold += 1
                    if(buy_array[i].data.value > transfersNFT[j].value){
                    sold_below_buy += 1
                    } 
                break
                }
            }
        }

        let result = {
            bought_count          : buy_array.length,
            rate_mint_sold      : ((buy_sold / buy_array.length) * 100).toFixed(2),
            rate_mint_week_sold : ((buy_to_sale_days.length/buy_array.length) * 100).toFixed(2),
            rate_below_mint     : ((sold_below_buy / buy_array.length) * 100).toFixed(2)
        }
        let buynumberContainer = [], 
            buySoldContainer = [],
            buySoldWeekContainer = [],
            buySoldBelowContainer = []
        for ( let i = 0; i < Math.ceil(result.bought_count / 20); i ++ ) {
            buynumberContainer.push(<div className="column"></div>)
        }
        for ( let i = 0; i < Math.ceil(result.rate_mint_sold / 20); i ++ ) {
            buySoldContainer.push(<div className="column"></div>)
        }
        for ( let i = 0; i < Math.ceil(result.rate_below_mint / 20); i ++ ) {
            buySoldWeekContainer.push(<div className="column"></div>)
        }
        for ( let i = 0; i < Math.ceil(result.rate_mint_week_sold / 20); i ++ ) {
            buySoldBelowContainer.push(<div className="column"></div>)
        }
        this.setState({
            buynumber : result.bought_count ,
            buynumberContainer : buynumberContainer,
            buySold : result.rate_mint_sold,
            buySoldContainer : buySoldContainer,
            buySoldBelow : result.rate_mint_week_sold,
            buySoldBelowContainer : buySoldBelowContainer,
            buySoldWeek : result.rate_below_mint,
            buySoldWeekContainer : buySoldWeekContainer
        })
    }

    async holdCheck(address){
    let baycTokenAddress  = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
    let cryptoPunkAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
    let autographyAddress = "0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782"
    let artblockAddress   = "0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270"
    let bayc, cryptopunk , autography, artblock, cryptopunkstate, autographystate, artblockstate, baycstate

    let options = { chain: 'eth', address: address, token_address: baycTokenAddress };
    let baycNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    if (baycNFTs.total !== 0) {
        bayc = 1
        baycstate = true
    } else {
        bayc = 0
        baycstate = false
    }

    options = { chain: 'eth', address: address, token_address: cryptoPunkAddress };
    baycNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    if (baycNFTs.total !== 0) {
        cryptopunk = 1
        cryptopunkstate = true
    }else {
        cryptopunk = 0
        cryptopunkstate = false
    }
    options = { chain: 'eth', address: address, token_address: autographyAddress };
    baycNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    if (baycNFTs.total !== 0) {
        autography = 1
        autographystate = true
    }
    else {
        autography = 0
        autographystate = false
    }
    options = { chain: 'eth', address: address, token_address: artblockAddress };
    baycNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    if (baycNFTs.total !== 0) {
        artblock = 1
        artblockstate = true
    } else {
        artblock = 0
        artblockstate = false
    }
    
    let result = {
        bayc : bayc,
        cryptopunk : cryptopunk,
        autography : autography,
        artblock : artblock
    }

    this.setState({
        cryptopunk : result.cryptopunk,
        artblock   : result.artblock,
        autography : result.autography,
        bayc       : result.bayc,
        cryptopunkstate : cryptopunkstate,
        baycstate  : baycstate,
        artblockstate : artblockstate,
        autographystate : autographystate
    })
    }

    async walletAge(address){
        let options = { 
            chain: "eth", 
            address: address ,
            limit: "10000" 
        }
        let transfersNFT = await Moralis.Web3API.account.getNFTTransfers(options);
        transfersNFT = transfersNFT.result
        for (let i = 0; i < transfersNFT.length; i++) {
            if (transfersNFT[i].from_address === "0x0000000000000000000000000000000000000000"||(transfersNFT[i].to_address === address && transfersNFT[i].value !== '0')){
                let walletage = Math.round((Math.round((new Date()).getTime() / 1000) - (Date.parse(transfersNFT[i].block_timestamp) / 1000)) / 86400)
                
                this.setState({
                    walletAge : walletage
                })      
                break
            } 
        }
    }

    async valueCheck(){
        let value = (Math.min(100, 
        (
            Math.min(this.state.mintNumber/1000 , 10) + 
            Math.max(10-this.state.mintSold/10 , 0) + 
            Math.max(10-this.state.mintSoldWeek/10 , 0)  + 
            Math.max(10-this.state.mintSold/10 , 0) + 
            Math.min(this.state.buynumber / 1000, 0) +
            Math.max(10-this.state.buySold/10 , 0) + 
            Math.max(10-this.state.buySoldBelow/10 , 0)  + 
            Math.max(10-this.state.buySoldWeek/10 , 0)  + 
            this.state.cryptpunk * 10 +
            this.state.artblock * 10 +
            this.state.autography * 10 +
            this.state.bayc * 10
        )
        )).toFixed(0)
        let diamond = []
        for(let i = 0; i < 5; i ++ ) {
            if(i < Math.ceil(value / 20)) {
                diamond.push(<img src={require('../../assets/img/diamond.svg').default} style={{ opacity : 1 }} />)
            } else {
                diamond.push(<img src={require('../../assets/img/diamond.svg').default} />)
            }
        }
        let resultImage = ''
        if(value <= 100 && value >= 80) {
            resultImage = <img src={require('../../assets/img/tangsten.svg').default} />
        } else if(value < 80 && value >= 60) {
            resultImage = <img src={require('../../assets/img/diamondhand.svg').default} />
        } else if (value < 60 && value >= 40) {
            resultImage = <img src={require('../../assets/img/stronghand.svg').default} />
        } else if(value < 40 && value >= 20) {
            resultImage = <img src={require('../../assets/img/weakhand.svg').default} />
        } else {
            resultImage = <img src={require('../../assets/img/paper.svg').default} />
        }
        this.setState({
            start : false,
            walletValue : value,
            diamond : diamond,
            resultImage: resultImage
        })
    }

    // async connect () {
    //     if(window.ethereum) {
    //         window.web3 = new Web3(window.ethereum)
    //         await window.ethereum.enable()
    //         const accounts = await window.web3.eth.getAccounts()
    //         this.setState({
    //             wallet: accounts[0]
    //         })

    //     } else if(window.web3) {
    //         window.web3 = new Web3(window.web3.currentProvider) 
    //         const accounts = await window.web3.eth.getAccounts()
    //         this.setState({
    //             wallet: accounts[0]
    //         })
    //     } else {
    //         window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    //     }
    // }

    async connect () {

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
                                <Button variant="outline-primary" className="title" onClick={()=>this.connect()}>Connect Wallet</Button>
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
                            <p className="title text-center">Wallet connected : {this.state.walletAddress}</p>
                        </div>
                        <div className="content text-center find-out">
                            {this.state.button}
                        </div>
                        {!this.state.start ?
                        <div>
                            <div className="content result-header">
                                <div className="progress-diamond">
                                    {(this.state.diamond.length) ? (this.state.diamond) :
                                    (<div><img src={require('../../assets/img/diamond.svg').default} />
                                        <img src={require('../../assets/img/diamond.svg').default} />
                                        <img src={require('../../assets/img/diamond.svg').default} />
                                        <img src={require('../../assets/img/diamond.svg').default} />
                                        <img src={require('../../assets/img/diamond.svg').default} /></div>)}
                                </div>
                                <h1 className="text-center">{handTypes[Math.ceil(this.state.walletValue / 20)] ? handTypes[Math.ceil(this.state.walletValue / 20)] : ''} ({this.state.walletValue}/100)</h1>
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
                                            {this.state.mintNumberContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.mintNumber}</Button>
                                        </div>
                                    </div>
                                    
                                    <div className="find">
                                        <label>% OF MINTED SOLD:</label>
                                        <div className="rating">
                                            {this.state.mintSoldContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.mintSold}%</Button>
                                        </div>
                                    </div>
                                    <div className="find">
                                        <label>% SOLD WITHIN 1 WEEK:</label>
                                        <div className="rating">
                                            {this.state.mintSoldWeekContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.mintSoldWeek}%</Button>
                                        </div>
                                    </div>
                                    <div className="find">
                                        <label>% SOLD BELOW MINT:</label>
                                        <div className="rating">
                                            {this.state.mintSoldBelowContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.mintSoldBelow}%</Button>
                                        </div>
                                    </div>
                                </Col> 
                                <Col lg="6" md="12" sm="12" xs="12">
                                    <p className="title">NFT PURCHASING</p>
                                    <div className="find">
                                        <label>#NFTS BOUGHT:</label>
                                        <div className="rating">
                                            {this.state.buynumberContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.buynumber}</Button>
                                        </div>
                                    </div>
                                    <div className="find">
                                        <label>% OF BOUGHT SOLD:</label>
                                        <div className="rating">
                                            {this.state.buySoldContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.buySold}%</Button>
                                        </div>
                                    </div>
                                    <div className="find">
                                        <label>% SOLD WITHIN 1 WEEK:</label>
                                        <div className="rating">
                                            {this.state.buySoldWeekContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.buySoldWeek}%</Button>
                                        </div>
                                    </div>
                                    <div className="find">
                                        <label>% SOLD BELOW BUY:</label>
                                        <div className="rating">
                                            {this.state.buySoldBelowContainer}
                                        </div>
                                        <div className="result">
                                            <Button variant="secondary">{this.state.buySoldBelow}%</Button>
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
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" checked={this.state.cryptopunkstate} />
                                                    <label className="form-check-label" >CRYPTOPUNK</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" checked={this.state.autographystate}/>
                                                    <label className="form-check-label" >AUTOGLYPH</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" checked={this.state.baycstate} />
                                                    <label className="form-check-label">BAYC</label>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" checked={this.state.artblockstate}/>
                                                    <label className="form-check-label" >FIDENZA</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="age">
                                            <label>WALLET AGE: </label>
                                            <div>
                                                <Button variant="secondary">{this.state.walletAge}</Button>
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
                                            <p className="sub-title">{handTypes[Math.ceil(this.state.walletValue / 20)] ? handTypes[Math.ceil(this.state.walletValue / 20)] : ''} ({this.state.walletValue}/100)</p>
                                            <div className="result-image">
                                                {this.state.resultImage}
                                            </div>
                                            <div className="progress-diamond">
                                                {(this.state.diamond.length) ? (this.state.diamond) :
                                                (<div><img src={require('../../assets/img/diamond.svg').default} />
                                                    <img src={require('../../assets/img/diamond.svg').default} />
                                                    <img src={require('../../assets/img/diamond.svg').default} />
                                                    <img src={require('../../assets/img/diamond.svg').default} />
                                                    <img src={require('../../assets/img/diamond.svg').default} /></div>)}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        : <div style={{ height: '20vw'}}></div>}
                    </div>
                    <Footer />
                </Container>
            </div>
        )
    }
}

export default Demo;