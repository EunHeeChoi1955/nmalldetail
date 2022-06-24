import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <>
                 <header id="header"  className="header">
                    <div className="container ">

                        <div className="top clearfix">

                            <div className="left">
                                <div>
                                    <span>
                                        <a  href="%PUBLIC_URL%/index.html" className="logo-btn " title="Logo">
                                            <span ></span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="right">
                                <aside id="aside" className="clearfix">
                                    <div className="icon-box-gap">
                                        <div className="icon-box">
                                            <ul className="clearfix ">
                                                <li >
                                               
                                                <a href='#'><img src= {process.env.PUBLIC_URL + "/img/magni.svg"} alt=""/></a> 
                                                    
                                                </li>
                                                <li>
                                                    <a href='#'>
                                                        <em className="badge">5</em>
                                                        <span><img src= {process.env.PUBLIC_URL + "/img/cart.svg"} alt=""/></span> 
                                                       
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>

                        </div>


                        <div className="bottom">
                            
                            <div className="bottom-wrap">
                                <nav id="nav" className="clearfix">
                                    <ul className="clearfix nav-warp ">
                                        <li className="mainbtn addClass">
                                            <a href='#' className="main-btn addClass">홈</a>
                                            
                                        </li>
                                        <li className="mainbtn">
                                            <a href='#' className="main-btn">베스트</a>
                                                                                                    
                                        </li>
                                        <li className="mainbtn">
                                            <a href='#' className="main-btn">신상품</a>
                                                                                                                                
                                        </li>
                                        <li className="mainbtn">
                                            <a href='#' className="main-btn">기획전</a>
                                                                    
                                        </li>
                                        <li className="mainbtn">
                                            <a href='#' className="main-btn">이벤트</a>
                                                                    
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>

                            
                        </div>

                    </div>
                </header>
            </>
        );
    }
}

export default HeaderComponent;