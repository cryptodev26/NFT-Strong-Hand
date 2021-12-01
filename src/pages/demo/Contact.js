import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Contact extends React.Component {
    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <Header />
                <div className="contact"></div>
                <Footer />
            </div>
        );
    }
}

export default Contact;