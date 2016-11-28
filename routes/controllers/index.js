const _ = require('lodash');
const http = require('http')
const cheerio = require('cheerio')
const promise = require('bluebird')


exports.new = function(req, res) {
  console.log('感谢使用Jon_shen 提供的 express 初始化系统');
  res.render('index', {
    title: 'Jon的项目',

  })
}


exports.getArticle = function(req, res) {
  var article = req.body.article
  console.log(article);
  res.render('index', {
    title: '你成功了',


  })
}
