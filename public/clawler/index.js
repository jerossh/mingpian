var http = require('http');
var cheerio = require('cheerio');
var Promise = require('bluebird');
// var baseurl = 'http://www.imooc.com/learn/'
// var VideoIds = [637, 348, 259, 197, 134, 75]

// 爬取针对的内容
exports.toObject =function filterChpters(html) {
  // 引用方式
  var $ = cheerio.load(html);
  // var chapters = $('.chapter')
  // var title = $('.course-infos h2').text()
  // var number = parseInt($($('.static-item')[2]).find('strong').text(), 10)
  var content = $('.rich_media_content');
  console.log(content);

  // courseData = {
  //   title: title
  // }
  var radomNum = Math.r;
  var article = {
    // title: title,
    content: content,
    pv: '1000000+'
  }
  return  article
}

// 新建promise，爬虫过程
exports.fetchHTML = function getPagesAsync(url) {
 return new Promise(function(resolve,reject) {
   console.log('正在爬取' + url)

   http.get(url, function(res) {
     var html = ''
     res.on('data', function(data) {
       html += data
     })
     res.on('end', function() {
       resolve(html)    //html 传递下去
     })
   }).on('error', function(e) {
     reject(e)    //返回错误信息
     console.log('获取数据失败')
   })
 })
}
