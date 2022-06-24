import React, { Component } from 'react';

class Section5Component extends Component {
    render() {
        return (
            <section id="section5">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="content">
                                <h2>지금 고객님께 딱!<i></i></h2>
                                <h3>이 순간에만 만나 볼 수 있는 특별한 기획 <span><a href='#'>전체보기<i className="material-icons">&#xe315;</i></a></span></h3>
                            
                                <div className="text-box">
                                    <h4>비 올때<br/>
                                        필요한 필수템</h4>
                                    <h5>15%쿠폰 + 첫 적립 이벤트</h5>
                                    <div><a href='#'>상품 더보기<i className="material-icons">&#xe315;</i></a></div>
                                </div>

                                <div className="slide-container ">                                
                                    <div className="slide-view">
                                        <ul className="slide-wrap" >        
                                            <li className="slide slide0 swipe">
                                                <div className="slide-text">                                                
                                                    <div className="img-box">
                                                        <div className="heart">
                                                            <a href="#">
                                                                <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>  
                                                            </a>
                                                        </div>
                                                        <a href='#'>
                                                            <img src={process.env.PUBLIC_URL +"/img/sec5slide1.png"} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="text-box">
                                                        <h3>
                                                            [소유] UVC 다용도 살균기
                                                            MDA-100RG 핸드폰, ...
                                                        </h3>
                                                        <h4>50,000원</h4>
                                                        <ul className="price">
                                                            <li>42<span>%</span></li>
                                                            <li>1,329,900<span>원</span></li>                                                        
                                                        </ul>
                                                        <ul>
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                                4.0 <span>(96)</span>
                                                            </li>
                                                            <li>
                                                            <span>
                                                                무료배송
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide1 swipe">
                                                <div className="slide-text">                                                
                                                    <div className="img-box">
                                                        <div className="heart">
                                                            <a href="#">
                                                                <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>  
                                                            </a>
                                                        </div>
                                                        <a href='#'>
                                                            <img src={process.env.PUBLIC_URL +"/img/sec5slide2.png"} alt=""/>
                                                        </a>                                                
                                                    </div>
                                                    <div className="text-box">
                                                        <h3>
                                                            제목 한줄 처리
                                                        </h3>
                                                        <h4>2,290,000원</h4>
                                                        <ul className="price">
                                                            <li>42<span>%</span></li>
                                                            <li>1,329,900<span>원</span></li>                                                        
                                                        </ul>
                                                        <ul>
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                                4.0 <span>(96)</span>
                                                            </li>
                                                            <li>
                                                            <span>
                                                                무료배송
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="slide slide2 swipe">
                                                <div className="slide-text">                                                
                                                    <div className="img-box">
                                                        <div className="heart">
                                                            <a href="#">
                                                                <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>  
                                                            </a>
                                                        </div>
                                                        <a href='#'>
                                                            <img src={process.env.PUBLIC_URL +"/img/sec5slide3.png"} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="text-box">
                                                        <h3>
                                                            [브레스마스크] KF-94 <br/>마스크 대형 5매입 x 10...
                                                        </h3>
                                                        <h4>2,290,000원</h4>
                                                        <ul className="price">
                                                            <li>42<span>%</span></li>
                                                            <li>1,329,900<span>원</span></li>                                                        
                                                        </ul>
                                                        <ul>
                                                            <li className="star">
                                                                <i className="fa fa-star"></i>
                                                                4.0 <span>(96)</span>
                                                            </li>
                                                            <li>
                                                            <span>
                                                                무료배송
                                                            </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>                                        
                                        
                                            <li className="circle swipe">
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

export default Section5Component;