import React, { Component } from 'react';

class Section1Component extends Component {
    render() {
        return (
            <section id="section1">
                        <div className="container">

                            <div className="gap">
                                <div className="wrap">
                                    <div className="slide-container">
                                        <div className="slide-view">

                                            <ul className="slide-wrap" >
                                                <li className="slide slide0">
                                                    <div className="slide-text">
                                                        <h3>
                                                            장바구니는 무겁게<br/>
                                                            <strong>가격은 가볍게</strong>
                                                        </h3>
                                                        <h4>마음 무겁지 않은 쇼핑<br/>
                                                            지금 바로 냉장고 채워보세요!
                                                        </h4>
                                                    </div>
                                                    <div className="cnt">
                                                        <h5><strong>4&nbsp;</strong>/&nbsp;4</h5>
                                                    </div>
                                                    <a href='#'>
                                                        <img src= {process.env.PUBLIC_URL +"/img/slide4.png"} alt=""/>
                                                    </a>                                        
                                                </li>
                                                <li className="slide slide1">
                                                    <div className="slide-text">
                                                        <h3>
                                                            좋은 상품 있으면<br/>
                                                            <strong>소개 시켜줘!</strong>
                                                        </h3>
                                                        <h4>엔몰에서 만나보고 싶은<br/>
                                                            상품을 추천해주세요!
                                                        </h4>
                                                        <span>
                                                            <button>EVENT</button>
                                                        </span>
                                                        
                                                    </div>

                                                    <div className="cnt">
                                                        <h5><strong>1&nbsp;</strong>/&nbsp;4</h5>
                                                    </div>

                                                    <a href='#'>
                                                        <img src= {process.env.PUBLIC_URL + "/img/slide1.png" } alt=""/>
                                                    </a>                                        
                                                </li>
                                                <li className="slide slide2">
                                                    <div className="slide-text">
                                                        <h3>
                                                            라운딩 하기 좋은날<br/>
                                                            <strong>골프용품 모음전</strong>
                                                        </h3>
                                                        <h4>고품질 최저가의 골프용품을<br/>
                                                            한 곳에서 만나보세요!
                                                        </h4>
                                                    
                                                    </div>

                                                    <div className="cnt">
                                                        <h5><strong>2&nbsp;</strong>/&nbsp;3</h5>
                                                    </div>

                                                    <a href='#'>
                                                        <img src= {process.env.PUBLIC_URL +"/img/slide2.png" } alt=""/>
                                                    </a>
                                                </li>
                                                <li className="slide slide3">
                                                    <div className="slide-text white">
                                                        <h3>
                                                            고품질 직배송<br/>
                                                            <strong>한우 스테이크</strong>
                                                        </h3>
                                                        <h4 className="white">1++ 한우 꽃등심 400g<br/>
                                                            1++ 한우 채끝 500g
                                                        </h4>
                                                        
                                                    </div>

                                                    <div className="cnt">
                                                        <h5><strong>3&nbsp;</strong>/&nbsp;4</h5>
                                                    </div>

                                                    <a href='#'>
                                                        <img src=  {process.env.PUBLIC_URL +"/img/slide3.png"} alt=""/>
                                                    </a>
                                                </li >
                                                <li className="slide slide4">
                                                    <div className="slide-text">
                                                        <h3>
                                                            장바구니는 무겁게<br/>
                                                            <strong>가격은 가볍게</strong>
                                                        </h3>
                                                        <h4>마음 무겁지 않은 쇼핑<br/>
                                                            지금 바로 냉장고 채워보세요!
                                                            
                                                        </h4>
                                                        
                                                    </div>

                                                    <div className="cnt">
                                                        <h5><strong>4&nbsp;</strong>/&nbsp;4</h5>
                                                    </div>

                                                    <a href='#'>
                                                        <img src= {process.env.PUBLIC_URL +"/img/slide4.png" } alt=""/>
                                                    </a>                                        
                                                </li>
                                                <li className="slide slide5">
                                                    <div className="slide-text">
                                                        <h3>
                                                            좋은 상품 있으면<br/>
                                                            <strong>소개 시켜줘!</strong>
                                                        </h3>
                                                        <h4>엔몰에서 만나보고 싶은<br/>
                                                            상품을 추천해주세요!
                                                        </h4>
                                                        <span>
                                                            <button>EVENT</button>
                                                        </span>
                                                    
                                                    </div>

                                                    <div className="cnt">
                                                        <h5><strong>1&nbsp;</strong>/&nbsp;4</h5>
                                                    </div>
                                                    <a href='#'>
                                                        <img src= {process.env.PUBLIC_URL +"/img/slide1.png"} alt=""/>
                                                    </a>                                        
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="btn-container">
                                        <div className="btn-view slide_menu swiper-container swiper-container-initialized swiper-container-horizontal">

                                                <ul className="btn-wrap swiper-wrapper menu_list">
                                                    <li className="swiper-slide btn0">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn1.svg"} alt=""/> 
                                                        </a>
                                                            <span>프리미엄관</span>
                                                    
                                                    </li>
                                                    <li  className="swiper-slide ">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn2.svg" } alt=""/>
                                                        </a>
                                                            <span>MD추천</span>
                                                        
                                                    </li>
                                                    <li  className="swiper-slide btn2">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn3.svg"} alt=""/> 
                                                        </a>
                                                            <span>N마트</span>
                                                    
                                                    </li>
                                                    <li className="swiper-slide btn3">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn4.svg" } alt=""/>
                                                        </a>
                                                            <span>쿠폰</span>
                                                        
                                                    </li>
                                                    <li className="swiper-slide btn4">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn5.svg" } alt=""/>
                                                        </a>
                                                            <span>한정특가</span>
                                                        
                                                    </li>
                                                    <li className="swiper-slide btn5">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn6.svg"} alt=""/>
                                                        </a>
                                                        <span>카테고리</span>
                                                        
                                                    </li>
                                                    <li className="swiper-slide btn6">
                                                        <a href='#'>
                                                            <img src= {process.env.PUBLIC_URL +"/img/btn7.svg"} alt=""/>
                                                        </a>
                                                            <span>선물하기</span>
                                                        
                                                    </li>
                                                </ul>
                                            
                                        </div>
                                
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                            
                        </div>
                        <span className="top-btn">
                            <a href="#section1" className="smoothBtn " target="_blank">
                                <img src= {process.env.PUBLIC_URL +"img/topbtn.png"} alt=""/>
                            </a>
                        </span>
                        
            </section>
        );
    }
}

export default Section1Component;