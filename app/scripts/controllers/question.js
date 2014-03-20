define(['models/question', 'collections/questions', 'views/questions'], function (QuestionModel, QuestionCollection, QuestionView) {

  'use strict';

  var QuestionController = {
    action: function(id) {
      var questionCollection, questionModel, questionView;

      questionCollection = new QuestionCollection();

      questionCollection.fetch({
         success: function(questionCollection, response, options) {
          questionView = new QuestionView({ collection: questionCollection });

          return questionView;
         }
      });
    }
  };

  return QuestionController;
});
