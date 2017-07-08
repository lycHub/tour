$(function(){
    setWrap();
    $(window).on('resize',setWrap);
    //延迟加载
    delay();
    $(window).on('scroll resize',delay);

    //头部开始
    $('#top ul li').hover(function () {
        $(this).children('div').toggleClass('active').stop().slideToggle('fast');
    })


    $('li.phone').hover(function(){
        $('#pic_app').finish().slideDown();
    },function(){
        $('#pic_app').finish().slideUp();
    })

    $('li.wechat').hover(function(){
        $('#wechat_pic').finish().slideDown();
    },function(){
        $('#wechat_pic').finish().slideUp();
    })


    $('#logo .left .nowCity').hover(function () {
        $(this).css('box-shadow','0px 0px 15px 0px #ccc');
        $(this).children('i').css('backgroundPosition','-30px -10px');
        $('.cityList').css('box-shadow','0px 0px 15px 0px #ccc').slideDown();
    },function () {
        $(this).css('box-shadow','0px 0px 15px 0px #fff');
        $(this).children('i').css('backgroundPosition','-14px -10px');
        $('.cityList').css('box-shadow','0px 0px 15px 0px #fff').slideUp();
    })

    $('.hotCity span').click(function(){
        $('.nowCity').html($(this).text()+'<i></i>');
    })
    //头部结束,导航开始

    $('#nav ul li').each(function (index,element) {
        if($('#nav ul li')[index].children.length != 1){
            $('#nav ul li').eq(index).hover(function(){
                $(this).toggleClass('hover');
            })
        }
    })
    //导航结束,轮播开始
    //自动轮播
    var auto=true;
    $('#carousel').hover(function () {
        auto=false;
    },function () {
        auto=true;
    })
    setInterval(function () {
        if(auto){ $('#carousel .center span.toRight').trigger('click');}
    },2000);

    $('#carousel span').hover(function () {
        $(this).toggleClass('hover');
    })


    //手动轮播
    $('#carousel i').mouseenter(function () {carousel(this);})

    //点击轮播
    $('#carousel .center span.toLeft').click(function () {carousel('left');});
    $('#carousel .center span.toRight').click(function () {carousel('right');});

    $('#carousel .left,#carousel .right').hover(function () {
        $(this).toggleClass('hover');
        $('#carousel .center span').toggle();
    })
    /*轮播结束,左侧导航开始*/
    $('#carousel .left .search_left>ul li a').click(function (e) {
        var index=$('#carousel .left .search_left>ul li a').index(this);
        $('#carousel .left .search_left>ul li a').filter('.hover').removeClass('hover');
       $(this).addClass('hover');
        $('#carousel .left .search_right>div').filter('.hover').removeClass('hover');
        $('#carousel .left .search_right>div').eq(index).addClass('hover');
    })
    /*左侧导航结束,每日精选开始*/
    //左侧倒计时
    setInterval(function(){
        var time=(new Date(2017,12,31,18,05,34))-(new Date());
        var dd=checkTime(parseInt(time / 1000 / 60 / 60 / 24));
        var hh=checkTime(parseInt(time / 1000 / 60 / 60 % 24));
        var mm=checkTime(parseInt(time / 1000 / 60 % 60));
        var ss=checkTime(parseInt(time / 1000 % 60));
        $('#daySelect .left .clock_timer .show_time .hh em').first().text(hh.toString().charAt(0)).end().last().text(hh.toString().slice(1));
        $('#daySelect .left .clock_timer .show_time .mm em').first().text(mm.toString().charAt(0)).end().last().text(mm.toString().slice(1));
        $('#daySelect .left .clock_timer .show_time .ss em').first().text(ss.toString().charAt(0)).end().last().text(ss.toString().slice(1));
    },1000)
    //右侧图片加载
    var temp_pic=new Image();
    $(temp_pic).on('load',function () {
        $('#daySelect .wrap .pro_loading').hide();
        $('#daySelect .wrap .right').show();
    })
    temp_pic.src=$('#daySelect .wrap .right .pic img').attr('src');
    /*每日精选结束,迪士尼开始*/
    //相册

    $('#disney .small ul li').not('.all').hover(function () {
        $('#disney .mid img').css('zIndex',0);
        $('#disney .mid img').eq($(this).index()).css('zIndex',1);
    })


    //左侧广告
    $('#destination .bottomInfo .advert .program li').hover(function () {
        $(this).finish().animate({top:-8},100);
    },function () {
        $(this).finish().animate({top:0},100);
    })

    //右侧图文
    $('#destination .topNav .tabs span').hover(function () {
        $('#destination .topNav .tabs span').filter('.hover').removeClass('hover');
        $(this).addClass('hover');
    })

    //右侧图片
    $('#destination .bottomInfo .imgTxt .contain a').hover(function () {
        $(this).css('borderColor','#e4e4e4').children('.infoImg').finish().animate({height:60});
    },function () {
        $(this).css('borderColor','#fff').children('.infoImg').finish().animate({height:24});
    })
    /*热门目的地结束*/

    /*深圳人都爱去*/
    $('#locaLove .down ul li').hover(function () {
        $('#locaLove .down ul li').removeClass('active');
        $(this).finish().addClass('active').animate({width:340});
        $('#locaLove .down ul li').not('.active').finish().animate({width:150});
    })
    /*深圳人都爱去结束*/

    /*海外民宿开始*/
    $('#minsu .minsuCarousel .left .lunbo ul').width($('#minsu .minsuCarousel .left .lunbo ul li').length*$('#minsu .minsuCarousel .left .lunbo ul li').width()+220).css('left',-($('#minsu .minsuCarousel .left .lunbo ul').width()-$('#minsu .minsuCarousel .left .lunbo').width())/2+8);
    $('#minsu .minsuCarousel .left .lunbo .imgs').width($('#minsu .minsuCarousel .left .lunbo .imgs img').length*$('#minsu .minsuCarousel .left .lunbo .imgs img').width());
    $('#minsu .minsuCarousel .left .lunbo ul li a .imgs img').hover(function () {
        var that=this;
        timer2=setInterval(function () {
                var move=new NoStopMove3({
                    element:$(that),
                    num:$(that).parent().children().length,
                    showNum:1,
                    distance:1,
                    dir:'left',
                    speed:'normal'
                });
                move.start();
        },1000)
    },function(){
       clearInterval(timer2);
    })

    $('#minsu .minsuCarousel .left .btnRight').click(function () {//向左
        var move=new NoStopMove2({
            element:$('#minsu .minsuCarousel .left .lunbo ul li'),
            distance:3,
            dir:'left',
            speed:'slow'
        });
        move.start();
    });

    $('#minsu .minsuCarousel .left .btnLeft').click(function () {//向右
        var move=new NoStopMove2({
            element:$('#minsu .minsuCarousel .left .lunbo ul li'),
            distance:3,
            dir:'right',
            speed:'slow'
        });
        move.start();
    });


    //自动轮播
    var flag=true;
    $('#minsu .minsuCarousel .left').hover(function () {
        flag=false;
    }, function () {
        flag=true;
    })
    setInterval(function () {
        if(flag){
            $('#minsu .minsuCarousel .left .btnRight').trigger('click');
        }
    },3000)
    /*海外民宿结束*/

    /*团队定制开始*/
    var arr=[];
    $('#team .box ul li').each(function (a,value) {
         arr.push({
             display:$('#team .box ul li').eq(a).css('display'),
             width:$('#team .box ul li').eq(a).width(),
             height: $('#team .box ul li').eq(a).height(),
             left: $('#team .box ul li').eq(a).css('left'),
             top: $('#team .box ul li').eq(a).css('top'),
             zIndex: $('#team .box ul li').eq(a).css('zIndex')
         })
    })
    $('#team .box span.prev').click(function () {
        hxd(arr,'prev',$('#team .box ul li'));
    })

    $('#team .box span.next').click(function () {
        hxd(arr,'next',$('#team .box ul li'));
    })

    //自动
    var auto2=true;
    $('#team .box').hover(function () {
        auto2=false;
    }, function () {
        auto2=true;
    })
    setInterval(function () {
        if(auto2){$('#team .box span.next').trigger('click');}
    },2000)
    /*团队定制结束*/

    /*合作伙伴开始*/
    $('#parterns .bottom ul').width($('#parterns .bottom ul li').length*$('#parterns .bottom ul li').width()).css('left',-(85+($('#parterns .bottom ul').width()-$('#parterns .bottom').width())/2));
    $('#parterns button.next').finish().click(function () {  //向左
        var move=new NoStopMove({
            element:$('#parterns .bottom ul li'),
            distance:3,
            dir:'left',
            speed:'normal',
        });
        move.start();
    })

    $('#parterns button.prev').click(function () {//向右
        var move=new NoStopMove({
            element:$('#parterns .bottom ul li'),
            distance:3,
            dir:'right',
            speed:'normal',
            dis:$('#parterns .bottom ul').css('left').slice(0,-2)
        });
        move.start();
    })

    //轮播
    var control=true;
    $('#parterns').hover(function () {
        control=false;
    }, function () {
        control=true;
    })
    setInterval(function () {
        $('#parterns button.next').trigger('click');
    },3000)
    /*合作伙伴结束*/

    /*品牌汇开始*/
    $('#pinpai .wrap .tab div').click(function () {
        $('#pinpai .wrap .tab div').removeClass('active');
        $(this).addClass('active');
        if($(this).text()=='热门品牌'){
            $('#pinpai .wrap .index').show();
            $('#pinpai .wrap .contentList').hide();
            $('#pinpai .wrap .tab p.tab_hot').hide();
        }else  if($(this).text()=='品牌列表' || $(this).text()=='城市列表'){
            $('#pinpai .wrap .index').hide();
            $('#pinpai .wrap .contentList').show();
            $('#pinpai .wrap .tab p.tab_hot').show()
        }
    })
    if($('#pinpai .contentList ul li.active').index()==0){
        $('#pinpai .wrap .contentList .btnLeft').hide();
        $('#pinpai .wrap .contentList .btnRight').show();
    }else if($('#pinpai .contentList ul li.active').index()==25){
        $('#pinpai .wrap .contentList .btnLeft').show();
        $('#pinpai .wrap .contentList .btnRight').hide();
    }
    //品牌列表
    $('#pinpai .contentList ul li').click(function () {
        var index=$(this).index();
        $('#pinpai .contentList ul li').removeClass('active');
        $(this).addClass('active');

        $('#pinpai .contentList .content').removeClass('block');
        $('#pinpai .contentList .content').eq(index).finish().addClass('block').animate({left:0});
        $('#pinpai .contentList .content').not('.block').css('left','1190px');
    })
    $('#pinpai .wrap .contentList .btnRight').click(function () {
        $('#pinpai .wrap .contentList .btnLeft').show();
        var ref=$('#pinpai .contentList ul li.active').index();
        ref++;
        $('#pinpai .contentList ul li').eq(ref).triggerHandler('click');
        if(ref==$('#pinpai .contentList ul li').length-1){
            $(this).hide();
        }
        console.log(ref)
    })
    $('#pinpai .wrap .contentList .btnLeft').click(function () {
        $('#pinpai .wrap .contentList .btnRight').show();
        var ref=$('#pinpai .contentList ul li.active').index();
        ref--;
        $('#pinpai .contentList ul li').eq(ref).triggerHandler('click');
        if(ref==0){
            $(this).hide();
        }
        console.log(ref)
    })
    $('#pinpai .wrap .index a').hover(function () {
        $(this).children('img').animate({marginLeft:-10});
    }, function () {
        $(this).children('img').animate({marginLeft:0});
    })
    /*品牌汇结束*/
    /*右侧导航开始*/
    $('#rightSlider .topimgShow').hover(function () {
        $(this).find('.tip').show();
    }, function () {
        $(this).find('.tip').hide();
    })

    $('#rightSlider .sliderTools ul li').not('.c-q').hover(function () {
        $(this).find('span').show().animate({left:-85,opacity:1},'fast');
    }, function () {
        $(this).find('span').animate({left:-120,opacity:0},'fast', function () {
            var that=this;
            setTimeout(function () {
                $(that).hide();
            },200)
        });
    })
    $('#rightSlider .sliderTools ul li.c-q').hover(function () {
        $(this).find('span').show().animate({left:-166,opacity:1},'fast');
    }, function () {
        $(this).find('span').animate({left:-184,opacity:0},'fast', function () {
            var that=this;
            setTimeout(function () {
                $(that).hide();
            },200)
        });
    })
    scrol($('#rightSlider .sliderTools ul li.c-t'),100);
    $(document).scroll(function () {
        scrol($('#rightSlider .sliderTools ul li.c-t'),100);
    })

    $('#rightSlider .sliderTools ul li.c-t').on('click',function () {
        $('html,body').animate({scrollTop:0});
    })
    /*右侧导航结束*/

    /*日历UI*/
    $('.search_right ul li.date input,.hotel dl dd.date input').datepicker({
        dateFormat:'yy-mm-dd',
        minDate:new Date,
        firstDay: 1,
        showButtonPanel:true,
        showMonthAfterYear:true,
        numberOfMonths:2,
    })
    /*左侧楼梯导航开始*/
    scrol($('#stairslist'),564,$('#pinpai').offset().top);
    $(document).scroll(function () {
        scrol($('#stairslist'),564,$('#pinpai').offset().top);
    })
    $(document).scroll(function () {
        if($(window).scrollTop()<$('#disney')[0].offsetTop){
            $('#stairslist ul li').removeClass('current').eq(0).addClass('current');
        }else if($(window).scrollTop()>=$('#disney')[0].offsetTop && $(window).scrollTop()<$('#destination')[0].offsetTop){ //迪士尼
            $('#stairslist ul li').removeClass('current').eq(1).addClass('current');
        }else if($(window).scrollTop()>=$('#destination')[0].offsetTop && $(window).scrollTop()<$('#minsu')[0].offsetTop){//热门
            $('#stairslist ul li').removeClass('current').eq(2).addClass('current');
        }else if($(window).scrollTop()>=$('#minsu')[0].offsetTop && $(window).scrollTop()<$('#team')[0].offsetTop){//海外
            $('#stairslist ul li').removeClass('current').eq(3).addClass('current');
        }else if($(window).scrollTop()>=$('#team')[0].offsetTop && $(window).scrollTop()<$('#parterns')[0].offsetTop){
            $('#stairslist ul li').removeClass('current').eq(4).addClass('current');
        }else if($(window).scrollTop()>=$('#parterns')[0].offsetTop){
            $('#stairslist ul li').removeClass('current').last().addClass('current');
        }
    })
    $('#stairslist ul li:first').click(function () {
        $('html,body').animate({scrollTop:558});
    })
    $('#stairslist ul li:eq(1)').click(function () {
        $('html,body').animate({scrollTop:971});
    })
    $('#stairslist ul li:eq(2)').click(function () {
        $('html,body').animate({scrollTop:1378});
    })
    $('#stairslist ul li:eq(3)').click(function () {
        $('html,body').animate({scrollTop:2273});
    })
    $('#stairslist ul li:eq(4)').click(function () {
        $('html,body').animate({scrollTop:2650});
    })
    $('#stairslist ul li:last').click(function () {
        $('html,body').animate({scrollTop:3320});
    })
    /*左侧楼梯导航结束*/
})
//无缝滚动
function NoStopMove(obj){
    this.elements=obj.element;
    this.distance=obj.distance;
    this.dir=obj.dir;
    this.speed=obj.speed;
    this.step=this.elements.width()*this.distance;
}

NoStopMove.prototype.start=function(){
    var that=this;
    var dis;
    if(this.dir=='left'){
        dis=Math.abs(that.elements.parent().css('left').slice(0,-2));
        this.elements.parent().stop().animate({
            left:'-='+this.step
        },that.speed,that.toNext(dis))
    }else if(this.dir=='right'){
        dis=that.elements.parent().css('left').slice(0,-2);
        this.elements.parent().stop().animate({
            left:'+='+this.step
        },that.speed,that.toPrev(dis))
    }

}

NoStopMove.prototype.toNext=function (pos) {
    if(Math.floor(pos)>=this.elements.width()*14){
        this.elements.parent().children('li:lt(14)').css('position','relative').css('left',this.elements.length*this.elements.width());
    }
    if(Math.floor(pos)>this.elements.width()*21){
        this.elements.parent().children('li:lt(14)').css('position','static');
        this.elements.parent().css('left',0);
    }
}

NoStopMove.prototype.toPrev=function (pos) {
    if(Math.floor(Math.abs(pos))<=this.elements.width()*3){
        this.elements.parent().children('li:gt(7)').css('position','relative').css('left',-this.elements.length*this.elements.width());
    }
    if(pos>=this.elements.width()*6){//1302
        this.elements.parent().children('li:gt(7)').css('position','static');
        this.elements.parent().css('left',-this.elements.width()*15);
    }
}



//继承无缝滚动2
function NoStopMove2(obj){
    NoStopMove.call(this,obj);
    this.step=this.elements.width()*this.distance+60;
}
for(var a in  NoStopMove.prototype){
    NoStopMove2.prototype[a]=NoStopMove.prototype[a];
}

NoStopMove2.prototype.toNext=function (pos) {
    if(Math.floor(pos)>=1812){//2094
        this.elements.parent().children('li:lt(7)').css('position','relative').css('left',this.elements.length*(this.elements.width()+20));
    }
    if(Math.floor(pos)>=(this.elements.width()*10+160)){//2718
        this.elements.parent().children('li:lt(7)').css('position','static');
        this.elements.parent().css('left',0);
    }
}

NoStopMove2.prototype.toPrev=function (pos) {
    if(Math.floor(Math.abs(pos))<282*3){
        this.elements.parent().children('li:gt(3)').css('position','relative').css('left',-this.elements.length*(this.elements.width()+20));
    }
    if(pos>=this.elements.width()*3+40){
        this.elements.parent().children('li:gt(3)').css('position','static');
        this.elements.parent().css('left',-(this.elements.width()+20)*8);
    }
}



//继承无缝滚动3
function NoStopMove3(obj){
    this.num=obj.num;
    this.showNum=obj.showNum;
    NoStopMove.call(this,obj);
}
for(var a in  NoStopMove.prototype){
    NoStopMove3.prototype[a]=NoStopMove.prototype[a];
}
NoStopMove3.prototype.toNext=function (pos) {
    var c=this.num-this.showNum;
    if(pos>=this.elements.width()*c){
        this.elements.parent().children('img:lt('+c+')').css('position','relative').css('left',this.num*this.elements.width());
    }
    if(pos>=this.elements.width()*this.num){
        this.elements.parent().children('img:lt('+c+')').css('position','static');
        this.elements.parent().css('left',0);
    }
}


//检测倒计时
function checkTime(i){return i<10?'0'+i:i;}

//尺寸变化
function setWrap(){
    if ($(window).width()<1024) {
        $('#destination .bottomInfo .contain').addClass('w979');
    }else{
        //990px
        $('#destination .bottomInfo .contain').removeClass('w979')
    }
}

//主轮播
function carousel(flag) {
    if(flag=='left'){
        if($('#carousel>ul li:visible').index()==0){
            $('#carousel>ul li').first().fadeOut().end().last().fadeIn();
            $('#carousel .center i').first().removeClass('hover').end().last().addClass('hover');
        }else {
            $('#carousel>ul li').finish().filter(':visible').fadeOut().prev('li').fadeIn();
            $('#carousel .center i.hover').removeClass('hover').prev('i').addClass('hover');
        }
    }else if(flag=='right'){
        if($('#carousel>ul li:visible').index()==$('#carousel>ul li').length-1){
            $('#carousel>ul li').last().fadeOut().end().first().fadeIn();
            $('#carousel .center i').last().removeClass('hover').end().first().addClass('hover');
        }else {
            $('#carousel>ul li').finish().filter(':visible').fadeOut().next('li').fadeIn();
            $('#carousel .center i.hover').removeClass('hover').next('i').addClass('hover');
        }
    }else if(typeof flag=='object'){
        var index=$(flag).index();
        if(index!=$('#carousel>ul li:visible').index()){
            $('#carousel .center i').filter('.hover').removeClass('hover').end().eq(index).addClass('hover');
            $('#carousel>ul li').finish().filter(':visible').fadeOut().end().eq(index).fadeIn();
        }
    }
}

//韩雪冬轮播
function hxd(arr,dis,element){
    if(dis=='next'){
        arr.unshift(arr[arr.length-1]);
        arr.pop();
        element.each(function (a,value) {
            element.eq(a).finish().css({zIndex:arr[a].zIndex,display:arr[a].display}).animate({
                width:arr[a].width,
                height:arr[a].height,
                left: arr[a].left,
                top:arr[a].top
            });
        })
    }else if(dis=='prev'){
        arr.push(arr[0]);
        arr.shift();
        element.each(function (a,value) {
            element.eq(a).finish().css({zIndex:arr[a].zIndex,display:arr[a].display}).animate({
                width:arr[a].width,
                height:arr[a].height,
                left: arr[a].left,
                top:arr[a].top
            });
        })
    }
}
//延迟加载
function delay(){
    $('img').each(function (index) {
        if($(this).offset().top<$(window).height()+$(window).scrollTop()){
            $(this).attr('src',$(this).attr('xsrc'));
        }
    })
}

function scrol(element,min,max){
    if(max==undefined){
        if($(window).scrollTop()>min){
            element.css('visibility','visible');
        }else{
            element.css('visibility','hidden');
        }
    }else {
        if($(window).scrollTop()>=min && $(window).scrollTop()<max){
            element.css('visibility','visible');
        }else{
            element.css('visibility','hidden');
        }
    }

}




