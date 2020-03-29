import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function Layout(props) {
    return(
        <div className="app">
            <Header />
                <div className="container">
                    {props.children}
                </div>
            <Footer />
        </div>
    );
}

export default Layout
