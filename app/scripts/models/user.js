define(['backbone'], function(Backbone) {
	var UserModel = Backbone.Model.extend( {
	    url: '/',
	    defaults: {
	        username: 'default',
	        password: 'password'
	    },
	    initialize: function () {
	        console.log( 'Initializing Login model' );
	    }
	} );

	return UserModel;
});

