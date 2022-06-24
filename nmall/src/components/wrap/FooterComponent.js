import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <>
               <footer id="footer">
                    <div className="container">
                        <div className="gap">
                            <div className="wrap">
                                <div className="content">
                                    <ul className="foot-content">
                                        <li className="foot1">
                                            <ul className="list">                                    
                                                <li><a href='#'>휴대폰 인증</a></li>                                    
                                                <li><a href='#'>즐겨찾기 추가</a></li>                                    
                                                <li><a href='#'>고객센터</a><i></i></li>                                    
                                            
                                            </ul>
                                        </li>
                                        <li className="foot2">

                                        <h3>고객센터</h3>
                                        <div className="tel">
                                            <img src= {process.env.PUBLIC_URL +"/img/ico_footer_call.png" } alt=""/><p>1234-5678</p>
                                            </div>
                                        <div>평일 10시 ~ 18시 30분</div>


                                        <ul className="email">
                                                <li>이메일 문의</li> 
                                                <li >
                                                    <span id="textDiv">n-mall@nasmedia.co.kr </span>                                       
                                                    <a id="copy">주소복사</a>
                                                </li>
                                        </ul>
                                        
                                        
                                        <div className="Registration">
                                            <ul className="hide">
                                                <li>서울특별시 강남구 도곡로1길 14 삼일프라자 3, 4, 5층<br/>
                                                    사업자 등록번호 102-81-42945</li>
                                                </ul>
                                                <a href='#'>나스미디어 사업자정보</a>
                                        </div>

                                        </li>
                                        
                                        <li className="foot3">
                                            <ul className="list">                                    
                                                <li><a href='#'>이용약관 </a><i></i></li>                                    
                                                <li><a href='#'>개인정보처리방침 </a><i></i></li>                              
                                                <li><a href='#'>입점문의 </a></li>
                                            </ul>
                                        </li>
                                        <li className="foot4">
                                            Copyright ⓒ NASMEDIA Co., LTD. All Rights Reserved.
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>
                </footer>   
            </>
        );
    }
}

export default FooterComponent;