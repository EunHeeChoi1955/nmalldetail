//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    var mall = {
        init:       function(){ //메서드(리터럴함수)
            this.headerFn(); 
            this.smoothScrollFn();             
            this.section1Fn();
            this.section2Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
           
            this.footerFn();
            this.banner1Fn();
            this.banner2Fn();
          
    
        },
        banner1Fn:   function(){
            //   띠배너 슬와이프


            const slideWrap      = $('#banner1 .slide-wrap');
            const slideContainer = $('#banner1 .slide-view');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
            let   dragEnd        = null;
            let   count          = 0;
            let   setId          = 0;
            let   setId2         = 0;



            //1.메인슬라이드 함수
            function mainSlide(){ 
               

                  // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
               slideWrap.stop().animate( {left:(-450*cnt)}, 'easeInOutSine',function(){
                  if(cnt>4){cnt=0}  //다음슬라이드 롤링
                  if(cnt<0){cnt=4}  //이전슬라이드 롤링
                  //초기화설정
                  slideWrap.stop().animate( {left:(-450*cnt)},0 );
               });
            }


            //2.다음카운트 함수
            function nextCount(){
               cnt++;
               mainSlide();
            }
            //2.이전카운트 함수
            function prevCount(){
               cnt--;
               mainSlide();
            }



            //4. 마우스 터치 스와이프
            slideContainer.on({
                  mousedown: function(event){
                     //터치스와이프 시작 포지션
                     swipestart = event.clientX;
                     dragStart  = event.clientX - slideWrap.offset().left - 450;
                     mouseDown  = true;//드래그 시작임을 표시
                     

                  },//mousedown 끝
                  mouseup: function(event){
                     swipeEnd = event.clientX;
                     mouseDown  = false; //드래그 끝
                     
                     if( swipestart-swipeEnd > 0 ){//다음슬라이드                     
                        nextCount();
                     }
                     if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                    
                        prevCount();
                  }
               
               },// mouseup 끝
                     mousemove: function(event){//마우스무브
                        //console.log(event);
                        // 반드시 마우스를 다운한 상태가 아니면 종료(리턴)시켜라
                        // if(mouseDown !== true){
                        // if(mouseDown == null){초기값을 null 지정해야한다.
                        // if(mouseDown == false){초기값을 false 지정해야한다.
                        if(!mouseDown){ //true가 아니면
                           return;
                        }
                        dragEnd  = event.clientX; //마우스가 움직이면 계속 드래그된다.
                        // 이동거리는 = dragEnd - dragStart;
                        slideWrap.css({left: dragEnd - dragStart })
                     },
                     mouseleave: function(event){ 
                           if(!mouseDown){return}
                           swipeEnd = event.clientX;
                           mouseDown  = false; //드래그 끝
                           if( swipestart-swipeEnd > 0 ){//다음슬라이드                       
                              nextCount();
                           }
                           if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                        
                              prevCount();
                           }
                     
                     }
            });
                  //4-2. 타이머를 컨트롤 타이머 만들어서 5초 동안 터치가 없으면 다시
                  // 타이머카운트함수 : 마우스 터치시에 슬라이드 정지시키고
                  //                   카운트 동작 5초간 터치가 없으면 다시
                  //                   다음 슬라이드 자동타이머 동작 알고리즘
                  // 타이머카운트함수
                  function timerCount(){
                     clearInterval(setId); // setId 중지
                     clearInterval(setId2); // setId2 중지
                        count  = 0;         // 초기화 다시 카운트
                        setId2 = setInterval(function(){
                           count++;          // 증가변수는 반드시 초기값 설정                        
                           if(count>5){      // 5초간 터치가 없으면 
                              nextCount();   // 다음슬라이드 호출 실행
                              autoTimer();   // 자동타이머 딱한번 호출하면 3초후 무한반복
                              clearInterval(setId2);// 나 setId2자신을 중지시켜라
                           }
                        }, 1000);   // 자동타이머가 중지되면 카운트가 1초에 1회씩 증가
                        
                     
                     }//


            
            //5. 마우스 드레그 앤 드롭
            // mousemove

            //6. 반응형 모바일 손가락 핑거 드래드 앤 드롭(반응형)
            // 마우스 인식못함 동작안함
            // 반응형 진행하고 폴리필 touchEvent 추가
            // touchstart(mousedown) / touchend(mouseup) / touchmove(mousemove)
            slideContainer.on({
               touchstart: function(event){
               
                  swipeStart = event.originalEvent.touches[0].clientX;
                  dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 450;
                  mouseDown  = true;//드래그 시작임을 표시 
                  timerCount(); //터치시작하면 타이머 카운트 실행
               },
               touchend: function(event){                  
                     swipeEnd   = event.originalEvent.changedTouches[0].clientX;   
                     mouseDown  = false; //드래그 끝
                     
                     
                     if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                        nextCount();
                     }
                     if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                        prevCount();
                        
                     }   
               }
            });

        },
        banner2Fn:   function(){ 

              //   띠배너 슬와이프


              const slideWrap      = $('#banner2 .slide-wrap');
              const slideContainer = $('#banner2 .slide-view');
              let   cnt            = 0;
              let   swipeStart     = null;
              let   swipeEnd       = null;
              let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
              let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
              let   dragEnd        = null;
              let   count          = 0;
              let   setId          = 0;
              let   setId2         = 0;
  
  
  
              //1.메인슬라이드 함수
              function mainSlide(){ 
                 
  
                    // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
                 slideWrap.stop().animate( {left:(-450*cnt)}, 'easeInOutSine',function(){
                    if(cnt>4){cnt=0}  //다음슬라이드 롤링
                    if(cnt<0){cnt=4}  //이전슬라이드 롤링
                    //초기화설정
                    slideWrap.stop().animate( {left:(-450*cnt)},0 );
                 });
              }
  
  
              //2.다음카운트 함수
              function nextCount(){
                 cnt++;
                 mainSlide();
              }
              //2.이전카운트 함수
              function prevCount(){
                 cnt--;
                 mainSlide();
              }
  
  
  
              //4. 마우스 터치 스와이프
              slideContainer.on({
                    mousedown: function(event){
                       //터치스와이프 시작 포지션
                       swipestart = event.clientX;
                       dragStart  = event.clientX - slideWrap.offset().left - 450;
                       mouseDown  = true;//드래그 시작임을 표시
                       
  
                    },//mousedown 끝
                    mouseup: function(event){
                       swipeEnd = event.clientX;
                       mouseDown  = false; //드래그 끝
                       
                       if( swipestart-swipeEnd > 0 ){//다음슬라이드                     
                          nextCount();
                       }
                       if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                    
                          prevCount();
                    }
                 
                 },// mouseup 끝
                       mousemove: function(event){//마우스무브
                          //console.log(event);
                          // 반드시 마우스를 다운한 상태가 아니면 종료(리턴)시켜라
                          // if(mouseDown !== true){
                          // if(mouseDown == null){초기값을 null 지정해야한다.
                          // if(mouseDown == false){초기값을 false 지정해야한다.
                          if(!mouseDown){ //true가 아니면
                             return;
                          }
                          dragEnd  = event.clientX; //마우스가 움직이면 계속 드래그된다.
                          // 이동거리는 = dragEnd - dragStart;
                          slideWrap.css({left: dragEnd - dragStart })
                       },
                       mouseleave: function(event){ 
                             if(!mouseDown){return}
                             swipeEnd = event.clientX;
                             mouseDown  = false; //드래그 끝
                             if( swipestart-swipeEnd > 0 ){//다음슬라이드                       
                                nextCount();
                             }
                             if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                        
                                prevCount();
                             }
                       
                       }
              });
                    //4-2. 타이머를 컨트롤 타이머 만들어서 5초 동안 터치가 없으면 다시
                    // 타이머카운트함수 : 마우스 터치시에 슬라이드 정지시키고
                    //                   카운트 동작 5초간 터치가 없으면 다시
                    //                   다음 슬라이드 자동타이머 동작 알고리즘
                    // 타이머카운트함수
                    function timerCount(){
                       clearInterval(setId); // setId 중지
                       clearInterval(setId2); // setId2 중지
                          count  = 0;         // 초기화 다시 카운트
                          setId2 = setInterval(function(){
                             count++;          // 증가변수는 반드시 초기값 설정                        
                             if(count>5){      // 5초간 터치가 없으면 
                                nextCount();   // 다음슬라이드 호출 실행
                                autoTimer();   // 자동타이머 딱한번 호출하면 3초후 무한반복
                                clearInterval(setId2);// 나 setId2자신을 중지시켜라
                             }
                          }, 1000);   // 자동타이머가 중지되면 카운트가 1초에 1회씩 증가
                          
                       
                       }//
  
  
              
              //5. 마우스 드레그 앤 드롭
              // mousemove
  
              //6. 반응형 모바일 손가락 핑거 드래드 앤 드롭(반응형)
              // 마우스 인식못함 동작안함
              // 반응형 진행하고 폴리필 touchEvent 추가
              // touchstart(mousedown) / touchend(mouseup) / touchmove(mousemove)
              slideContainer.on({
                 touchstart: function(event){
                 
                    swipeStart = event.originalEvent.touches[0].clientX;
                    dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 450;
                    mouseDown  = true;//드래그 시작임을 표시 
                    timerCount(); //터치시작하면 타이머 카운트 실행
                 },
                 touchend: function(event){                  
                       swipeEnd   = event.originalEvent.changedTouches[0].clientX;   
                       mouseDown  = false; //드래그 끝
                       
                       
                       if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                          nextCount();
                       }
                       if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                          prevCount();
                          
                       }   
                 }
              });

        },
        headerFn:   function(){

         //헤더영역 스크롤 이벤트 (페럴럭스)
         var $window  = $(window);
         var $header  = $('#wrap1 #header');
         var $mainBtn = $('#wrap1 #header .mainbtn');
         var t = 0; // false === 0 같다는 표시   toggle
         

             
             //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
             //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라 
             $window.scroll(function(){ //스크롤 이벤트
                // console.log(  $window.scrollTop() ); //스크롤 탑값 확인
                 if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                  $header.addClass('addHeader');  //헤더에 클래스 추가
                 // $appBtn.animate({left :'0px',right: '0px',bottom:'0px',borderRadius: '0px'},.1);
              }
              else{
                  $header.removeClass('addHeader'); //추가된 클래스 삭제
                 // $appBtn.animate({left :'30px',right: '30px',bottom:'54px',borderRadius: '6px'},.1);  
              }           
             });


            //  메뉴버튼 addCLass removeClass            
            $mainBtn.each(function (idx) {
               $mainBtn.eq(0).addClass('addClass'); 
               $(this).on({
                  
                   mouseenter: function () {
                     $mainBtn.removeClass('addClass');  // 클래스 삭제
                     $mainBtn.eq(idx).addClass('addClass'); // 클래스 주입
                      // countFn(idx);
                   }
               });
           });


             
           
        },
        smoothScrollFn: function(){ //전체 공용 함수 스무스 스크롤링 이벤트 함수
            var $smoothBtn  = $('.smoothBtn');
            var $htmlBody   = $('html,body');
            

               $smoothBtn.on({
                     click:  function(event){
                           event.preventDefault();
                        var $this = $(this); //현재 클릭한 이(this) 버튼

                           var url = $this.attr('href'); 
                     if(url !== undefined && url != ''){
                              $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                           
                     }
                  }
               });






        },
        section1Fn:  function(){
            





            //   탭버튼 이벤트
               var t=0;
              
               priceBox       = $('#wrap1> #main>#section1 .priceBox');


               $('.tabBtn').on({
                  click:	function(){
                     showHideList();
                  }
               });
               
               
               $(".tab > li > a").click(function(e) {
               e.preventDefault();	
               priceBox.removeClass('addClose'); // 탭버튼 누르면 priceBox 다시나타남
               // 전역변수 조정
               showHideList();
               
               //새로운 클릭일 경우에만 ui 변경
               if(!$(this).parent().hasClass('active')) { 
                 $('.tabBtn').text($(this).text()); //보여지는 제목 바꾸기
               }
               
               // 액티브 조정 
               $(this).parent().siblings().removeClass('active').end().addClass('active');
               
               });
               
               //모바일 & PC 공통 
               $(".tabs a").click(function(e) {
                  e.preventDefault();	
                  $(this).parent().siblings().removeClass('active').end().addClass('active');
                  
               //	$(this).parents('ul').next().children().hide().eq($(this).parent().index()).show();
                  $('.tab').parents('ul').next().children().hide().eq($(this).parent().index()).show();
               });
               
               //현재 active 되어있는 탭 외의 모든 데이터 접기 => 모바일도 적용하기 위해선 공통 class 생성하여 적용 필요
               $('.ServiceTab > li').on('click', function(e){
                  e.preventDefault();	
               // $(".nav").navgoco('toggle', false);
                  $(".nav > li").removeClass('active');
                  $(".nav > li").removeClass('open');
               });
               
               function showHideList() {
                  if(t==0){
                     t=1;
                     $('.tab').stop().slideDown();
                     $('.tabBtn').addClass('addFamily');
                  }else{
                     t=0;
                     $('.tab').hide();
                     $('.tabBtn').removeClass('addFamily');	
                     $('.tabBtn').children().stop().slideUp();	
                  }
               }
               




               // 버튼클릭 이벤트 
               reset =0;
               PriceCloseBtn     = $('#wrap1> #main>#section1 .PriceCloseBtn');
               priceBox          = $('#wrap1> #main>#section1 .priceBox');
               ArrowBtn          = $('#wrap1> #main>#section1 .arrowBtn');
               BoxWrap4          = $('#wrap1> #main>#section1 .btnBoxWrap4');
               BoxWrap3          = $('#wrap1> #main>#section1 .btnBoxWrap3');
               BoxWrap1          = $('#wrap1> #main>#section1 .btnBoxWrap1');
               buyNow            = $('#wrap1> #main>#section1 .buyNow');
               gift              = $('#wrap1> #main>#section1 .gift');
               Cart              = $('#wrap1> #main>#section1 .cart');    // 장바구니 버튼
               CartHide          = $('#wrap1> #main>#section1 #cart');    // 장바구니 팝업창 이미지
               mypickHide        = $('#wrap1> #main>#section1 #myPick'); // 찜하기 팝업창 띄우기
               myPick            = $('#wrap1> #main>#section1 .myPick'); //버튼빨강색으로 만들기
               CartHide          = $('#wrap1> #main>#section1 #cart');
               removeMyPickHide  = $('#wrap1> #main>#section1 #removeMyPick'); // 찜하기해제 팝업창 띄우기
               closeBtn          = $('#wrap1> #main>#section1 .closeBtn');
               share             = $('#wrap1> #main>#section1 #share');    // SNS공유하기 팝업창
               shareBtn          = $('#wrap1> #main>#section1 .share');  // SNS 공유하기 버튼  하트옆에있는거
               coupon            = $('#wrap1> #main>#section1 .coupon');   // 쿠폰 (팝업창떴을때)
               couponWrap        = $('#wrap1> #main>#section1 #coupon');   // 쿠폰 창 전체
               getCoupon         = $('#wrap1> #main>#section1 .getCoupon');// 쿠폰 받기 버튼 (상세페이지)
               getAllCoupon      = $('#wrap1> #main>#section1 .getAllCoupon');    // 모두다운받기 버튼 (팝업창)








               // sec1 myPick 찜하기 클릭 이벤트
               myPick.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                         myPick.eq(idx).toggleClass('addMyPick'); // 클래스 토글버튼
                        // mypickHide.addClass('MyPickShow '); // 클래스 주입
                        // setTimeout(function() { mypickHide.stop().removeClass('MyPickShow')},1500);

                        if(myPick.eq(idx).hasClass("addMyPick")) { // 빨간하트 addclass하면
                           mypickHide.addClass('MyPickShow '); // 찜하기 팝업 뜨고
                           setTimeout(function() { mypickHide.stop().removeClass('MyPickShow')},1000);   //1.5초 뒤에 팝업창 사라짐
                       } else if(myPick.eq(idx).removeClass("addMyPick")) {   //빨간하트 removeclass 해제하면
                           removeMyPickHide.addClass('removeMyPick');   //찜하기 해제 팝업창 뜨고
                           setTimeout(function() { removeMyPickHide.stop().removeClass('removeMyPick')},1000); //1.5초 뒤에 팝업창 사라짐
                       }
                         
                      }
                  });
              });


            //  url복사되었습니다 팝업창 뜨고 1.5초뒤에 사라지기
              $('.urlCopyBtn').click(function(){	
                  var urlAddress= $('#urlAddress');
                  var urlCopytxt= $('.urlCopytxt');

                  urlAddress.css('display','block').select();
                  document.execCommand("Copy"); // url 복사됨
                  urlAddress.css('display','none');                    	
                 
                         
                  urlCopytxt.addClass('addUrlCopyTxt'); // url복사되었습니다 팝업 뜨고
                  setTimeout(function() { urlCopytxt.stop().removeClass('addUrlCopyTxt')},1000);   //1.5초 뒤에 팝업창 사라짐           	
                  return false;
            });
           


              // 모두다운받기버튼 누르면 모든쿠폰들이 회색쿠폰으로 변함 
              getAllCoupon.each(function (idx) {
               
                  $(this).on({
                     click: function () {
                        coupon.addClass('couponGray'); 
                        getAllCoupon.addClass('couponGray');                
                     }
                     
                  });
               });


               
              // 쿠폰 누르면  회색쿠폰으로 변함 
              coupon.each(function (idx) {
                  $(this).on({
                     
                     click: function () {
                        
                        coupon.eq(idx).addClass('couponGray'); //공유하기창 사라짐
                     }
                  });
               });



              // x 버튼 누르면  share 공유하기 창 사라짐 
              closeBtn.each(function (idx) {
                  $(this).on({
                     click: function () {
                        share.hide(); //공유하기창 사라짐
                        couponWrap.removeClass('addCoupon'); //공유하기창 사라짐
                     }
                  });
               });



              // shareBtn 버튼 누르면  share 공유하기 창  나타남 
              shareBtn.each(function (idx) {
                  $(this).on({
                     click: function () {
                        share.show(); //공유하기창 사라짐
                     }
                  });
               });



              // 쿠폰받기 버튼 누르면  coupon창  나타남 
              getCoupon.each(function (idx) {
                  $(this).on({
                     click: function () {
                        couponWrap.addClass('addCoupon'); //공유하기창 사라짐
                     }
                  });
               });







               // cart 버튼 누르면  장바구니 팝업 나타남 
               Cart.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        CartHide.addClass('cartShow '); // 클래스 주입
                        setTimeout(function() { CartHide.stop().removeClass('cartShow')},1000);
                        
                     }
                      
                  });
                  
              });


               //XBtn눌렀을때 price box 없어짐
               PriceCloseBtn.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        priceBox.addClass('addClose'); // 클래스 주입
                         
                      }
                  });
              });



               // Down화살표 버튼 누르면  btnBoxWrap3, 4 사라짐  
               ArrowBtn.each(function (idx) {
                  BoxWrap1.addClass('addShow');
                  $(this).on({
                      click: function () {
                      
                        BoxWrap4.removeClass('addhide'); // 클래스 삭제
                        BoxWrap3.removeClass('addhide'); // 클래스 삭제
                        BoxWrap1.addClass('addShow'); // 클래스 주입
                         
                      }
                  });
              });

              

            
             
               // 바로구매 버튼 누르면 BoxWrap3 나타남
               buyNow.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        BoxWrap3.addClass('addhide'); // 클래스  삭제
                        BoxWrap1.removeClass('addShow'); // 클래스  삭제
                      }
                  });
              });

               // gift 버튼 누르면  btnBoxWrap4 나타남  
               gift.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        BoxWrap4.addClass('addhide'); // 클래스 삭제
                        BoxWrap1.removeClass('addShow'); // 클래스 삭제
                         
                      }
                  });
              });




              
        },
        section2Fn:  function(){

            const slideWrap      = $('#wrap1 #section2 .slide-wrap');
            const slideContainer = $('#wrap1 #section2 .slide-view');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
            var   heart          = $('#section2 .heart');

           


            //1.메인슬라이드 함수
            function mainSlide(){                
  
                  // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
               slideWrap.stop().animate( {left:(-162*cnt)}, 'easeInOutSine',function(){
                    cnt>4?cnt=0:cnt; 
                    cnt<1?cnt=0:cnt;                   
                   //초기화
                  slideWrap.stop().animate( {left:(-162*cnt)});
                  
               });
            }

            //2.다음카운트 함수
            function nextCount(){
               cnt++;
               mainSlide();
            }
            //2.이전카운트 함수
            function prevCount(){
               cnt--;
               mainSlide();
            }
            
            
            //4. 마우스 터치 스와이프
            slideContainer.on({
                  mousedown: function(event){
                     //터치스와이프 시작 포지션
                     swipeStart = event.clientX;
                     dragStart  = event.clientX - slideWrap.offset().left - 162;
                     mouseDown  = true;//드래그 시작임을 표시
                     

                  },//mousedown 끝
                  mouseup: function(event){
                     swipeEnd = event.clientX;
                     mouseDown  = false; //드래그 끝
                     
                     if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                        nextCount();
                     }
                     if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                        prevCount();
                  }
               
               }
            });

            
            //5. 마우스 드레그 앤 드롭
            // mousemove

            //6. 반응형 모바일 손가락 핑거 드래드 앤 드롭(반응형)
            // 마우스 인식못함 동작안함
            // 반응형 진행하고 폴리필 touchEvent 추가
            // touchstart(mousedown) / touchend(mouseup) / touchmove(mousemove)
            slideContainer.on({
               touchstart: function(event){
                 
                  swipeStart = event.originalEvent.touches[0].clientX;
                  dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 162;
                  mouseDown  = true;//드래그 시작임을 표시 
                                     
               },
               touchend: function(event){                  
                     swipeEnd   = event.originalEvent.changedTouches[0].clientX;   
                     mouseDown  = false; //드래그 끝
                       
                      
                     if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                        nextCount();
                     }
                     if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                        prevCount();
                     }   
               }
            });



            
               // heart 클릭 이벤트
               heart.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        heart.eq(idx).toggleClass('addHeart'); // 클래스 주입
                         
                      }
                  });
              });



        },
        section5Fn:  function(){

         const slideWrap      = $('#wrap1 #section5 .slide-wrap');
         const slideContainer = $('#wrap1 #section5 .slide-view');
         let   cnt            = 0;
         let   swipeStart     = null;
         let   swipeEnd       = null;
         let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
         let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
         var   heart          = $('#section5 .heart');

        


         //1.메인슬라이드 함수
         function mainSlide(){ 
            

               // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
            slideWrap.stop().animate( {left:(-162*cnt)}, 'easeInOutSine',function(){
               cnt>3?cnt=0:cnt;
               cnt<1?cnt=0:cnt;
               //초기화설정
               slideWrap.stop().animate( {left:(-162*cnt)});
               cnt>0?cnt=3:cnt;
            });
         }

         //2.다음카운트 함수
         function nextCount(){
            cnt++;
            mainSlide();
         }
         //2.이전카운트 함수
         function prevCount(){
            cnt--;
            mainSlide();
         }
         
         
         //4. 마우스 터치 스와이프
         slideContainer.on({
               mousedown: function(event){
                  //터치스와이프 시작 포지션
                  swipeStart = event.clientX;
                  dragStart  = event.clientX - slideWrap.offset().left - 162;
                  mouseDown  = true;//드래그 시작임을 표시
                  

               },//mousedown 끝
               mouseup: function(event){
                  swipeEnd = event.clientX;
                  mouseDown  = false; //드래그 끝
                  
                  if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                     nextCount();
                  }
                  if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                     prevCount();
               }
            
            }
         });

         
         //5. 마우스 드레그 앤 드롭
         // mousemove

         //6. 반응형 모바일 손가락 핑거 드래드 앤 드롭(반응형)
         // 마우스 인식못함 동작안함
         // 반응형 진행하고 폴리필 touchEvent 추가
         // touchstart(mousedown) / touchend(mouseup) / touchmove(mousemove)
         slideContainer.on({
            touchstart: function(event){
              
               swipeStart = event.originalEvent.touches[0].clientX;
               dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 162;
               mouseDown  = true;//드래그 시작임을 표시 
                                  
            },
            touchend: function(event){                  
                  swipeEnd   = event.originalEvent.changedTouches[0].clientX;   
                  mouseDown  = false; //드래그 끝
                    
                   
                  if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                     nextCount();
                  }
                  if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                     prevCount();
                     
                  }   
            }
         });


         
               // heart 클릭 이벤트
               heart.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        heart.eq(idx).toggleClass('addHeart'); // 클래스 주입
                         
                      }
                  });
              });

        },
        section6Fn:  function(){
         var Arrow6Btn =  $('#wrap1>#main>#section6 .Arrow6Btn');
         var tableWrap =  $('#wrap1>#main>#section6 .tableWrap');

               // 화살표 버튼 클릭 이벤트
               Arrow6Btn.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        Arrow6Btn.eq(idx).toggleClass('add6Arrow'); // 클래스 주입
                        tableWrap.eq(idx).toggleClass('add6Arrow');
                         
                      }
                  });
               });

        },
        section7Fn:  function(){
         var Arrow7Btn =  $('#wrap1>#main>#section7 .Arrow7Btn');
         var tableWrap =  $('#wrap1>#main>#section7 .tableWrap');

               // 화살표 버튼 클릭 이벤트
               Arrow7Btn.each(function (idx) {
                  $(this).on({
                     click: function () {
                     
                        Arrow7Btn.eq(idx).toggleClass('add7Arrow'); // 클래스 주입
                        tableWrap.eq(idx).toggleClass('add7Arrow');
                        
                     }
                  });
               });


        },
        section8Fn:  function(){

         var Arrow8Btn =  $('#wrap1>#main>#section8 .Arrow8Btn');
         var tableWrap =  $('#wrap1>#main>#section8 .tableWrap');

               // 화살표 버튼 클릭 이벤트
               Arrow8Btn.each(function (idx) {
                  $(this).on({
                     click: function () {
                     
                        Arrow8Btn.eq(idx).toggleClass('add8Arrow'); // 클래스 주입
                        tableWrap.eq(idx).toggleClass('add8Arrow');
                        
                     }
                  });
               });


        },
        footerFn:  function(){
           
            var copyBtn =  document.getElementById('copy');



            copyBtn.addEventListener("click", function(){
               // 복사할 텍스트를 변수에 할당해줍니다.
               var text = document.getElementById("textDiv").innerText;
               // input text 태그를 생성해줍니다.
               var createInput = document.createElement("input");
               createInput.setAttribute("type", "text");
               // 가상으로 가져올 태그에 만들어준 input 태그를 붙여줍니다.
               document.getElementById("textDiv").appendChild(createInput);
               // 만든 input 태그의 value 값에 복사할 텍스트 값을 넣어줍니다.
               createInput.value = text;
               // 복사 기능을 수행한 후
               createInput.select();
               document.execCommand('copy');
               // 가상으로 붙여주었던 input 태그를 제거해줍니다.
               document.getElementById("textDiv").removeChild(createInput);
               alert('복사가 완료되었습니다.');
            });
   



            var fArrowBtn =  $('#footer .Registration .fArrowBtn');
            var footerhide =  $('#footer .Registration .footerhide');
            
   
                  // 화살표 버튼 클릭 이벤트
                  fArrowBtn.each(function (idx) {
                     $(this).on({
                        click: function () {
                        
                           fArrowBtn.eq(idx).toggleClass('fArrow'); // 클래스 주입
                           footerhide.eq(idx).toggleClass('footerShow'); // 클래스 주입
                           
                           
                        }
                     });
                  });
   
        
        }


       

    };  //객체 끝


    //객체.메서드 실행
    mall.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
