define(['backbone', 'models/question'], function(Backbone, QuestionModel) {

  var QuestionCollection = Backbone.Collection.extend( {
      url: '/scripts/config/questions-data.json',
      model: QuestionModel,

      initialize: function () {
          console.log( "Init Collection" );
      }
  });

  return QuestionCollection;
});


