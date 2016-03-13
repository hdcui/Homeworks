$(window).on('load', function() { //页面加载时的执行的方法
    $.ajax({ //创建新的ajax
        type: 'post', //请求方式
        data: { //发往服务器的数据包
            newsclass: 'tuijian', //新闻分类信息，默认展示推荐信息
        },
        url: '/server/select', //服务器名称
        success: function(data) { //连接成功后执行的方法，将会使用到从服务器传回来的数据
            $.each(data, function(index) { //遍历服务器回传的数组，并且将回传的数据通过html页面进行展现
                var newsrow = $('<tr class="currentrow"></tr>').appendTo('#tablelist');
                var newsindex = $('<td class="newsid"></td>').text(data[index].newsid).appendTo(newsrow);
                var newstitle = $('<td class="newstitle"></td>').text(data[index].newstitle).appendTo(newsrow);
                var newsimg = $('<td class="newsimg"></td>').text(data[index].newsimg).appendTo(newsrow);
                var newscontent = $('<td class="newscontent"></td>').text(data[index].newscontent).appendTo(newsrow);
                var newslink = $('<td class="newslink"></td>').text(data[index].newslink).appendTo(newsrow);
                var newsdate = $('<td class="newsdate"></td>').text(data[index].newsdate).appendTo(newsrow);
                var btnwrapper = $('<td class="btnwrapper"></td>').appendTo(newsrow);
                $('<span class="btn btn-primary btn-xs preview">预览</span>').appendTo(btnwrapper).bind('click', function() { //为动态生成的预览键绑定方法
                    var curRow = $(this).parents('.currentrow'); //获取当前按钮的祖先DOM元素(<tr>)
                    $(curRow).children('td').each(function(index, node) { //遍历tr中所有td
                        var nodeClass = $(node).attr('class'); //获取td的类名
                        $('#showcase').find('.form-control').each(function(i, ele) { //遍历展示框中所有.form-control元素
                            var showcaseClass = $(ele).attr('class'); //获取.form-control的类名
                            var regex = new RegExp(nodeClass); //新建td类名的正则表达式
                            if (regex.test(showcaseClass) && nodeClass) { //匹配td类名与.form-control的类名，如果匹配成功，则执行如下方法
                                var content = $(node).text();
                                $(ele).attr("value", content);
                            }
                        });
                    });
                    $('#update').removeClass('disabled');
                    $('#showcase .newstitle').attr('disabled', '');
                    $('#add').addClass('disabled');
                });
                $('<span class="btn btn-danger btn-xs delete">删除</span>').appendTo(btnwrapper).bind('click', function() { //为动态生成的删除键绑定方法
                    var curRow = $(this).parents('.currentrow'); //获取当前按钮的祖先DOM元素(<tr>)
                    var newsTitle = $(curRow).children('.newstitle').text(); //获取当前列中的新闻标题，用来作为删除操作的关键字
                    $.ajax({ //建立与服务器的连接
                        type: 'post',
                        data: { //发往服务器的数据包
                            newstitle: newsTitle,
                        },
                        url: '/server/delete',
                        success: function() { //连接完成后删除当前行
                            $(curRow).remove();
                        }
                    })
                });
            })
        }
    })

    $('#catalist .btn').on("click", function() { //左侧分类列表的点击事件
        $('#catalist .btn').removeClass('selected');
        $(this).addClass('selected');
        $('.currentrow').remove();
        var newsClass = $(this).attr('title'); //获取标题的title，用于数据库数据类别判定
        $.ajax({ //创建新的ajax
            type: 'post',
            data: { //发往服务器的数据包
                newsclass: newsClass,
            },
            url: '/server/select',
            success: function(data) { //连接成功后执行的方法，将会使用到从服务器传回来的数据
                $.each(data, function(index) { //遍历服务器回传的数组，并且将回传的数据通过html页面进行展现
                    var newsrow = $('<tr class="currentrow"></tr>').appendTo('#tablelist');
                    var newsindex = $('<td class="newsid"></td>').text(data[index].newsid).appendTo(newsrow);
                    var newstitle = $('<td class="newstitle"></td>').text(data[index].newstitle).appendTo(newsrow);
                    var newsimg = $('<td class="newsimg"></td>').text(data[index].newsimg).appendTo(newsrow);
                    var newscontent = $('<td class="newscontent"></td>').text(data[index].newscontent).appendTo(newsrow);
                    var newslink = $('<td class="newslink"></td>').text(data[index].newslink).appendTo(newsrow);
                    var newsdate = $('<td class="newsdate"></td>').text(data[index].newsdate).appendTo(newsrow);
                    var btnwrapper = $('<td class="btnwrapper"></td>').appendTo(newsrow);
                    $('<span class="btn btn-primary btn-xs preview">预览</span>').appendTo(btnwrapper).bind('click', function() { //为动态生成的预览键绑定方法
                        var curRow = $(this).parents('.currentrow');
                        $(curRow).children('td').each(function(index, node) {
                            var nodeClass = $(node).attr('class');
                            $('#showcase').find('.form-control').each(function(i, ele) {
                                var showcaseClass = $(ele).attr('class');
                                var regex = new RegExp(nodeClass);
                                if (regex.test(showcaseClass) && nodeClass) {
                                    var content = $(node).text();
                                    $(ele).attr("value", content);
                                }
                            });
                        })
                        $('#update').removeClass('disabled');
                        $('#showcase .newstitle').attr('disabled', '');
                        $('#add').addClass('disabled');
                    });
                    $('<span class="btn btn-danger btn-xs delete">删除</span>').appendTo(btnwrapper).bind('click', function() { //为动态生成的删除键绑定方法
                        var curRow = $(this).parents('.currentrow');
                        var newsTitle = $(curRow).children('.newstitle').text();
                        $.ajax({
                            type: 'post',
                            data: { //发往服务器的数据包
                                newstitle: newsTitle,
                            },
                            url: '/server/delete',
                            success: function() {
                                $(curRow).remove();
                            }
                        })
                    });
                })
            },
            complete: function() { //连接完成后执行的方法
                $('#newsarea').css({
                    "height": "auto",
                    "background": "none",
                });
            }
        })
    })

    $('#add').on('click', function() { //数据新增按钮点击事件
        var newstitle = $('#showcase .newstitle').val();
        var newsimg = $('#showcase .newsimg').val();
        var newscontent = $('#showcase .newscontent').val();
        var newslink = $('#showcase .newslink').val();
        var newsdate = $('#showcase .newsdate').val();
        if (newstitle == "" || newsimg == "" || newscontent == "" || newslink == "" || newsdate == "") { //判断是否有输入框为空
            alert('请输入有效信息！');
        } else {
            var newsClass = $('.selected').attr('title');
            $.ajax({
                type: 'post',
                dataType: 'json',
                data: { //发往服务器的数据包
                    newsclass: newsClass,
                    newstitle: newstitle,
                    newsimg: newsimg,
                    newscontent: newscontent,
                    newslink: newslink,
                    newsdate: newsdate
                },
                url: '/server/insert',
                success: function() {
                    alert('数据添加成功！')
                }
            });
        }
    })

    $('#update').on('click', function() { //数据更新按钮点击事件
        var newstitle = $('#showcase .newstitle').val();
        var newsimg = $('#showcase .newsimg').val();
        var newscontent = $('#showcase .newscontent').val();
        var newslink = $('#showcase .newslink').val();
        var newsdate = $('#showcase .newsdate').val();
        var newsClass = $('.selected').attr('title');
        $.ajax({
            type: 'post',
            data: { //发往服务器的数据包
                newsclass: newsClass,
                newstitle: newstitle,
                newsimg: newsimg,
                newscontent: newscontent,
                newslink: newslink,
                newsdate: newsdate
            },
            url: '/server/update',
            success: function() {
                alert('数据更新成功！')
            }
        });
    })

    $('#reset').click(function() { //重置按钮点击事件
        $('#panel .form-control').attr("value", "");
        $('#add').removeClass('disabled');
        $('#update').addClass('disabled');
        $('#showcase .newstitle').removeAttr('disabled');
    })
})
