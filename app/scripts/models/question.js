define(['backbone'], function(Backbone) {
	
	var QuestionModel = Backbone.Model.extend( {
	    initialize: function () {
	        console.log( "Initializing Quizz model" );
	    }
	} );

	return QuestionModel;
});
