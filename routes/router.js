Router.configure({
  layoutTemplate: 'AppWrapper'
});

// Router.route('/profile', function () {
//   this.render('Profile');
// });

// Router.route('/survey', function () {
//   this.render('Survey');
// });

Router.map(function(){
    this.route('Profile', {
        path: "/profile",
        onBeforeAction: function() {
            $('body').addClass('profile');
            this.next();
        },

        onStop: function() {
            $('body').removeClass('profile');
            this.next();
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
            this.next();
        },
    });
});