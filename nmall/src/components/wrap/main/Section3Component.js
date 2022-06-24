import React, { Component } from 'react';

class Section3Component extends Component {
    render() {
        return (
            <section id="section3">
                    <div className="container">
                        <div className="gap">
                            <div className="wrap">
                                <div className="content">
                                    <h2>MD’s Pick<i></i></h2>
                                    <h3>놓쳐서는 안될 상품을 모아봤어요<span><a href='#'>전체보기<i className="material-icons">&#xe315;</i></a></span></h3>
                                
                                    <div className="slide-container">
                                        <div className="slide-view">
                                            <ul className="slide-wrap" >
                
                                                <li className="slide slide0 swipe">
                                                    <div className="slide-text">                                                
                                                        <div className="img-box">
                                                            <div className="heart">
                                                                <a href="#">
                                                                    <img className="redHeart" src= {process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src= {process.env.PUBLIC_URL +"/img/heart.svg" } alt=""/>   
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src= {process.env.PUBLIC_URL +"/img/sec3slide1.png"} alt=""/>
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
                                                            <ul >
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(9,999)</span>
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
                                                                    <img className="redHeart" src= {process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src= {process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>  
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src= {process.env.PUBLIC_URL +"/img/sec3slide2.png"} alt=""/>
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
                                                            <ul >
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(6)</span>
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
                                                                <img src={process.env.PUBLIC_URL +"/img/sec3slide3.png"} alt=""/>
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
                                                            <ul >
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(6)</span>
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
                                                <li className="slide slide3 swipe">
                                                    <div className="slide-text">                                                
                                                        <div className="img-box">
                                                            <div className="heart">
                                                                <a href="#">
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>  
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec3slide4.png"} alt=""/>
                                                            </a>
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>
                                                                [에티카] 보건용마스크 K<br/>F94 화이트/블랙 - 대...
                                                            </h3>
                                                            <h4>2,290,000원</h4>
                                                            <ul className="price">
                                                                <li>42<span>%</span></li>
                                                                <li>1,329,900<span>원</span></li>                                                        
                                                            </ul>
                                                            <ul >
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(6)</span>
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
                                                <li className="slide slide4 swipe">
                                                    <div className="slide-text">
                                                        <div className="img-box">
                                                            <div className="heart">
                                                                <a href="#">
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>  
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec3slide5.png"} alt=""/>
                                                            </a>                                                
                                                        </div>
                                                        <div className="text-box">
                                                            <h3>
                                                                [이롬] 황성주 유기농 AB<br/>
                                                                C주스 110ml x 24팩 외 ...
                                                            </h3>
                                                            <h4>2,290,000원</h4>
                                                            <ul className="price">
                                                                <li>42<span>%</span></li>
                                                                <li>1,329,900<span>원</span></li>                                                        
                                                            </ul>
                                                            <ul >
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(6)</span>
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

export default Section3Component;