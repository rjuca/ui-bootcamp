define(['jquery', 'backbone', 'controllers/login', 'controllers/question'], function ($, Backbone, LoginController, QuestionController) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'quizz' : 'showQuestions',
      'results': 'showResults'
    },

    index: function() {
      console.log( "Index" );
      LoginController.action();
    },
    showQuestions: function() {
      QuestionController.action();
    },
    showResults: function() {
      this.render(resultsController.action());
    },
    render: function(view) {
      if (this.currentView) {
        this.currentView.remove();
      }
      if (view) {
        this.currentView = view;
        view.render();
      }
      else {
        this.navigate('', { trigger:true });
      }
    }

  });

  return AppRouter;
});
