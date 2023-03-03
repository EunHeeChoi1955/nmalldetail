//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
    // ECMA Script 5 (이크마 스크립트 5)
    //객체

    var mall = {
        init:       function(){ //메서드(리터럴함수)
            this.headerFn(); 
                        
            this.selectBox1Fn();
            this.selectBox2Fn();
           
           
    
          
    
        },
        headerFn:   function(){

                 
                        
       
           
           
            



          
           
        },
        selectBox1Fn:  function(){
            
                       
                           //   탭버튼 이벤트
                    var t=0;
                    var $smoothBtn  = $('.smoothBtn');
                    var $htmlBody   = $('html,body');
                    var $mobile     = $('.mobile');
                    var $midBtn     = $('.midBtn');
               

                        $smoothBtn.on({
                            click:  function(event){
                                event.preventDefault();
                                $this = $(this); //현재 클릭한 이(this) 버튼
        
                                var url = $this.attr('href'); //#section02 .....
                                if(url !== undefined && url != ''){
                                    $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                                    $mobile.stop().slideUp(300);
                                   
                                   // 액티브 조정 
                                   $(this).parent().siblings().removeClass('btnClick').end().addClass('btnClick');
     
                                    
                                }
                               
                            }
                        });
                        
                        
                    select1       = $('#selectBox1');

                    
                        //헤더영역 스크롤 이벤트 (페럴럭스)
                        var $window  = $(window);
                        var $totalWrap   = $('.totalWrap');// 메뉴
                        var $midBtnWrap   = $('.midBtnWrap');// 메뉴
                        var t = 0; // false === 0 같다는 표시   toggle
                        
                        //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
                        //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라 
                        $window.scroll(function(){ //스크롤 이벤트
                            // console.log(  $window.scrollTop() ); //스크롤 탑값 확인
                            if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                                     $totalWrap.addClass('addTop'); 
                                     $midBtnWrap.addClass('addTop'); //
                                     
                                     
                            }
                            else{
                                    $totalWrap.removeClass('addTop'); 
                                    $midBtnWrap.removeClass('addTop');
                                
                            }           
                        });


               

                   
                    $('.selectBox1 .tabBtn , .arrow' ).each(function(idx){

                    

                        $(this).on({
                            click:	function(){
                            showHideList();
                            }
                        });
                    });
                    
                    $(".selectBox1 .tab > li > a").click(function(e) {
                    e.preventDefault();	
                    select1.removeClass('addClose'); // 탭버튼 누르면 select1 다시나타남
                    // 전역변수 조정
                    showHideList();
                    
                    //새로운 클릭일 경우에만 ui 변경
                    if(!$(this).parent().hasClass('active')) { 
                    $('.selectBox1 .tabBtn').text($(this).text()); //보여지는 제목 바꾸기
                    
                    }
                    
                    // 액티브 조정 
                    $(this).parent().siblings().removeClass('active').end().addClass('active');
                    
                    });
                    
                    //모바일 & PC 공통 
                    $(".selectBox1 .tabs a").click(function(e) {
                        e.preventDefault();	
                        $(this).parent().siblings().removeClass('active').end().addClass('active');

                        $('.selectBox1 .tab').parents('ul').next().children().hide().eq($(this).parent().index()).show();
                    
                        
                    });
                    
                    //현재 active 되어있는 탭 외의 모든 데이터 접기 => 모바일도 적용하기 위해선 공통 class 생성하여 적용 필요
                    $('.selectBox1 .ServiceTab > li').on('click', function(e){
                        e.preventDefault();	
                    // $(".nav").navgoco('toggle', false);
                        $(".selectBox1 .nav > li").removeClass('active');
                        $(".selectBox1 .nav > li").removeClass('open');
                    });
                    
                    function showHideList() {
                        if(t==0){
                        t=1;
                        $('.selectBox1 .tab').stop().slideDown();
                        $('.selectBox1 .arrow').addClass('addFamily');
                        
                        }else{
                        t=0;
                        $('.selectBox1 .tab').hide();
                        $('.selectBox1 .arrow').removeClass('addFamily');	
                        $('.selectBox1 .tabBtn').children().stop().slideUp();	
                        
                        }
                    }






              
        },
        
        selectBox2Fn:  function(){
            
                    //   탭버튼 이벤트
                    var t=0;
                                
                    select2       = $('#selectBox2');
                   
                    $('.selectBox2 .tabBtn , .arrow' ).each(function(idx){

                    

                        $(this).on({
                            click:	function(){
                            showHideList();
                            }
                        });
                    });
                    
                    $(".selectBox2 .tab > li > a").click(function(e) {
                    e.preventDefault();	
                    select1.removeClass('addClose'); // 탭버튼 누르면 select1 다시나타남
                    // 전역변수 조정
                    showHideList();
                    
                    //새로운 클릭일 경우에만 ui 변경
                    if(!$(this).parent().hasClass('active')) { 
                    $('.selectBox2  .tabBtn').text($(this).text()); //보여지는 제목 바꾸기
                    
                    }
                    
                    // 액티브 조정 
                    $(this).parent().siblings().removeClass('active').end().addClass('active');
                    
                    });
                    
                    //모바일 & PC 공통 
                    $(".selectBox2 .tabs a").click(function(e) {
                        e.preventDefault();	
                        $(this).parent().siblings().removeClass('active').end().addClass('active');

                        $('.selectBox2 .tab').parents('ul').next().children().hide().eq($(this).parent().index()).show();
                    
                        
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
                        $('.selectBox2 .tab').stop().slideDown();
                        $('.selectBox2 .arrow').addClass('addFamily');
                        
                        }else{
                        t=0;
                        $('.selectBox2 .tab').hide();
                        $('.selectBox2 .arrow').removeClass('addFamily');	
                        $('.selectBox2 .tabBtn').children().stop().slideUp();	
                        
                        }
                    }






              
        }
        
       

    };  //객체 끝


    //객체.메서드 실행
    mall.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
