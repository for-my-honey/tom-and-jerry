var arr1=['url("imgs/jr1_b_74934bc.png") no-repeat center top',
            'url("imgs/jr2_b_4e15ec8.png") no-repeat center top',
            'url("imgs/jr3_b_a549a2f.png") no-repeat center top',
            'url("imgs/jr4_b_5287e78.png") no-repeat center top',
            'url("imgs/jr5_b_5d419c6.png") no-repeat center top',
            'url("imgs/jr6_b_093e009.png") no-repeat center top',
            'url("imgs/jr7_b_ed84074.png") no-repeat center top',
            'url("imgs/jr8_b_e76df3b.png") no-repeat center top',
            'url("imgs/jr9_b_7296a9f.png") no-repeat center top'];//定义角色介绍模块中老鼠背景图数组
var arr2=['url("imgs/tom1_b_40215ec.png") no-repeat center top',
            'url("imgs/tom2_b_3811ece.png") no-repeat center top',
            'url("imgs/tom3_b_745bbba.png") no-repeat center top',
            'url("imgs/tom4_b_453532c.png") no-repeat center top',];//定义角色介绍模块中猫咪背景图数组
    // console.log(arr[0]);
$(function() {
    $(window).scroll(function(){
        var flag =true;
        if(flag) {
            if($(window).scrollTop()>=1000) {
                $('.aside-nav,.close,.open').fadeIn();
                // if(flag) {
                //     $('.open').fadeIn();
                // }
            }
            else{
                $('.aside-nav,.close,.open').fadeOut();
            }
        }
        else{

        }
    })//滚动鼠标执行动画显示侧边导航
    $('.close').click(function() {
        $('.aside-nav,.close').stop().animate({
            right:-280
        },300)
        $('.open').stop().animate({
            right:0
        },300)
        $('.open').show();
    })//收起按钮效果
    $('.open').click(function() {
        $('.open').hide();
        $('.close').stop().animate({
            right:224
        },300);
        $('.open').stop().animate({
            right:-57
        },300)
        $('.aside-nav').stop().animate({
            right:0
        },300);
    })//展开按钮效果

    $(".return-benefit").click(function() {
        $('html,body').stop().animate({
            scrollTop:$('.benefit').offset().top
        })
    })//返回公测福利
    $(".return-role").click(function() {
        $('.benefit').offset().top
        $('html,body').stop().animate({
            scrollTop:$('.role').offset().top
        })
    })//返回角色介绍
    $(".return-feature").click(function() {
        $('html,body').stop().animate({
            scrollTop:$('.game-feature').offset().top
        })
    })//返回游戏特色
    $(".return-top").click(function() {
        $('html,body').stop().animate({
            scrollTop:0
        })
    })//返回顶部
    // $('#RoleList>li').first().siblings('li').children('img').hide();
    // $('.role-introduce p').first().siblings().hide();
    $('#RoleList>li').first().css('background','url("imgs/header_bg_2b4768e.png") no-repeat center top');
    $('.list-role-mouse #RoleList>li').click(function() {
        var index=$(this).index();
        $(this).children('img').show();
        $(this).css('background','url("imgs/header_bg_2b4768e.png") no-repeat center top');
        $(this).siblings('li').children('img').hide();
        $(this).siblings('li').css('background','');
        $('.role-bg').css('background',arr1[index]);
        $('.role-introduce-mouse p').eq(index).show().siblings().hide();
    })//角色介绍中点击老鼠头像触发的变化
    $('.list-role-cat #RoleList>li').click(function() {
        var index=$(this).index();
        $(this).children('img').show();
        $(this).css('background','url("imgs/header_bg_2b4768e.png") no-repeat center top');
        $(this).siblings('li').children('img').hide();
        $(this).siblings('li').css('background','');
        $('.role-bg').css('background',arr2[index]);
        $('.role-introduce-cat p').eq(index).show().siblings().hide();
    })//角色介绍中点击猫咪头像触发的变化
    $('.btn-cat').click(function() {
        $(this).children().prop("src","imgs/catbtn_h_b0a6989.png");
        $(this).siblings('a').children().prop("src","imgs/mousebtn_4ad07e6.png");
        $(this).siblings('.list-role-mouse').hide();
        $(this).siblings('.list-role-cat').show();
    })//点击猫咪按钮切换效果
    $('.btn-mouse').click(function() {
        $(this).children().prop("src","imgs/mousebtn_h_69ca397.png");
        $(this).siblings('a').children().prop("src","imgs/catbtn_3b18dc7.png");
        $(this).siblings('.list-role-mouse').show();
        $(this).siblings('.list-role-cat').hide();
    })//点击老鼠按钮切换效果
    $('.asideclose').click(function(){
        $(this).parent().stop().animate({
            left:-1400
        },300)
        $(this).parent().hide().siblings().show();
    })
    $('.asideopen').click(function(){
        $(this).parent().hide().siblings().show();
        $(this).parent().siblings().stop().animate({
            left:0
        },300)
    })
})
