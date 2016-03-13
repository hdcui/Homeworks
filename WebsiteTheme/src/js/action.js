var redEle = document.getElementById('themered');
var grnEle = document.getElementById('themegreen');
var bluEle = document.getElementById('themeblue');
var ylwEle = document.getElementById('themeyellow');
var pplEle = document.getElementById('themepurple');
var bgColor = document.getElementsByClassName('bgcolor');
var bdColor = document.getElementsByClassName('bordercolor');
var txtColor = document.getElementsByClassName('textcolor');
var option = 0; //定义颜色对应的选项
var colorArr = ['#960D0D', '#2A7F06', '#002DAF', '#C38508', '#730B73']; //主题颜色组成的数组


function setTheme() { //设置主题颜色
    for (var i = 0; i < bgColor.length; i++) {
        bgColor[i].style.backgroundColor = colorArr[option];//背景颜色修改
    }
    for (var j = 0; j < bdColor.length; j++) {
        bdColor[j].style.borderColor = colorArr[option];//边框颜色修改
    }
    for (var k = 0; k < txtColor.length; k++) {
        txtColor[k].style.color = colorArr[option];//文本颜色修改
    }
}

function defautTheme() { //调用localstorage中储存的设定
    option = localStorage.getItem('selection');
    setTheme();
}

defautTheme(); //执行储存的主题设定

redEle.onclick = function() { //红色主题
    option = 0;
    localStorage.setItem('selection', 0);
    setTheme();
}


grnEle.onclick = function() { //绿色主题
    option = 1;
    localStorage.setItem('selection', 1);
    setTheme();
}

bluEle.onclick = function() { //蓝色主题
    option = 2;
    localStorage.setItem('selection', 2);
    setTheme();
}

ylwEle.onclick = function() { //黄色主题
    option = 3;
    localStorage.setItem('selection', 3);
    setTheme();
}

pplEle.onclick = function() { //紫色主题
    option = 4;
    localStorage.setItem('selection', 4);
    setTheme();
}
