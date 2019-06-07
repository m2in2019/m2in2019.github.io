$(function(){
    
    if(jQuery.browser.msie && ($.browser.version == '6.0' || $.browser.version == '7.0' || $.browser.version == '8.0')){
        location.replace("ie/ie.html");
        return;
    }
    
    // Выделение активной ссылки в меню уроков
    $('#menuLess a').click(function(event){        
        //event.preventDefault();
        $('#menuLess a').removeClass('active');
        $(this).addClass('active');
    }); 
});