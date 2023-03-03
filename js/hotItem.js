;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    var hotItem = {
        init:       function(){ //메서드(리터럴함수)
            this.headerFn(); 
            this.categoryFn(); 
            this.navConFn(); 
                        
       
          
    
        },
        headerFn:   function(){

   
           
                     //헤더영역 스크롤 이벤트 (페럴럭스)
                     var $window  = $(window);
                     var $header  = $('#header');
                    
                     var $top = $('#wrap #header .container .top');
                     var t = 0; // false === 0 같다는 표시   toggle
                     

                        
                        //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
                        //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라 
                        $window.scroll(function(){ //스크롤 이벤트
                           // console.log(  $window.scrollTop() ); //스크롤 탑값 확인
                           if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                              $header.addClass('addHeader');  //헤더에 클래스 추가
                              $top.addClass('addHeader');  //헤더에 클래스 추가
                             
                           // $appBtn.animate({left :'0px',right: '0px',bottom:'0px',borderRadius: '0px'},.1);
                        }
                        else{
                              $header.removeClass('addHeader'); //추가된 클래스 삭제
                              $top.removeClass('addHeader'); //추가된 클래스 삭제
                           
                           // $appBtn.animate({left :'30px',right: '30px',bottom:'54px',borderRadius: '6px'},.1);  
                        }           
                        });



          
           
        },
        categoryFn:   function(){

                    /* 전체카테고리 창 */
                    var navConOpen     =$('.navConOpen'); //전체카테고리
                    var btnArrow       =$('.btnArrow');   //btnArrow
                    var xBtn           =$('.xBtn');       //btnArrow
                

                
                    // 화살표 버튼 을 누르면 
                    btnArrow.each(function(idx) {                   
                        $(this).on({
                            click: function () {
                                navConOpen.eq(idx).addClass('navOpen'); //보여줌 
                                            
                            }
                            
                        });
                    });

                    //x버튼 을 누르면 
                    xBtn.each(function(idx) {                   
                        $(this).on({
                            click: function () {
                                navConOpen.eq(idx).removeClass('navOpen'); //감춤 
                                            
                            }
                            
                        });
                    });

                






                    const slideWrap      = $('.seconDepWrap');
                    const slideContainer = $('.navView');
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
        
        
        









        },  navConFn:   function(){

   
           
            //헤더영역 스크롤 이벤트 (페럴럭스)
            var $window  = $(window);
        
            var $navContainer = $('.navContainer');
           
            var t = 0; // false === 0 같다는 표시   toggle
            

               
               //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
               //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라 
               $window.scroll(function(){ //스크롤 이벤트
                  // console.log(  $window.scrollTop() ); //스크롤 탑값 확인
                  if( $window.scrollTop() >= 550 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                    
                   
                     $navContainer.addClass('addTop');  //헤더에 클래스 추가
                  
               }
               else{
                   
                     $navContainer.removeClass('addTop'); //추가된 클래스 삭제
                 
               }           
               });



 
  
}

               











        
    };  //객체 끝


    //객체.메서드 실행
    hotItem.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
