$(function(){
    $('.btn_first').click(function (e) { 
        e.preventDefault();
        $('.p_first').show();
        $('.p_second').hide();
        
    });
    $('.btn_second').click(function (e) { 
        e.preventDefault();
        $('.p_second').show();
        $('.p_first').hide();
        
    });
     $('.header-fixed').slideUp().hide();
    $(window).scroll(function(){
        var scrolling=$(this).scrollTop();
        // console.log(scrolling);
        if(scrolling >= 500){
            $('.header-fixed').slideDown().show();

        }
        else{
            $('.header-fixed').slideUp().hide();
        }
    });
    $('.solution .acord_block .one').show();
    	$('.solution .acord_block h3').click(function(){
            //  $('.solution .acord_block p').slideUp();
            $(this).next().slideToggle();
            //  $('.solution .acord_block p').hide();
            $('.solution .acord_block p').not($(this).next()).slideUp();
        });
	
$('.study').mousemove(function () { 
 
    
  $('.timer').countTo();
 });
   
    $('.All_Images').mixItUp(); 
	
	

});