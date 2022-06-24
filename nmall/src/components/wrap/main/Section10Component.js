import React, { Component } from 'react';

class Section10Component extends Component {
    render() {
        return (
            <section id="section10">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="content">
                                <ul className="top-textWrap clearfix">
                                    <li className="left">인기검색 TOP5<i></i></li>
                                    <li className="right"><span><a href='#'>전체보기<i className="material-icons">&#xe315;</i></a></span> </li>
                                </ul>

                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap screensWrap" >

                                            <li className="slide slide0 ">
                                                <div className="text-box pageBtn addSec10">
                                                    <a href='#'>
                                                        <h3><strong>01</strong>마스크<span><i className="material-icons">&#xe313;</i></span></h3>
                                                    </a>
                                                </div>
                                                                                            
                                                <div className="img-box item addSec10 ">                                                   
                                                    <a href='#'>
                                                        <img src={process.env.PUBLIC_URL +"/img/sec10_slide1.png" }alt=""/>
                                                        <p><strong>마스크</strong> 상품 더보기<i className="material-icons">&#xe315;</i></p>
                                                    </a>
                                                </div>
                                            
                                            </li>
                                            <li className="slide slide1  ">
                                                <div className="text-box pageBtn">
                                                    <a href='#'>
                                                        <h3><strong>02</strong>비타민<span><i className="material-icons">&#xe313;</i></span></h3>
                                                    </a>
                                                </div>
                                                
                                                    
                                                <div className="img-box item">                                                   
                                                    <a href='#'>
                                                        <img src={process.env.PUBLIC_URL +"/img/sec10_slide2.png"} alt=""/>
                                                        <p><strong>비타민</strong> 상품 더보기<i className="material-icons">&#xe315;</i></p>
                                                    </a>
                                                </div>
                                            
                                            </li>
                                            <li className="slide slide2">
                                                <div className="text-box pageBtn">
                                                    <a href='#'>
                                                        <h3><strong>03</strong>물<span><i className="material-icons">&#xe313;</i></span></h3>
                                                    </a>     
                                                </div>
                                            
                                                <div className="img-box  item">                                                   
                                                    <a href='#'>
                                                        <img src={process.env.PUBLIC_URL +"/img/sec10_slide3.png"} alt=""/>
                                                        <p><strong>물</strong> 상품 더보기<i className="material-icons">&#xe315;</i></p>
                                                    </a>
                                                </div>
                                                
                                            </li>
                                            <li className="slide slide3">
                                                <div className="text-box pageBtn">
                                                    <a href='#'>
                                                    <h3><strong>04</strong>아웃도어<span><i className="material-icons">&#xe313;</i></span></h3>
                                                    </a>
                                                </div>
                                                
                                                    
                                                <div className="img-box  item ">                                                   
                                                    <a href='#'>
                                                        <img src={process.env.PUBLIC_URL +"/img/sec10_slide4.png" }alt=""/>
                                                        <p><strong>아웃도어</strong> 상품 더보기<i className="material-icons">&#xe315;</i></p>
                                                    </a>
                                                </div>
                                                
                                            </li>
                                            <li className="slide slide4">
                                                <div className="text-box pageBtn">
                                                    <a href='#'>
                                                        <h3><strong>05</strong>샴푸<span><i className="material-icons">&#xe313;</i></span></h3>
                                                    </a>
                                                </div>
                                                <div className="img-box  item">                                                   
                                                    <a href='#'>
                                                        <img src={process.env.PUBLIC_URL +"/img/sec10_slide5.png"} alt=""/>
                                                        <p><strong>샴푸</strong> 상품 더보기<i className="material-icons">&#xe315;</i></p>
                                                    </a>
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

export default Section10Component;