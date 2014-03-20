define(['models/user', 'views/login'], function (UserModel, LoginView) {
  'use strict';

  var WelcomeController = {
    action: function() {
      var userModel, loginView;

      userModel = new UserModel();

      loginView = new LoginView({
        model: userModel
      });

      return loginView;
    }
  };

  return WelcomeController;
});
