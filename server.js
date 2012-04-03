// モジュールの読み込み
var express = require('express');
var ejs = require('ejs');
// サーバを作成
var app = express.createServer();

// bodyDecoder を指定しないと express が POST パラメータを処理してくれない
app.use(express.bodyParser());

// app.render('*.ejs') は ejs テンプレートエンジンで処理させる
app.register('.ejs', ejs);

//'/' のリクエストハンドラ
app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.post('/', function(req, res) {
  // req.body に POST パラメータがセットされるので
  // そのままテンプレートに渡す
  res.render('result.ejs', {
    locals: { message: req.body.url }
  });
});
app.listen(8888, 'localhost');
