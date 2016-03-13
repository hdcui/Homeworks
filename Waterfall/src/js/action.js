$(window).load(function() { //页面加载时运行imgLayout()方法
    imgLayout();
    var dynImg = {
        "data0": [{
            "src": "./src/img/1.jpg"
        }, {
            "src": "./src/img/2.jpg"
        }, {
            "src": "./src/img/3.jpg"
        }, {
            "src": "./src/img/4.jpg"
        }, {
            "src": "./src/img/5.jpg"
        }],
        "data1": [{
            "src": "./src/img/6.jpg"
        }, {
            "src": "./src/img/7.jpg"
        }, {
            "src": "./src/img/8.jpg"
        }, {
            "src": "./src/img/9.jpg"
        }, {
            "src": "./src/img/10.jpg"
        }],
        "data2": [{
            "src": "./src/img/11.jpg"
        }, {
            "src": "./src/img/12.jpg"
        }, {
            "src": "./src/img/13.jpg"
        }, {
            "src": "./src/img/14.jpg"
        }, {
            "src": "./src/img/15.jpg"
        }]
    };
    var status = 0; //定义JSON对象的key对应的状态
    $(window).scroll(function() { //鼠标滚动到一定位置自动加载图片的方法
        if (scrollSlide()) {
            if (status < 3) { //判断取到的key的位置，分批加载
                $.each(dynImg["data" + status], function(index, value) { //遍历JSON对象下每个key对应的数组，并新增一个image box
                    var imgBox = $("<div>").addClass("imgbox").appendTo($(".waterfall"));
                    var imgContainer = $("<div>").addClass("imgcontainer").appendTo(imgBox);
                    var imgTag = $("<div>").addClass("imgtag").appendTo(imgBox);
                    var nameWrapper = $('<p><a href="#">name</a></p>').appendTo(imgTag);
                    var tagWrapper = $('<p><span>标签：</span><a class="tag" href="#">标签一</a><a class="tag" href="#">标签二</a></p>').appendTo(imgTag);
                    $("<img>").attr("src", $(value).attr("src")).appendTo(imgContainer);
                    imgLayout();
                })
                status++;
            } else { //如果取到的状态溢出，则重新开始
                status = 0;
            }
        }
    })
});


function scrollSlide() { //判断方法
    var lastBox = $(".imgbox").last()[0]; //获取imgbox的JQ对象
    var lastBoxLocation = $(lastBox).offset().top + $(lastBox).outerHeight() / 3; //获取最后一个图片元素距顶端的距离
    var scrollHeight = $(window).scrollTop(); //鼠标滚动距离
    return (lastBoxLocation < $(window).height() + scrollHeight) ? true : false;
}


function imgLayout() {
    var box = $(".imgbox"); //获取imgbox的JQ对象
    var containerWidth = $(".waterfall").innerWidth(); //获取图像摆放区的宽度
    var boxWidth = box.outerWidth(true); //获取每个图像占据的宽度(包含容器和margin)
    var numPerRow = Math.floor(containerWidth / boxWidth); //每行可以放置的图像数量
    var boxHeightArr = []; //定义数组用来承载每列的图像高度
    var padding = Math.floor(containerWidth - boxWidth * numPerRow) / 2; //获取图片放置区多余的空间
    $(".waterfall").css({ //设置padding使图片居中
        "padding-left": padding,
    });
    box.each(function(index, domEle) { //遍历所有imgbox，同时得到index及DOM元素
        var boxHeight = box.eq(index).outerHeight(true); //获取每个图像占据的高度(包含容器和margin)
        if (index < numPerRow) {
            boxHeightArr[index] = boxHeight; //将每列的图像高度传入数组
        } else {
            var minBox = Math.min.apply(null, boxHeightArr); //获取最小的图像列高
            var minBoxIndex = $.inArray(minBox, boxHeightArr); //最小图像列高对应的索引值
            var offsetLeft = box.eq(minBoxIndex).position().left; //获取最小列高距容器的左边距
            $(domEle).css({ //对需要摆放的图片容器定位
                "position": "absolute",
                "top": minBox,
                "left": offsetLeft,
            });
            boxHeightArr[minBoxIndex] = boxHeightArr[minBoxIndex] + box.eq(index).outerHeight(true); //重新写入最小图像列的高度
        }
    })
}
