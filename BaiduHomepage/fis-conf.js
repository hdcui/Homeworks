// default settings. fis3 release

// Global start

//导出css，JS，html的依赖列表
fis.match('*.{css,js,html}', {
    useMap: true
});

//压缩js文件
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

//为index.js加MD5戳，并分配到static/js文件夹下
fis.match('index.js', {
    useHash: true,
    release: '/static/js/$0'
});

// 处理CSS文件，并将其引用的PNG整合成sprite图
fis.match('::package', {
    spriter: fis.plugin('csssprites'),
    release: '/static/$0'
})

fis.match('*.css', {
    useHash: true,
    useSprite: true,
    optimizer: fis.plugin('clean-css'),
    release: '/static/css/$0'
});

// 压缩图片
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor'),
});


fis.match('*.{jpg,png,gif,ico}', {
    useHash: true,
    release: '/static/$0',
});

// Global end

// default media is `dev`
fis.media('dev')
    .match('*', {
        useHash: false,
        useSprite: false,
        optimizer: null
    });

// extends GLOBAL config
fis.media('production');
