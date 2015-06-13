Accounts.onCreateUser(function (options, user) {
    user.profile = {
        name: "",
        gender: "",
        birthdate: "",
        industry: "",
        occupation: "",
        education: "",
        location: "",
        religion: "",
        income: "",
        language: [],
        interests: [],
        online: 0,
        skype: 0,
        meet: 0,
        surveys: []
    };
    if (user.services.facebook !== undefined) {
        user.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile.name = user.services.facebook.first_name + " " + user.services.facebook.last_name;
        user.username = user.services.facebook.first_name.toLowerCase() + "";
        if (user.email === undefined){
            user.email = [];
            user.email = [{address: user.services.facebook.email, verified:false}];
            console.log("Here");
        }
        else{
            user.email.push({address: user.services.facebook.email, verified:false});
        }
    }
    if (user.services.twitter !== undefined) {
        user.profile.picture = user.services.twitter.profile_image_url;
    }
    if (user.services.linkedin !== undefined) {
        user.profile.picture = user.services.linkedin.pictureUrl;
        user.profile.name = user.services.linkedin.firstName + " " + user.services.linkedin.lastName;
        user.username = user.services.linkedin.firstName.toLowerCase();
        if (user.email === undefined){
            user.email = [];
            user.email = [{address: user.services.linkedin.email, verified:false}];
        }
        else{
            user.email.push({address: user.services.linkedin.email, verified:false});
        }
    }
    return user;
});