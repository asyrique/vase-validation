Router.configure({
  layoutTemplate: 'AppWrapper'
});

// Router.route('/profile', function () {
//   this.render('Profile');
// });

// Router.route('/survey', function () {
//   this.render('Survey');
// });
if (Meteor.isServer) {
  Router.map(function() {
    this.route('serverRoute', {
      path: '/',
      where: 'server',
      action: function() {
        var contents = Assets.getText('index.html');
        this.response.end(contents);
      }
    });

    this.route('serverRoute1', {
        path: '/vaser',
        where: 'server',
        action: function() {
            var contents = Assets.getText('vaser.html');
            this.response.end(contents);
        }
    });

    this.route('serverRoute2', {
        path: '/pricing',
        where: 'server',
        action: function() {
            var contents = Assets.getText('pricing.html');
            this.response.end(contents);
        }
    });

  });
}

Router.map(function(){
    this.route('Profile', {
        path: "/profile",
        onBeforeAction: function() {
            $('body').addClass('profile');
            this.next();
        },

        onStop: function() {
            $('body').removeClass('profile');
            //this.next();
        }

    });

    this.route('Survey', {
        path: "/survey",
        onBeforeAction: function() {
            $('body').addClass('survey');
            this.next();
        },

        onStop: function() {
            $('body').removeClass('survey');
            //this.next();
        },
    });

    this.route('Reward', {
        path: "/done",
        onBeforeAction: function() {
            $('body').addClass('reward');
            this.next();
        },

        onStop: function() {
            $('body').removeClass('reward');
            //this.next();
        },
    });
});