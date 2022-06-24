import React, { Component } from 'react';

class Section6Component extends Component {
    render() {
        return (
            <section id="section6">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="content">
                                <ul className="top-textWrap clearfix">
                                    <li className="left">특별 기획전<i></i></li>
                                    <li className="right"><span><a href='#'>전체보기<i className="material-icons">&#xe315;</i></a></span> </li>
                                </ul>
                            
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap" >
            
                                            <li className="slide slide0 swipe">
                                                <div className="slide-text-gap">
                                                    <div className="img-box">
                                                        <a href='#'><img src={process.env.PUBLIC_URL +"/img/sec6-img1.png"} alt=""/></a>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="text-wrap">
                                                            <h3>
                                                                집에서 즐기는<br/>
                                                            <strong>아늑한 홈카페!</strong> 
                                                            </h3>
                                                            <h4>엔몰에서 원두부터 간편커피까지</h4>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide1 swipe">
                                                <div className="slide-text-gap">
                                                    <div className="img-box">
                                                        <a href='#'><img src={process.env.PUBLIC_URL +"/img/sec6-img2.png"} alt=""/></a>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="text-wrap">
                                                            <h3>
                                                                집에서 즐기는<br/>
                                                            <strong>아늑한 홈카페!</strong> 
                                                            </h3>
                                                            <h4>엔몰에서 원두부터 간편커피까지</h4>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide2 swipe">
                                                <div className="slide-text-gap">
                                                    <div className="img-box">
                                                        <a href='#'><img src={process.env.PUBLIC_URL +"/img/sec6-img3.png"} alt=""/></a>
                                                    </div>
                                                    <div className="text-box">
                                                        <div className="text-wrap">
                                                            <h3>
                                                                집에서 즐기는<br/>
                                                            <strong>아늑한 홈카페!</strong> 
                                                            </h3>
                                                            <h4>엔몰에서 원두부터 간편커피까지</h4>
                                                        </div>                                                    
                                                    </div>
                                                </div>
                                            </li>
                                            
                                            <li className=" circle swipe">
                                                <div className="slide-text">
                                                    <div className="img-box">
                                                        <a href='#'>
                                                            <img src={process.env.PUBLIC_URL +"/img/sec3arrow.png"} alt=""/>
                                                        </a>                                               
                                                    </div>
                                                    <div className="text-box">
                                                        <h5>더보기</h5>                                                
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section6Component;