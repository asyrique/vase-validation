Router.configure({
  layoutTemplate: 'AppWrapper'
});

Router.route('/profile', function () {
  this.render('Profile');
});