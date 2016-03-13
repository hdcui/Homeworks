var status = 0; //状态指示，在输入运算符后禁止修改已输入数据
var preNum = 0; //存储第一个运算数字
var screenNum; //显示数字
var inputBoxEle = document.getElementById('realtimescreen');
var expBoxEle = document.getElementById('historyscreen');
var allBtnEle = document.getElementById('keyboard');


allBtnEle.onmousedown = function pressBtn(btn) {//鼠标按下的事件
    btn.target.style.backgroundColor = "#ffffff";
    btn.target.style.color = "#000000";
}

allBtnEle.onmouseup = function releaseBtn(btn) {//鼠标松开的事件
    btn.target.style.backgroundColor = "";
    btn.target.style.color = "";
}

allBtnEle.onclick = function pressNumBtn(num) {//数字输入
    if (isNaN(num.target.value) == false) {//判断输入值是否为数字
        var a = num.target.value;
        var screenNum = String(inputBoxEle.value);
        screenNum = (screenNum != "0") ? ((status == 0) ? screenNum : "") : "";
        if (screenNum.length <= 21) {
            screenNum = screenNum + String(a); //给当前值追加字符 
            inputBoxEle.value = screenNum;
            status = 0; //状态归0
        } else {
            alert("最多只能输入22位数字！")
        }
    }
}

document.getElementById("symbol").onclick = function symbol() { //符号输入
    var screenNum = String(inputBoxEle.value);
    if (status == 0) { //判断运算状态
        if (screenNum[0] == 0) { //判断首字符是否为0
            return 0;
        } else {
            if (screenNum[0] == '-') { //判断首字符是否为负号
                screenNum = screenNum.substr(1);
            } else {
                screenNum = '-'.concat(screenNum); //在字符串首位加上负号
            }
        }
    } else {
        return 0;
    }
    inputBoxEle.value = screenNum;
}


document.getElementById("dot").onclick = function dot() { //小数点输入
    var screenNum = String(inputBoxEle.value);
    if (status == 0) { //判断运算状态
        for (var i = 0; i <= screenNum.length; i++) {
            if (screenNum.substr(i, 1) == '.') { //判断字符串中是否有小数点
                return false;
            }
        }
        screenNum = screenNum + '.'; //在字符串末位加上小数点
    } else {
        return 0;
    }
    inputBoxEle.value = screenNum;
}

document.getElementById("clear").onclick = function clearAll() { //所有状态归零
    inputBoxEle.value = 0;
    expBoxEle.value = "";
    var status = 0;
    var preNum = 0;
    var operation = 0;
    var screenNum = 0;
    var screenNum = 0;
}

document.getElementById("backspace").onclick = function backSpace() { //退格
    var screenNum = String(inputBoxEle.value);
    if (status == 0) { //判断运算状态
        screenNum = (screenNum != "0") ? screenNum : ""; //判断字符串是否为“0”
        screenNum = screenNum.substr(0, screenNum.length - 1);
        screenNum = (screenNum != "") ? screenNum : "0"; //若字符串为空，则显示“0”
    } else {
        return 0;
    }
    inputBoxEle.value = screenNum;
}

function arithmetic() {//定义运算状态
    status = 1;
    if (expBoxEle.value.substr(0, 1) == "s") {
        expBoxEle.value = "";
    };
    if (expBoxEle.value.substr(0, 1) == "t") {
        expBoxEle.value = "";
    };
    if (expBoxEle.value.substr(0, 1) == "c") {
        expBoxEle.value = "";
    };
}

document.getElementById("plus").onclick = function plus() {//定义加法执行的操作
    arithmetic();
    expBoxEle.value = expBoxEle.value + inputBoxEle.value + "+";
}

document.getElementById("minus").onclick = function minus() {//定义减法执行的操作
    arithmetic();
    expBoxEle.value = expBoxEle.value + inputBoxEle.value + "-";
}

document.getElementById("multi").onclick = function multi() {//定义乘法执行的操作
    arithmetic();
    expBoxEle.value = expBoxEle.value + inputBoxEle.value + "*";
}

document.getElementById("divide").onclick = function divide() {//定义除法执行的操作
    arithmetic();
    expBoxEle.value = expBoxEle.value + inputBoxEle.value + "/";
}

document.getElementById("calculate").onclick = function calculate() { //计算函数
    arithmetic();
    expBoxEle.value = expBoxEle.value + inputBoxEle.value
    screenNum = eval(expBoxEle.value);
    inputBoxEle.value = screenNum;
}

document.getElementById("sin").onclick = function sin() {
    status = 1;
    preNum = Number(inputBoxEle.value);
    expBoxEle.value = "sin(" + inputBoxEle.value + ")";
    screenNum = Math.sin(preNum * (Math.PI) / 180); //定义正弦
    inputBoxEle.value = screenNum;
}

document.getElementById("cos").onclick = function cos() {
    status = 1;
    preNum = Number(inputBoxEle.value);
    expBoxEle.value = "cos(" + inputBoxEle.value + ")";
    screenNum = Math.cos(preNum * (Math.PI) / 180); //定义余弦
    inputBoxEle.value = screenNum;
}

document.getElementById("tan").onclick = function tan() {
    status = 1;
    preNum = Number(inputBoxEle.value);
    expBoxEle.value = "tan(" + inputBoxEle.value + ")";
    screenNum = Math.tan(preNum * (Math.PI) / 180); //定义正切
    inputBoxEle.value = screenNum;
}

document.getElementById("radic").onclick = function radic() {
    status = 1;
    preNum = Number(inputBoxEle.value);
    expBoxEle.value = "sqrt(" + inputBoxEle.value + ")";
    if (preNum >= 0) {
        screenNum = Math.sqrt(preNum); //定义平方根
        inputBoxEle.value = screenNum;
    } else {
        alert("负数无法取平方根！")
    }
}
