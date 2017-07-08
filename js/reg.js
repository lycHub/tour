$(function () {
    var flag=-1;
    var success=-1;
    $('#main .bottom form p img,#main .bottom form p i').click(function () {
        $('#main .bottom form p img').attr('src','code.php?rd='+Math.random());
    })

     $('#main .bottom form p em:first').click(function(){
          $(this).toggleClass('gou');
          flag=-flag;
          if(flag==1){
              $('#main .bottom form p.hide').show();
          }else{
             $('#main .bottom form p.hide').hide();
          }
     })
      $('#main .bottom form p em').eq(1).click(function(){
          $(this).toggleClass('gou');
          success=-success;
          if(success==1){
              $('form input[name=lma]').val(1);
               $('form p.ly_card').last().children('u').hide();
          }else{
              $('form input[name=lma]').val('');
          }
     })
 
 

    $.validator.addMethod('checkPass',function(value,element,args){
        if(args){
            return /^(((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\s0-9a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\s0-9a-zA-Z]))[^\s]+)$/g.test(value);
        }else{
            return true;
        }
    },'密码格式不正确')
    //表单验证
     var validator=$('form:first').validate({
        debug:true,
        errorElement:'u',
        rules:{
            phone:{
                required:true,
                number:true,
                rangelength:[0,11]
            },
            pass:{
                required:true,
                rangelength:[6,18],
                checkPass:true
            },
            passAgain:{
                required:true,
                equalTo:'input[name=pass]'
            },
            code:{
                required:true,
                remote:{
                    url:'code2.php',
                    type:'post'
                }
            }
        },
        messages:{
            phone:{
                required:'请输入手机号',
                number:'只能输入数字',
                rangelength:'请输入11位数字'
            },
            pass:{
                required:'请输入密码',
                rangelength:'密码必须6——18位',
                checkPass:'字母、数字、特殊符号中的两种或两种以上，不能单独使用字母、数字或符号'
            },
            passAgain:{
                required:'请再输入一次密码',
                equalTo:'两次密码输入不正确'
            },
            code:{
                required:'请输入验证码',
                 remote:'验证码错误'
            }
        },
        highlight: function (element,errorClass) {
            $(element).css('border-color','red');
        },

        //验证成功后取消高亮
        unhighlight: function (element,errorClass) {
            $(element).css('border-color','#ccc');
        },
        errorPlacement : function (error,element) {
            //console.log($(element).attr('name'));
           if($(element).attr('name')=='code'){

               $(element).parent().append(error);
           }else{
               error.insertAfter(element);
           }
        },
        submitHandler: function (form) {
            if($(form).children('input[name=lma]').val()!=1){
                if( $('form p.ly_card').last().children('u').length==0){
                     $('form p.ly_card').last().append('<u style="display:none;">您尚未同意条款</u>');
                }
                $('form p.ly_card').last().children('u').show();
            }
           //alert($(form).children('input[name=lma]').val());
        }
    })

    $('form input').focus(function () {
        $(this).css('border-color','#ccc').nextAll('u').hide();
    })
    

    $('form input[name=pass]').keyup(function () {
        var value=$.trim($(this).val());
        if(/[a-z]/i.test(value) && value.length >= 1 && value.length<6) {
                $('#main .bottom form ul li.lv1').css('backgroundColor', '#ffa63c');
                $('#main .bottom form ul li.lv3,#main .bottom form ul li.lv2').css('backgroundColor', '#ccc');
            } else if (/[\d]/.test(value) && /[a-z]/i.test(value) && value.length >= 6 && value.length < 18) {
                $('#main .bottom form ul li.lv1,#main .bottom form ul li.lv2').css('backgroundColor', '#ffa63c');
                $('#main .bottom form ul li.lv3').css('backgroundColor', '#ccc');
            } else if (/[\d]/.test(value) && /[a-z]/i.test(value) && value.length == 18) {
                $('#main .bottom form ul li').css('backgroundColor', '#ffa63c');
            } else if(value.length==0){
                $('#main .bottom form ul li').css('backgroundColor', '#ccc');
            }
    })

    //服务条款弹窗
    center()
    $(window).resize(function () {center();})
    function center() {
        $('#dialog').css({
            left:function () {return ($(window).width()+ $(window).scrollLeft()-$(this).width())/2;},
            top:function () { return ($(window).height()+ $(window).scrollTop()-$(this).height())/2;}
        })
    }
    $('form p.ly_card a').click(function () {
        $('#dialog,#mu').show();
    })
    $('#dialog h2 a,#mu').click(function () {
        $('#dialog,#mu').hide();
    })
})