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
         var Detailheart   = $('#wrap1> #main> #section1 .detail-heart');


               // sec1 detail heart 클릭 이벤트
               Detailheart.each(function (idx) {
                  $(this).on({
                      click: function () {
                      
                        Detailheart.eq(idx).toggleClass('addDetailHeart'); // 클래스 주입
                         
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
   
        
        }


       

    };  //객체 끝


    //객체.메서드 실행
    mall.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
