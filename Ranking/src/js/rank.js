
//分数排名函数
function rank(score) {
    var score = document.ranking.inputarea.value;
    if (score == "null"&&score!=0) {//判断成绩是否为空
        return false;
    } else {
        for (var i = 0; i <= 9; i++) {
            if (score >= i * 10 && score < (i + 1) * 10) {//判断有效成绩的等级
                return (10 - i);
            }
            if (score == 100) {//判断成绩是否为100分
                return 1;
            }
        }
    }
    return false;//设定无效字符的返回值
}


//排名输出函数
function print() {
    var a = rank();
    if (a == false) {
        alert("请输入有效成绩！");
    } else {
        alert("该学生成绩为" + a + "等生");
    }
}
