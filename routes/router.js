Router.configure({
  layoutTemplate: 'AppWrapper'
});

Router.route('/', function () {
  this.render('Home');
});