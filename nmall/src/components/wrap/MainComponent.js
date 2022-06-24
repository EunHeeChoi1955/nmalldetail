import React, { Component } from 'react';
import Section1Component from './main/Section1Component';
import Section2Component from './main/Section2Component';
import Section3Component from './main/Section3Component';
import Section4Component from './main/Section4Component';
import Section5Component from './main/Section5Component';
import Section6Component from './main/Section6Component';
import Section7Component from './main/Section7Component';
import Section8Component from './main/Section8Component';
import Section9Component from './main/Section9Component';
import Section10Component from './main/Section10Component';

class MainComponent extends Component {
    render() {
        return (
            <>
                <main id="main">
                    
                  
                   <Section1Component/>
                   <Section2Component/>
                   <Section3Component/>
                   <Section4Component/>
                   <Section5Component/>
                   <Section6Component/>              
                   <Section7Component/>              
                   <Section8Component/>              
                   <Section9Component/>        
                   <Section10Component/>        
                         
                    
                </main>
            </>
        );
    }
}

export default MainComponent;