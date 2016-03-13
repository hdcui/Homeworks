/**
 * @require jquery
 */

/**
 *使用单例模式改良页面代码
 */

var naviBar = { //创建顶部导航栏单例
    init: function() { //单例初始化方法
        this.render();
        this.bind()
    },
    render: function() { //创建动态效果DOM元素的JQuery对象
        var me = this;
        me.btnMore = $("#more");
        me.btnSetting = $("#setting");
        me.btnUser = $("#user");
        me.hiddenMenu = $("#hiddenmenu");
        me.setMenu = $("#setmenu");
        me.userMenu = $("#usermenu")
    },
    bind: function() { //为指定的DOM元素绑定事件
        this.showHiddenMenu();
        this.settingMenuToggle();
        this.userMenuToggle()
    },
    showHiddenMenu: function() { //侧边隐藏菜单滑出事件
        var me = this;
        me.btnMore.mouseover(function() {
            me.hiddenMenu.show();
            me.hiddenMenu.mouseover(function() {
                $(this).show();
            }).mouseout(function() {
                $(this).hide();
            });
        });
    },
    settingMenuToggle: function() { //设置菜单滑出事件
        var me = this;
        me.btnSetting.mouseover(function() {
            me.setMenu.show();
            me.setMenu.mouseover(function() {
                $(this).show();
            }).mouseout(function() {
                $(this).hide();
            })
            me.btnSetting.mouseout(function() {
                me.setMenu.hide();
            })
        });
    },
    userMenuToggle: function() { //用户中心菜单滑出事件
        var me = this;
        me.btnUser.mouseover(function() {
            me.userMenu.show();
            me.userMenu.mouseover(function() {
                $(this).show();
            }).mouseout(function() {
                $(this).hide();
            });
            me.btnUser.mouseout(function() {
                me.userMenu.hide();
            })
        });
    }
};

var myInterest = { //创建我的关注页面单例
    init: function() { //单例初始化方法
        this.render();
        this.bind()
    },
    render: function() {
        var me = this;
        me.btnUserInterest = $("#userset>a");
        me.arw = $("#userset a span");
        me.contentUserInterest = $("#userset div")
    },
    bind: function() { //为指定的DOM元素绑定事件
        this.showContent()
    },
    showContent: function() { //我的关注界面标题打开折叠事件
        var me = this;
        me.btnUserInterest.each(function(index) {
            $(this).click(function() {
                me.arw.eq(index).toggleClass("downward");
                me.contentUserInterest.eq(index).toggle();
            })
        });
    }
};

var customNavi = { //创建用户导航栏单例
    init: function() { //单例初始化方法
        this.render();
        this.bind()
    },
    render: function() { //创建动态效果DOM元素的JQuery对象
        var me = this;
        me.btnOption = $(".option");
        me.contentOption = $(".optionarea");
        me.tagSelected = $(".selectedoptions");
        me.content = $("#tags section");
        me.tagDeselected = $(".deselectedoptions");
        me.sportNews = $("#sportlist li");
        me.rightList = $(".rightpart .listboard")
    },
    bind: function() { //为指定的DOM元素绑定事件
        this.settingMenuToggle();
        this.deselectItem();
        this.selectItem();
        this.switchNews();
        this.returnFirst()
    },
    settingMenuToggle: function() { //设置菜单弹出事件
        var me = this;
        me.btnOption.click(function() {
            me.contentOption.toggle();
        });
    },
    returnFirst: function() { //回到自定义设置栏默认项目我的关注
        var me = this;
        $("#tags ul li").eq(0).click(function() {
            $("#tags ul li").removeClass("tag");
            $(this).addClass("tag");
            me.content.removeClass("realsec");
            me.content.eq(0).addClass("realsec");
        })
    },
    deselectItem: function() { //移除已选中标签
        var me = this;
        me.tagSelected.delegate(".selecteditem", "click", function() {
            var textContent = $(this).text();
            $('<span></span>').appendTo(".deselectedoptions").addClass("deselecteditem").text(textContent);
            $("#tags>ul>li").each(function(index) {
                var className = $("#tags>ul>li").eq(index).attr("class");
                if (className == textContent) {
                    $(this).remove();
                }
                if (className == textContent + " " + "tag") {
                    $(this).remove();
                    $("#tags>ul>li").eq(0).addClass("tag");
                    me.content.removeClass("realsec");
                    me.content.eq(0).addClass("realsec");
                }
            })
            $(this).remove();
        })
    },
    selectItem: function() { //增加未选中标签
        var me = this;
        me.tagDeselected.delegate(".deselecteditem", "click", function() {
            var textContent = $(this).text();
            $('<span></span>').appendTo(".selectedoptions").addClass("selecteditem").text(textContent);
            $("<li>").appendTo("#tags>ul").text(textContent).addClass(textContent).bind("click", function() {
                $("#tags .tag").removeClass("tag");
                $(this).addClass("tag");
                me.content.removeClass("realsec");
                me.content.each(function(index) {
                    var secClassName = me.content.eq(index).attr("class");
                    if (secClassName == textContent) {
                        $(this).addClass("realsec");
                    }
                })
            });
            $(this).remove();
        })
    },
    switchNews: function() { //切换体育赛事关注
        var me = this;
        me.sportNews.each(function(index) {
            $(this).click(function() {
                me.sportNews.removeClass("chosenitem");
                $(this).addClass("chosenitem");
                me.rightList.removeClass("showlist");
                me.rightList.eq(index).addClass("showlist");
            })
        })
    }
}

var utility = { //创建页面功能组件单例
    init: function() { //单例初始化方法
        this.render();
        this.bind()
    },
    render: function() { //创建动态效果DOM元素的JQuery对象
        var me = this;
        me.document = $(document);
        me.icon = $("#returntop")
    },
    bind: function() { //为指定的DOM元素绑定事件
        this.returnTop()
    },
    returnTop: function(argument) { //鼠标滚动显示回到顶部图标
        var me = this;
        me.document.on("scroll", function() {
            var scrollHeight = me.document.scrollTop();
            if (scrollHeight >= 50) {
                me.icon.show().mouseover(function() {
                    $(this).text("返回顶部");
                    $(this).css({
                        "background-color": "rgba(0,0,0,.75)"
                    }).mouseout(function() {
                        $(this).text("");
                        $(this).css({
                            "background-color": "",
                        })
                    })
                });
            } else {
                me.icon.hide();
            }
        })
    }
}

var indexInit = (function() {
    naviBar.init();
    myInterest.init();
    customNavi.init();
    utility.init()
})()
