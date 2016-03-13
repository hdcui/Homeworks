$("#headsearch").focus(function() { // 主搜索框获取焦点、失去焦点事件
    $(".searchbox a").hide();
    $(this).css("outline", "none");
    $(".searchbtn").css({
        "background-color": "#4BB23D",
        "border": "1px solid #4BB23D"
    });
    $(".searchicon").attr({
        src: "./images/mobile2.fw1.png"
    })
}).blur(function() {
    $(".searchbox a").show();
    $(".searchbtn").css({
        "background-color": "",
        "border": "1px solid #999"
    });
    $(".searchicon").attr({
        src: "./images/mobile2.fw.png"
    })
})

$(".searchbtn").mouseenter(function() { //搜索按钮鼠标滑过事件
    $(".searchicon").attr({
        src: "./images/mobile2.fw1.png"
    })
}).mouseleave(function() {
    $(".searchicon").attr({
        src: "./images/mobile2.fw.png"
    })
})

$("#msgpop").click(function() { //消息中心点击事件
    $("#messages").toggle();
})

$("#userpop").mouseover(function() { //用户个人信息鼠标滑过事件
    $(".arw1").css({
        "transform": "rotateZ(315deg)"
    });
    $("#usercenter").show();
}).mouseout(function() {
    $(".arw1").css({
        "transform": "rotateZ(135deg)"
    });
    $("#usercenter").hide();
})

$("#usercenter").mouseover(function() {
    $(".arw1").css({
        "transform": "rotateZ(315deg)"
    });
    $("#usercenter").show();
}).mouseout(function() {
    $(".arw1").css({
        "transform": "rotateZ(135deg)"
    });
    $("#usercenter").hide();
})


$("#left-part1").mouseover(function() { //主内容第一部分左侧菜单栏鼠标滑过展开
    $(this).removeClass("over");
    $("#left-part1 li").each(function(index) {
        $(this).mouseover(function() {
            $("#left-part1 .effect1 .arw").removeClass("hide");
            $("#left-part1 .effect1").removeClass("effect1");
            $(this).addClass("effect1");
            $("#left-part1 .effect1 .arw").addClass("hide");
            $("#left-part1>div").eq(index).show().mouseenter(function() {
                $("#left-part1 li").eq(index).addClass("effect1");
                $("#left-part1 .effect1 .arw").addClass("hide");
                $(this).show();
            }).mouseleave(function() {
                $(".hiddenmenu").hide();
                $("#left-part1 li").removeClass("effect1");
                $("#left-part1 li .arw").removeClass("hide");
            });
        }).mouseleave(function() {
            $(".hiddenmenu").hide();
            $("#left-part1 li").removeClass("effect1");
            $("#left-part1 li .arw").removeClass("hide");
        })
    })
}).mouseleave(function() {
    $(this).addClass("over");
})

$(".swiper-container1").swiper({ //主内容第一部分右侧图片轮播
    autoplay: 3000,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
})


$(".swiper-container1").mouseover(function() {
    $(".btnpair1").show();
}).mouseout(function() {
    $(".btnpair1").hide();
})

$(".swiper-pagination").mouseenter(function() {
    $(".swiper-btn").show();
})

$(".part2 ul li").each(function(index) { //主内容第二部分视频列表鼠标滑过显示详细视频信息
    $(this).mouseenter(function() {
        $(".part2 ul .effect2").removeClass("effect2");
        $(this).addClass("effect2");
        $(".part2 ul  span").removeClass("arw5");
        $(".part2 ul li span").eq(index).addClass("arw5");
        $(".part2>div").removeClass("video");
        $(".part2>div").eq(index).addClass("video");
    })

})

$(".part2>div>div").each(function(index) {
    $(this).mouseenter(function() {
        $(this).addClass("selected");
        $(this).children("a").children(".topcover").fadeIn();
        $(".selected .videoinfo").slideDown("fast");
        $(".selected .videocata").slideDown("fast");
    }).mouseleave(function() {
        $(this).children("a").children(".topcover").fadeOut();
        $(".selected .videocata").slideUp("fast");
        $(".selected .videoinfo").slideUp("fast");
        $(".video div").removeClass("selected");
    })
})


$(".part3>a").each(function(index) { //主内容第三部分职业路径图鼠标滑过改变元素样式
    $(this).mouseover(function() {
        $(this).css({
            'border': '1px solid #4BB23D',
            'z-index': '100',
        });
        $(".part3>a>button").eq(index).css({
            'background-color': ' #4BB23D',
            'color': '#fff',
        })
    }).mouseout(function() {
        $(this).css({
            'border': '1px solid #E4E4E4',
            'z-index': '5',
        });
        $(".part3>a>button").eq(index).css({
            'background-color': ' #fff',
            'color': '#4BB23D',
        })
    })
})

$("#lessons li").each(function(index) { //主内容第四部分知识体系图鼠标滑过旋转内容框
    $(this).mouseenter(function() {
        $(this).children(".list").css({
            "transform": "rotateY(180deg)",
        });
    }).mouseleave(function() {
        $(this).children(".list").css({
            "transform": "rotateY(0deg)",
        });
    })
})

$(".part5-item").each(function() { //主内容第五部分精品课程鼠标滑过显示课程信息
    $(this).mouseover(function() {
        $(this).css({
            "border": "1px solid #4BB23D",
        });
        $(this).children(".part5-detail").show();
    }).mouseout(function() {
        $(this).css({
            "border": "1px solid #eee",
        });
        $(this).children(".part5-detail").hide();
    })
})

$(".part6 div").each(function() { //主内容第六部分Wiki鼠标滑过改变封面翻页
    $(this).children("div").mouseover(function() {
        $(this).children("div").children("img").css({
            "transform": "rotateY(20deg)",
        })
    }).mouseout(function() {
        $(this).children("div").children("img").css({
            "transform": "rotateY(0deg)",
        })
    })
})


$(".swiper-container2").swiper({ //合作公司展示
    prevButton: '.swiper-button-prev1',
    nextButton: '.swiper-button-next1',
    slidesPerView: 6,
    loop: true,
    loopedSlides: 6,
})

$(".swiper-container2").mouseover(function() {
    $(".btnpair2").show();
}).mouseout(function() {
    $(".btnpair2").hide();
})

$(".swiper-container3").swiper({ //合作院校展示
    prevButton: '.swiper-button-prev2',
    nextButton: '.swiper-button-next2',
    slidesPerView: 7,
    loop: true,
    loopedSlides: 7,
})

$(".swiper-container3").mouseover(function() {
    $(".btnpair3").show();
}).mouseout(function() {
    $(".btnpair3").hide();
})

$(".swiper-container4").swiper({ //报道媒体展示
    prevButton: '.swiper-button-prev3',
    nextButton: '.swiper-button-next3',
    slidesPerView: 6,
    loop: true,
    loopedSlides: 6,
})

$(".swiper-container4").mouseover(function() {
    $(".btnpair4").show();
}).mouseout(function() {
    $(".btnpair4").hide();
})


$(window).scroll(function() { //鼠标滚动显示回到顶部按钮
    var dynHeight = $(document).scrollTop();
    if (dynHeight >= 100) {
        $("#returntop").css({
            "visibility": "visible",
        })
    } else {
        $("#returntop").css({
            "visibility": "hidden",
        })
    }
})

$("#app").mouseover(function() { //显示二维码
    $("#download").fadeIn();
}).mouseleave(function() {
    $("#download").fadeOut();
})

$("#contactus").mouseover(function() { //显示上班时段
    $("#servicetime").fadeIn();
}).mouseout(function() {
    $("#servicetime").fadeOut();
})

$(".close").click(function() { //关闭广告
    $(this).parent().hide();
})
