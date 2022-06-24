import React, { Component } from 'react';

class Section9Component extends Component {
    render() {
        return (
            <section id="section9">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="content">
                                <h2>Best 랭킹<i></i></h2>
                                <h3>주문이 폭주 하고 있어요!<span><a href='#'>전체보기<i className="material-icons">&#xe315;</i></a></span></h3>
                                <div className="content-box">
                                    <div className="rank-container slideControl">
                                        <div className="rank-view">
                                            <h4>Rank</h4>
                                            <ul className="rank-wrap">
                                                <li className="navItems num1 addBtn9"><a href='#'>01</a><i></i></li>
                                                <li className="navItems num2 "><a href='#'>02</a><i></i></li>
                                                <li className="navItems num3"><a href='#'>03</a><i></i></li>
                                                <li className="navItems num4"><a href='#'>04</a><i></i></li>
                                                <li className="navItems num5"><a href='#'>05</a><i></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="slide-container">
                                        <div className="slide-view">
                                            <ul className="slide-wrap screensWrap" >
                                                <li className="slide slide0 item addBtn9 ">
                                                    <div className="slide-text">                                                
                                                        <div className="img-box">
                                                            <div className="num-box">
                                                                <div className="num">
                                                                    <div>1</div>
                                                                </div>
                                                            </div>
                                                            <div className="heart addHeart">
                                                                <a href="#">
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>                                                                
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec9slide1.png"} alt=""/>
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
                                                            <ul className="text3">
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(96)</span>
                                                                </li>
                                                                <li className="text">
                                                                <span>
                                                                    무료배송
                                                                </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slide slide1 item">
                                                    <div className="slide-text">                                                
                                                        <div className="img-box">
                                                            <div className="num-box">
                                                                <div className="num">
                                                                    <div>2</div>
                                                                </div>
                                                            </div>
                                                            <div className="heart">
                                                                <a href="#" >
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>   
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec9slide2.png"} alt=""/>
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
                                                            <ul className="text3">
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(96)</span>
                                                                </li>
                                                                <li className="text">
                                                                <span>
                                                                    무료배송
                                                                </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slide slide2 item">
                                                    <div className="slide-text">                                                
                                                        <div className="img-box">
                                                            <div className="num-box">
                                                                <div className="num">
                                                                    <div>3</div>
                                                                </div>
                                                            </div>
                                                            <div className="heart">
                                                                <a href="#">
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>   
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec9slide3.png"} alt=""/>
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
                                                            <ul className="text3">
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(96)</span>
                                                                </li>
                                                                <li className="text">
                                                                <span>
                                                                    무료배송
                                                                </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slide slide3 item">
                                                    <div className="slide-text">                                                
                                                        <div className="img-box">
                                                            <div className="num-box">
                                                                <div className="num">
                                                                    <div>4</div>
                                                                </div>
                                                            </div>
                                                            <div className="heart">
                                                                <a href="#">
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>   
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec9slide4.png" }alt=""/>
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
                                                            <ul className="text3">
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(96)</span>
                                                                </li>
                                                                <li className="text">
                                                                <span>
                                                                    무료배송
                                                                </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="slide slide4 item ">
                                                    <div className="slide-text">
                                                        <div className="img-box">
                                                            <div className="num-box">
                                                                <div className="num">
                                                                    <div>5</div>
                                                                </div>
                                                            </div>
                                                            <div className="heart">
                                                                <a href="#">
                                                                    <img className="redHeart" src={process.env.PUBLIC_URL +"/img/redheart.svg"} alt=""/>
                                                                    <img className="blankHeart" src={process.env.PUBLIC_URL +"/img/heart.svg"} alt=""/>   
                                                                </a>
                                                            </div>
                                                            <a href='#'>
                                                                <img src={process.env.PUBLIC_URL +"/img/sec9slide5.png"} alt=""/>
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
                                                            <ul className="text3">
                                                                <li className="star">
                                                                    <i className="fa fa-star"></i>
                                                                    4.0 <span>(96)</span>
                                                                </li>
                                                                <li className="text">
                                                                <span>
                                                                    무료배송
                                                                </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            
                                                <li className="circle item">
                                                    <div className="slide-text">
                                                        <div className="img-box">
                                                            <a href="#">
                                                                <img src={process.env.PUBLIC_URL +"/img/sec3arrow.png" }alt=""/>
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
                </div>
            </section>
        );
    }
}

export default Section9Component;