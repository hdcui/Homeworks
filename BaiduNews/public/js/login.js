//处理登陆界面登陆请求的方法
$('#submit').click(function() {
    var username = $('#username').val();
    var password = $('#pwd').val();
    $.ajax({
        type: 'post',
        url: '/back/login',
        dataType: 'json',
        data: {
            username: username,
            password: password
        },
        success: function(data) {
            if (data === 'pass') {
                $.ajax({
                    type: 'get',
                    url: '/back/dashboard',
                    success: function() {
                        window.location.href = "/back/dashboard";
                    }
                })
            }
            if (data === 'fail') {
                alert('登陆失败！')
            }
        }
    })
})
