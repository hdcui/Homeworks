var resultBoxEle = document.result.inputarea

function analysis() {
    var str = String(resultBoxEle.value); //将输入内容转换为字符串
    var arr = str.split(""); //将字符串转换为数组
    var count = 0; //每个字符的出现的次数统计
    var newArr = []; //存放每个字符出现次数的数组
    var char = ""; //定义出现次数最多的字符
    var time = 0; //定义出现次数
    var index = []; //存放出现次数最多字符的地址数组

    function create() { //生成存放每个字符出现次数的数组
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }
            temp.push(count);
            count = 0;
        }
        return temp;
    }

    newArr = create(); //生成的数组

    function compare() { //将出现次数的最大值取出
        var m = newArr[0];
        for (var n = 0; n < newArr.length; n++) {
            if (newArr[n] > m) {
                m = newArr[n];
            }
        }
        return m;
    }

    time = compare(); //得到最大的出现次数

    for (var i = 0; i < newArr.length; i++) { //获取出现最多次的字符地址数组
        if (newArr[i] == compare()) {
            index.push(i);
        }
    }
    var x = index[0];
    char = arr[x]; //通过地址获得字符

    alert("出现次数最多的字符是：" + char + "，" + "出现次数为：" + time + "，" + "出现位置在：" + index + "。");
}
