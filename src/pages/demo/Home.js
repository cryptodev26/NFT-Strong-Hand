import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

class Home extends React.Component {
    constructor () {
        super()
    }
    
    render () {
        return (
            <div>
                <Header />
                <div className="home">
                    <p>
                        CONCEPT: “Diamond Hands Passport”, will be a single standard for checking track record of a 
                        collector in flipping or diamond-handing projects, based on community-defined criteria, allowing 
                        projects to identify true collectors as well as collectors get easier whitelisting for projects.
                    </p>
                    <p>
                        UPDATE: Passport calculation logic is ready to be demoed for a small group of pilot users. Please 
                        reach out on Twitter if you would like to gain access for testing and feedback
                    </p>
                    <p>
                        What does it mean for a collector? You will be able to generate a “Diamond Hands Passport” that will verify how 
                        loyal you have been to the projects you have minted, or you have purchased by holding their tokens / NFTs. This 
                        passport will over time allow you to gain direct access to whitelists of important projects that would like to 
                        assemble a real community of holders. You will avoid silly “hoops” through which projects currently make you 
                        jump through (retweet competitions, discord shilling, assignments etc.)
                    </p>
                    <p>
                        What does it mean for a flipper? Umm… yeah, I think you know the answer. On the bright side, the passport is 
                        dynamic and you can start to improve your behaviors and eventually see the “Diamond Hands” rating on your 
                        passport.
                    </p>
                    <p>
                        What does it mean for a project? By vetting collectors using “Diamond Hands Passport” you are essentially 
                        guaranteed to white-list wallets that have behaved loyally and held projects they have invested in. The passport 
                        provides sufficient criteria for you to be able to define a fairly narrow filter (e.g. “wallets that have sold less than 
                        5% of minted tokens within first 1 month from mint” could be one criteria you define or “wallets that have minted 
                        more than 100 NFTs and have never sold a single one” can be another).
                    </p>
                    <p>
                        What is the DAO about? Once initial concept is released we would like to hand-over the definition of “Diamond 
                        Hands” levels to the holders of passports (we will look into a separate governance token later to potentially 
                        introduce additional parties to the table, such as projects implementing passport-based whitelists). This means the 
                        community will decide whether, say, having held a CryptoPunk for a year or having sold less than 10% of minted 
                        tokens is sufficient to be in the “Diamond Hands” league.
                    </p>
                    <p>
                        How will it work? The Passport will be an NFT which will be minted on this site. NFT metadata will 
                        represent key parameters of your collecting behavior, such as:
                        • How often do you mint projects
                        • How long do you hold your mints
                        • Do you sell minted projects at a loss
                        • What share of minted projects you hold to date
                        • etc.
                        Furthermore, the Passport will contain an X/100 overall rating, defined based on algorithm agreed by 
                        the DAO (initially set by the project team) and a categorization into 5 categories of hands (with 
                        corresponding mini-artworks which you can also use as your banner or avatar background if you wish). 
                        NFT will be tied to your wallet address and projects will be able to check this metadata to white-list 
                        only collectors that have truly demonstrated loyal behaviors to projects they have minted.
                    </p>
                    <p>
                        Will it cost something? Initial mint will be free, but over time mint fee will increase as adoption of the 
                        Passport increases, representing increasing utility of the Passport. Hence, we would recommend you 
                        to sign up soon!
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;