//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    var mall = {
        init:       function(){ //메서드(리터럴함수)
            this.headerFn();   
            this.smoothScrollFn();         
            this.section1Fn();
            this.section1BtnFn();
            this.section3Fn();
            this.section5Fn();
            this.section6Fn();
            this.section8BtnFn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
          
    
        },
        headerFn:   function(){

         //헤더영역 스크롤 이벤트 (페럴럭스)
         var $window  = $(window);
         var $header  = $('#header');
         var $mainBtn = $('#header .mainbtn');
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
                              $this = $(this); //현재 클릭한 이(this) 버튼

                              var url = $this.attr('href'); 
                        if(url !== undefined && url != ''){
                                 $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                              
                        }
                     }
                  });

        },
        section1Fn:  function(){

               const slideWrap      = $('#section1 .slide-wrap');
               const slideContainer = $('#section1 .slide-view');
               let   cnt            = 0;
               let   setId          = 0;
               let   setId2         = 0;
               let   swipeStart     = null;
               let   swipeEnd       = null;
               let   count          = 0;
   
               let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
               let   dragEnd        = null; 
               let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
   
   
   
               //1.메인슬라이드 함수
               function mainSlide(){   
                  // slideWrap.stop().animate({left:(-100*cnt) + '%'});       
                  slideWrap.stop().animate( {left:(-330*cnt)},600, 'easeInOutExpo',function(){
                     if(cnt>2){cnt=0}  //다음슬라이드 롤링
                     if(cnt<0){cnt=2}  //이전슬라이드 롤링
                     slideWrap.stop().animate( {left:(-330*cnt)},0)
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
               //3.자동타이머 함수
               function autoTimer(){
                  setId = setInterval(nextCount, 3000);  //함수호출하고 3초 후에 실행
                  //console.log('setId', setId);
               }
   
               autoTimer();
               
               //4. 마우스 터치 스와이프
               slideContainer.on({
                     mousedown: function(event){
                        //터치스와이프 시작 포지션
                        swipeStart = event.clientX;
   
                        dragStart  = event.clientX - slideWrap.offset().left - 330;
                        mouseDown  = true;//드래그 시작임을 표시
                        timerCount(); //터치시작하면 타이머 카운트 실행
   
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
                        if( swipeStart-swipeEnd > 0 ){//다음슬라이드                       
                           nextCount();
                        }
                        if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                        
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
                     dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 330;
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
   
                  },
                  touchmove: function(event){                 
                     if(!mouseDown){ //true가 아니면
                        return;
                     }
                     dragEnd  = event.originalEvent.touches[0].clientX; //마우스가 움직이면 계속 드래그된다.
                     // 이동거리는 = dragEnd - dragStart;
                     slideWrap.css({left: dragEnd - dragStart })
                  }
               });
   
        },
        section1BtnFn:  function(){

               const btnWrap      = $('#section1 .btn-wrap');
               const btnContainer = $('#section1 .btn-view');
               let   cnt            = 0;
               let   swipeStart     = null;
               let   swipeEnd       = null;
               let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
               let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
   
   
   
               //1.메인슬라이드 함수
               function mainSlide(){   
                  // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
                  btnWrap.stop().animate( {left:(-80*cnt)}, 'easeInOutSine',function(){
                     cnt>3?cnt=0:cnt;  
                     cnt<1?cnt=0:cnt;                 
                   //초기화
                     btnWrap.stop().animate( {left:(-80*cnt)});
                     
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
               btnContainer.on({
                     mousedown: function(event){
                        //터치스와이프 시작 포지션
                        swipeStart = event.clientX;
                       
                        dragStart  = event.clientX - btnWrap.offset().left - 80;
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
               btnContainer.on({

                  
                  touchstart: function(event){
                     swipeStart = event.originalEvent.touches[0].clientX;
                     dragStart  = event.originalEvent.touches[0].clientX - btnWrap.offset().left - 80;
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
        section3Fn:  function(){

            const slideWrap      = $('#section3 .slide-wrap');
            const slideContainer = $('#section3 .slide-view');
            let   cnt            = 0;
            let   swipeStart     = null;
            let   swipeEnd       = null;
            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false
            var   heart          = $('#section3 .heart');

           


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

         const slideWrap      = $('#section5 .slide-wrap');
         const slideContainer = $('#section5 .slide-view');
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
               cnt>2?cnt=0:cnt;
               cnt<1?cnt=0:cnt;
               //초기화설정
               slideWrap.stop().animate( {left:(-162*cnt)});
               cnt>0?cnt=2:cnt;
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

         const slideWrap      = $('#section6 .slide-wrap');
         const slideContainer = $('#section6 .slide-view');
         let   cnt            = 0;
         let   swipeStart     = null;
         let   swipeEnd       = null;
         let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
         let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false


        


         //1.메인슬라이드 함수
         function mainSlide(){ 
            

               // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
            slideWrap.stop().animate( {left:(-252*cnt)}, 'easeInOutSine',function(){
               cnt>2?cnt=0:cnt;
               cnt<1?cnt=0:cnt; 
               //초기화설정
               slideWrap.stop().animate( {left:(-252*cnt)});
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
                  dragStart  = event.clientX - slideWrap.offset().left - 252;
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



		// //4터치이벤트
		// slideContainer.swipe({
		// 	swipeLeft:	function(){
		// 		clearInterval( setId );	//자동타이머호출
		// 		nextCount();		//다음 슬라이드 호출				
		// 		timerControlFn();	//6초간 터이 없으면 동작하는 함수
				
		// 	},swipeRight:	function(){
		// 		clearInterval( setId );
		// 		prevCount();
		// 		timerControlFn();
		// 	}
		// });
		
         
         //5. 마우스 드레그 앤 드롭
         // mousemove

         //6. 반응형 모바일 손가락 핑거 드래드 앤 드롭(반응형)
         // 마우스 인식못함 동작안함
         // 반응형 진행하고 폴리필 touchEvent 추가
         // touchstart(mousedown) / touchend(mouseup) / touchmove(mousemove)
         slideContainer.on({
            touchstart: function(event){
              
               swipeStart = event.originalEvent.touches[0].clientX;
               dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 252;
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
        section8BtnFn:  function(){

         const slideWrap      = $('#section8 .btn-wrap');
         const slideContainer = $('#section8 .btn-view');
         let   cnt            = 0;
         let   swipeStart     = null;
         let   swipeEnd       = null;
         let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
         let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false


        


         //1.메인슬라이드 함수
         function mainSlide(){ 
            

               // btnWrap.stop().animate({left:(-100*cnt) + '%'});       
            slideWrap.stop().animate( {left:(-80*cnt)}, 'easeInOutSine',function(){
               cnt>1?cnt=0:cnt;
               cnt<1?cnt=0:cnt; 
               //초기화설정
               slideWrap.stop().animate( {left:(-80*cnt)});
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
                  dragStart  = event.clientX - slideWrap.offset().left - 80;
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
               dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 80;
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
        section9Fn: function(){

         const slideWrap      = $('#section9 .slide-wrap');
         const slideContainer = $('#section9 .slide-view');
         var setId = 0;
         var t = 0;
         var t2 = 0;
         var ratio = $(' #section9 .item').eq(0).innerWidth();
         var slideW = $(window).innerWidth()*( ratio / $(window).innerWidth() ); //슬라이드너비 = 창너비*(슬라이드너비/창너비); //0.435627956 슬라이드 1개의 창너비의 대한 너비 비율
         var m = $('#section9 .screensWrap>li').length+1; //총 슬라이드 갯수 좌측슬라이드+중앙슬라이드+우측슬라이드
         var n = m-2-1; //가운데 중앙슬라이드 갯수 4 = 7-2-1 (슬라이드는 5개 인덱스번호는 0 ~ 4)
         //var slideW = $(window).innerWidth()*ratio; //슬라이드너비 = 창너비*슬라이드1개의비율값
         var cnt = 0;
         var heart = $('#section9 .heart');
        
         //let   cnt            = 0;
         let   swipeStart     = null;
         let   swipeEnd       = null;

            
            autoPlay('_play');  //자동실행 4초 후에 실행
         
         
            function autoPlay(z){
               if( z=='_play' || z=='_mouseleave' || z=='_play_auto'){
                  if(t2==0){ //플레이버튼 클릭과 마우스떠났을때
                           //두번 자동실행을 막기 위해 t2변수 사용 버블링 디버깅.
                           
                     setId = setInterval(nextSlide,3000);
                     t2=1;
                  }
               }			
            }	
            
            
            //슬라이드의 모든 버튼위에 마우스 올리면 타이머 일시정지
            
            $('#section9 .slideControl, .screensWrap').on({
               
               mouseover:	function(e){
                  clearInterval(setId);  	//일시정지
                  $(e.target).addClass('addBtn9');
                  
                  t=0;
               },
               mouseout:	function(e){				
                  if(t==0){  	//플레이버튼 스톱(▶) 상태이라면 플레이 불가능
                     t2=0;	//자동실행함수를 호출시 변수 초기화
                     clearInterval(setId);  	//일시정지
                     autoPlay('_mouseleave'); //플레이(||)	상태에서 자동 실행 가능	
                     $(e.target).removeClass('addBtn9');
                     
                  }
               }
               
            });
      
         
         
          
      
            //메인 슬라이드 함수
            function mainSlide(){
            
               $('#section9 .screensWrap').stop().animate({ left: -slideW*cnt}, 600, function(){
                  cnt>n?cnt=0:cnt;
                  cnt<0?cnt=n:cnt;
                  $('#section9 .screensWrap').stop().animate({ left: -slideW*cnt}, 0);
                  cnt>5?cnt=0:cnt;
               });
            
               navFn();
               
            }
            
      
            //네비게이션 버튼(페이지 버튼==인디게이터 버튼) 마킹(Marking) 이벤트 
            function navFn(){
               
               $('#section9 .navItems').removeClass('addBtn9');	    //초기화
               $('#section9 .item').removeClass('addBtn9');	    //초기화
               $('#section9 .navItems').eq(cnt>n?0:cnt).addClass('addBtn9');	//해당 슬라이드 버튼만 표시 
               $('#section9 .item').eq(cnt>n?0:cnt).addClass('addBtn9');	//해당 슬라이드 버튼만 표시 
      
                  
                     
            }		
      
         
      
            ////////////////////////////////////////////////////////////////////////
            //네비게이션 버튼 클릭이벤트
            //네비게이션 버튼을 배열처리(each()메소드)하여 인덱스값 이용
            $('#section9 .navItems').each(function(index){
               $(this).on({
                  click:	function(){
                     cnt = index;
                     mainSlide();
                  }
               });
            });
      
      
            //다음 슬라이드 카운트 함수
            function nextSlide(){
               cnt++;
               mainSlide();
            }
      
      
            //이전 슬라이드 카운트 함수
            function prevSlide(){
               cnt--;
               mainSlide();
            }
      
      
         

         //4. 마우스 터치 스와이프
         slideContainer.on({
            mousedown: function(event){
               //터치스와이프 시작 포지션
               swipeStart = event.clientX;
               dragStart  = event.clientX - slideWrap.offset().left -slideW*cnt;
               mouseDown  = true;//드래그 시작임을 표시
               

            },//mousedown 끝
            mouseup: function(event){
               swipeEnd = event.clientX;
               mouseDown  = false; //드래그 끝
               
               if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                  nextSlide();
               }
               if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                  prevSlide();
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
            dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left -slideW*cnt;
            mouseDown  = true;//드래그 시작임을 표시 
                               
         },
         touchend: function(event){                  
               swipeEnd   = event.originalEvent.changedTouches[0].clientX;   
               mouseDown  = false; //드래그 끝
                 
                
               if( swipeStart-swipeEnd > 0 ){//다음슬라이드                     
                  nextSlide();
               }
               if( swipeStart-swipeEnd < 0 ){   // 이전슬라이드                    
                  prevSlide();
                  
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
        section10Fn: function(){

         // const slideWrap      = $('#section10 .slide-wrap');
         // const slideContainer = $('#section10 .slide-view');
         // var setId = 0;
         // var t = 0;
         // var t2 = 0;
         // var ratio = $(' #section10 .item').eq(0).innerHeight();
         // var slideH = $(window).innerHeight()*( ratio / $(window).innerHeight() ); //슬라이드너비 = 창너비*(슬라이드너비/창너비); //0.435627956 슬라이드 1개의 창너비의 대한 너비 비율
         // var m = $('#section10 .screensWrap>li').length+1; //총 슬라이드 갯수 좌측슬라이드+중앙슬라이드+우측슬라이드
         // var n = m-1-1; //가운데 중앙슬라이드 갯수 4 = 7-2-1 (슬라이드는 5개 인덱스번호는 0 ~ 4)
         // //var slideW = $(window).innerWidth()*ratio; //슬라이드너비 = 창너비*슬라이드1개의비율값
         // var cnt = 0;
      
            
         //    autoPlay('_play');  //자동실행 4초 후에 실행
         
         
         //    function autoPlay(z){
         //       if( z=='_play' || z=='_mouseleave' || z=='_play_auto'){
         //          if(t2==0){ //플레이버튼 클릭과 마우스떠났을때
         //                   //두번 자동실행을 막기 위해 t2변수 사용 버블링 디버깅.
                           
         //             setId = setInterval(nextSlide,3000);
         //             t2=1;
         //          }
         //       }			
         //    }	
            
            
         //    //슬라이드의 모든 버튼위에 마우스 올리면 타이머 일시정지
            
         //    $('#section10 .slideControl, .screensWrap').on({
               
         //       mouseover:	function(e){
         //          clearInterval(setId);  	//일시정지
         //          $(e.target).addClass('addBtn10');
         //          t=0;
         //       },
         //       mouseout:	function(e){				
         //          if(t==0){  	//플레이버튼 스톱(▶) 상태이라면 플레이 불가능
         //             t2=0;	//자동실행함수를 호출시 변수 초기화
         //             clearInterval(setId);  	//일시정지
         //             autoPlay('_mouseleave'); //플레이(||)	상태에서 자동 실행 가능	
         //             $(e.target).removeClass('addBtn10');
         //          }
         //       }
               
         //    });
      
         
         
          
      
         
         //    //메인 슬라이드 함수
         //    function mainSlide(){
            
         //       $('#section10 .screensWrap').stop().animate({ top: -slideH*cnt}, 600, function(){
         //          cnt>n?cnt=0:cnt;
         //          cnt<0?cnt=n:cnt;
         //          $('#section10 .screensWrap').stop().animate({ top: -slideH*cnt}, 0);
         //          cnt>5?cnt=0:cnt;
         //       });
            
         //       navFn();
               
         //    }
            
      
         //    //네비게이션 버튼(페이지 버튼==인디게이터 버튼) 마킹(Marking) 이벤트 
         //    function navFn(){
               
         //       $('#section10 .navItems').removeClass('addBtn10');	    //초기화
         //       $('#section10 .item').removeClass('addBtn10');	    //초기화
         //       $('#section10 .navItems').eq(cnt>n?0:cnt).addClass('addBtn10');	//해당 슬라이드 버튼만 표시 
         //       $('#section10 .item').eq(cnt>n?0:cnt).addClass('addBtn10');	//해당 슬라이드 버튼만 표시 
      
                  
                     
         //    }		
      
         
      
         //    ////////////////////////////////////////////////////////////////////////
         //    //네비게이션 버튼 클릭이벤트
         //    //네비게이션 버튼을 배열처리(each()메소드)하여 인덱스값 이용
         //    $('#section10 .navItems').each(function(index){
         //       $(this).on({
         //          click:	function(){
         //             cnt = index;
         //             mainSlide();
         //          }
         //       });
         //    });
      
      
         //    //다음 슬라이드 카운트 함수
         //    function nextSlide(){
         //       cnt++;
         //       mainSlide();
         //    }
      
      
         //    //이전 슬라이드 카운트 함수
         //    function prevSlide(){
         //       cnt--;
         //       mainSlide();
         //    }
      
      
         





















         const slideWrap      = $('#section10 .slide-wrap');
          //const slideContainer = $('#section10 .slide-view');
          var setId = 0;
          var t = 0;
          var t2 = 0;
          //var ratio = $(' #section10 .item').eq(0).innerHeight();
          //var slideH = $(window).innerHeight()*( ratio / $(window).innerHeight() ); //슬라이드너비 = 창너비*(슬라이드너비/창너비); //0.435627956 슬라이드 1개의 창너비의 대한 너비 비율
          var m = $('#section10 .img-box'); //총 슬라이드 갯수 좌측슬라이드+중앙슬라이드+우측슬라이드
          var n = m-1; //가운데 중앙슬라이드 갯수 4 = 7-2-1 (슬라이드는 5개 인덱스번호는 0 ~ 4)
         // var slideH = $(window).innerHeight()*ratio; //슬라이드너비 = 창너비*슬라이드1개의비율값
          var cnt = 0;
          var Btn =$('#section10 .pageBtn ');
          var item =$('#section10 .item');
        

            
             autoPlay('_play');  //자동실행 4초 후에 실행
         
         
            function autoPlay(z){
               if( z=='_play' || z=='_mouseleave' || z=='_play_auto'){
                  if(t2==0){ //마우스떠났을때
                            //두번 자동실행을 막기 위해 t2변수 사용 버블링 디버깅.
                           
                     setId = setInterval(nextSlide,4000);
                      t2=1;
                   }
                }			
             }	
            
            
             //슬라이드의 모든 버튼위에 마우스 올리면 타이머 일시정지
             $('#section10 .screensWrap').on({
               
                mouseover:	function(e){
                   clearInterval(setId);  	//일시정지
                   $(e.target).addClass('addSec10');
                   t=0;
                },
                mouseout:	function(e){				
                   if(t==0){  	//플레이버튼 스톱(▶) 상태이라면 플레이 불가능
                      t2=0;	//자동실행함수를 호출시 변수 초기화
                      clearInterval(setId);  	//일시정지
                      autoPlay('_mouseleave'); //플레이(||)	상태에서 자동 실행 가능	
                      $(e.target).removeClass('addSec10');
                   }
                }
               
             });
      
         
         
          
      
             //메인 슬라이드 함수
             function mainSlide(){
            
                $('#section10 .img-box').eq(cnt>n?0:cnt).stop().slideDown(600, function(){  
                   $('#section10 .img-box').eq(cnt>n?0:cnt).delay(1000).slideUp(400);
               });
            
               navFn();
               
            }
            
      
             //네비게이션 버튼(페이지 버튼==인디게이터 버튼) 마킹(Marking) 이벤트 
             function navFn(){
               Btn.eq(cnt>n?0:cnt).addClass('addSec10');	//이거 여기다 둬야  슬라이드 1번 버튼 addclass 작용
               Btn.removeClass('addSec10');	    //초기화
               item.removeClass('addSec10');	    //초기화
               cnt>4?cnt=0:cnt;
                Btn.eq(cnt>n?0:cnt).addClass('addSec10');	//해당 슬라이드 버튼만 표시 
                item.eq(cnt>n?0:cnt).addClass('addSec10');	//해당 슬라이드 버튼만 표시 
                
                  
                     
             }		
      
         
      
             ////////////////////////////////////////////////////////////////////////
             //네비게이션 버튼 클릭이벤트
             //네비게이션 버튼을 배열처리(each()메소드)하여 인덱스값 이용
             Btn.each(function(index){
                $(this).on({
                   click:	function(){
                      cnt = index;
                      mainSlide();
                   }
                });
             });
      
      
             //다음 슬라이드 카운트 함수
             function nextSlide(){
                cnt++;
               mainSlide();
             }
      
      
            //이전 슬라이드 카운트 함수
           function prevSlide(){
               cnt--;
              mainSlide();
           }
      




        

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
