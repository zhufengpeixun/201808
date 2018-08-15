/*
 * QUERY-URL-PARAMETER：解析一个URL地址中问号传参的信息
 *   QUERY：获取
 *   URL：统一资源定位符（URL地址）
 *   PARAMETER：参数（PARAMS）
 *
 * [意义]
 *   http://sports.qq.com/kbsweb/game.htm?mid=100000:1471670
 *   http://sports.qq.com/kbsweb/game.htm?mid=100000:1471669
 *  从列表页点击每一条信息跳转到详情页，详情页展示不同的信息（同一个详情页），主要就是依托URL地址中问号传递的参数部分；详情页面中我们需要获取URL问号传参的信息，根据信息不一样展示不一样的内容；
 */

/*//=>字符串拆分截取
function queryURLParams(url) {
    //=>RES用来存储最后的结果(对象)
    var res = {};

    //1.获取问号和井号的索引
    var indexASK = url.indexOf('?'),
        indexHASH = url.lastIndexOf('#');
    //如果字符串中没有“#”，我们需要从问号截取到字符串的末尾即可
    indexHASH === -1 ? indexHASH = url.length : null;

    //2.获取问号后面的内容（前提：有问号我们才截取）
    if (indexASK > -1) {
        //获取问号到井号中间的内容：'name=zxt&age=28&sex=0'
        var strASK = url.slice(indexASK + 1, indexHASH);
        //先按照&把字符串拆成多组（每组：xxx=xxx），在按照=把每组中的属性名和属性值获取到即可，获取的键值对存储到一个对象中
        var aryASK = strASK.split('&');//=>['name=zxt','age=28'...]
        aryASK.forEach(function (item, index) {
            //=>ITEM:每一次循环获取数组中的当前项 'name=zxt'/'age=28'
            //=>INDEX:每一次循环项的索引 0/1/2...
            //把当前获取的项在按照等号拆成两部分（这两部分分别是我们想要的属性名和属性值），我们把两部分信息作为对象的键值对存储即可
            var aryITEM = item.split('='),
                key = aryITEM[0],
                value = aryITEM[1];
            res[key] = value;
        });
    }

    //3.获取井号后面的值（前提：有井号我们才获取），由于事先我们在无#的情况下已经让其等于字符串的长度了，所以验证是否有，使用字符串长度验证即可
    if (indexHASH !== url.length) {
        var strHASH = url.slice(indexHASH + 1);
        res['HASH'] = strHASH;
    }
    return res;
}*/

/*
 * 利用A标签完成一些信息的获取
 *   1.我们把要解析的URL地址当做A标签的HREF
 *   2.获取到的A元素对象中有一些内置的属性存储了我们需要的信息
 *     hash:'#xxx'  存储#后面的哈希值
 *     search:'?xxx=xxx&...'  存储问号传参的信息（没有问号结果是空字符串）
 *     ...
 */
/*function queryURLParams(url) {
    var res = {};
    //1.创建一个A标签（A元素对象），把需要解析的URL赋值给它的HREF，利用元素对象的一些属性获取到问号和井号后面的信息
    var oLink = document.createElement('a');
    oLink.href = url;
    var strASK = oLink.search,
        strHASH = oLink.hash;

    //2.分别根据获取的字符串解析出对应的结果
    if (strASK.length > 0) {
        //我们这一次直接按照&和=一次都把信息拆开：["name", "zxt", "age", "28", "sex", "0"]，接下里遍历数组（隔一项遍历一次），获取属性名和属性值即可
        var aryASK = strASK.slice(1).split(/(?:&|=)/g);
        for (var i = 0; i < aryASK.length; i += 2) {
            var key = aryASK[i],
                value = aryASK[i + 1];
            res[key] = value;
        }
    }
    strHASH.length > 0 ? res['HASH'] = strHASH.slice(1) : null;
    return res;
}*/


//=>基于正则处理
/*function queryURLParams(url) {
    var res = {},
        reg = /([^?&=#]+)=([^?&=#]+)/g;
    url.replace(reg, function (item, key, value) {
        res[key] = value;
    });
    url.replace(/#([^?&=#]+)$/, function (item, value) {
        res['HASH'] = value;
    });
    return res;
}*/
function queryURLParams(url) {
    let res = {};
    url.replace(/([^?&=#]+)=([^?&=#]+)/g, (item, key, value) => res[key] = value).replace(/#([^?&=#]+)$/, (item, value) => res['HASH'] = value);
    return res;
}

var str = 'http://www.zhufengpeixun.com/stu/?name=zxt&age=28&sex=0#teacher';
var result = queryURLParams(str);
console.log(result);











