//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    var mall = {
        init:       function(){ //메서드(리터럴함수)
            this.swipeFn();                        
            this.swipe1Fn();
            this.swipe2Fn();
            this.swipe3Fn();
           
           
    
          
    
        },
        swipeFn:   function(){

       


            const slideWrap      = $('.dep1 .slide-wrap ');
            const slideContainer = $('.dep1 .slide-container');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
            

           


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
          
           
        },
        swipe1Fn:  function(){
            
                    

            const slideWrap      = $('.dep2 .slide-wrap ');
            const slideContainer = $('.dep2 .slide-container');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
            

           


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






              
        },
        
        swipe3Fn:  function(){
            
                  

            const slideWrap      = $('.dep4 .slide-wrap ');
            const slideContainer = $('.dep4 .slide-container');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
           

           


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




              
        },
        
   
        
        swipe2Fn:  function(){
            
                  

            const slideWrap      = $('.dep3 .slide-wrap ');
            const slideContainer = $('.dep3 .slide-container');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
           

           


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




              
        }
        
       

    };  //객체 끝


    //객체.메서드 실행
    mall.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
