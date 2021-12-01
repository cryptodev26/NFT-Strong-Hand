import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Demo extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <Header />
                <div className="demo"></div>
                <Footer />
            </div>
        )
    }
}

export default Demo;