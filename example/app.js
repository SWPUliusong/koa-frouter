var koa = require('koa');
var router = require('..');

var app = koa();

app.use(router(app, {
  root: './example/routes',
  // root: require('path').join(__dirname, 'router'),
  _: true
  // '_' will be replace by '/'
}));

app.listen(3000, function () {
    console.log('Listening on 3000!');
});