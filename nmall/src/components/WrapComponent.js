import React, { Component } from 'react';
import SkipComponent from './wrap/SkipComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';



class WrapComponent extends Component {
    render() {
        return (
            <>
                <div id="wrap">
                    <SkipComponent/>
                    <HeaderComponent/>
                    <MainComponent/>
                    <FooterComponent/>                    
                </div>
            </>
        );
    }
}

export default WrapComponent;