Template.Profile.helpers({
    name: function(){
        return Meteor.user().profile.name;
    },
    birthdate: function(){
        return Meteor.user().profile.birthdate;
    },
    gender: function(){
        return Meteor.user().profile.gender;
    },
    industry: function(){
        return Meteor.user().profile.industry;
    },
    occupation: function(){
        return Meteor.user().profile.occupation;
    },
    education: function(){
        return Meteor.user().profile.education;
    },
    location: function(){
        return Meteor.user().profile.location;
    },
    religion: function(){
        return Meteor.user().profile.religion;
    },
    income: function(){
        return Meteor.user().profile.income;
    },
    languages: function(){
        return Meteor.user().profile.languages;
    },
    interests: function(){
        return Meteor.user().profile.interests;
    },
});

Template.Profile.events({
    'keyup #name': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.name': $("#name").val()}} );
    },
    'keyup #birthdate': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.birthdate': $("#birthdate").val()}} );
    },
    'keyup #gender': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.gender': $("#gender").val()}} );
    },
    'keyup #industry': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.industry': $("#industry").val()}} );
    },
    'keyup #occupation': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.occupation': $("#occupation").val()}} );
    },
    'keyup #education': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.education': $("#education").val()}} );
    },
    'keyup #location': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.location': $("#location").val()}} );
    },
    'keyup #religion': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.religion': $("#religion").val()}} );
    },
    'keyup #income': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.income': $("#income").val()}} );
    },
    'keyup #languages': function(){
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.languages': $("#languages").val()}} );
    },
    'keyup #interests': function(){
        console.log("Yo!");
        Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.interests': $("#interests").val()}} );
    },
});

Template.Profile.onRendered( function(){
    this.$("#interests").selectize({
        persist: false,
        createOnBlur: true,
        create: true,
        onChange: function(){
            $("#interests").keyup();
        }
    });
    this.$("#languages").selectize({
        persist: false,
        createOnBlur: true,
        create: true,
        onChange: function(){
            $("#languages").keyup();
        }
    });

});