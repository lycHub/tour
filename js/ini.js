function setWrap(){
    if ($(window).width()>1280) {
        //1190px
        $('body').attr('class','w1280');
    }else{
        //990px
        $('body').attr('class','w1024');
    }
}
setWrap();
$(window).on('resize',setWrap);