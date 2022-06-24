import React, { Component } from 'react';

class Section7Component extends Component {
    render() {
        return (
            <section id="section7">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="content">
                            <h2 className="hid">섹션4</h2>
                                <div className="sec4-slide-wrap">
                                    <ul>
                                        <li>
                                            <a href='#'><img src={process.env.PUBLIC_URL +"/img/sec7slide1.png"} alt="btn1"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </section>
        );
    }
}

export default Section7Component;