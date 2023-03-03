//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    const banner = {
        init:       function(){ //메서드(리터럴함수)

            this.banner1Fn();   
            this.banner2Fn();   
            this.banner3Fn();   
            this.swipeLimitedPriceFn();   
           // this.recentViewGoodsFn();   
            
          
    
        },
      
       
 
        banner1Fn:  function(){
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
        
        

      banner2Fn:  function(){
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
          

      banner3Fn:  function(){
            
            //   띠배너 슬와이프
               const b3slideWrap      = $('#b3slide-wrap');
               const b3slideContainer = $('#b3slide-view');
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
                     b3slideWrap.stop().animate( {left:(-450*cnt)}, 'easeInOutSine',function(){
                     if(cnt>4){cnt=0}  //다음슬라이드 롤링
                     if(cnt<0){cnt=4}  //이전슬라이드 롤링
                     //초기화설정
                     b3slideWrap.stop().animate( {left:(-450*cnt)},0 );
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
               b3slideContainer.on({
                     mousedown: function(event){
                        //터치스와이프 시작 포지션
                        swipestart = event.clientX;
                        dragStart  = event.clientX - b3slideWrap.offset().left - 450;
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
                           b3slideWrap.css({left: dragEnd - dragStart })
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
               b3slideContainer.on({
                  touchstart: function(event){
                  
                     swipeStart = event.originalEvent.touches[0].clientX;
                     dragStart  = event.originalEvent.touches[0].clientX - b3slideWrap.offset().left - 450;
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
      swipeLimitedPriceFn: function(){
         
                 


       


      }
      
  
           
    };  //객체 끝


    //객체.메서드 실행
    banner.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
