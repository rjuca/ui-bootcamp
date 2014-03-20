define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
    var LoginView = Backbone.View.extend( {
        template: _.template( "<form role='form'><div class='form-group'><label for='emailInput'>Email address</label><input type='email' class='form-control' id='emailInput' placeholder='Enter email' required/></div><div class='form-group'><label for='pwInput'>Password</label><input type='password' class='form-control' id='pwInput' placeholder='Password' required/>  </div></div>  <button type='submit' class='btn btn-primary'>Submit</button></form>" ),
        events: {
            submit: 'submit'
        },
        render: function () {
            $(this.el).html( this.template() );
            $('#content').html(this.el);
        },
        submit: function (e) {
            var emailValue = $( '#emailInput' ).val(),
                pwValue = $( '#pwInput' ).val();

            e.preventDefault();

            this.save( emailValue, pwValue );
            this.hide();
            Backbone.history.navigate('/quizz', { trigger: true });
        },
        save: function ( emailValue, pwValue ) {
            this.model.set( {
                'username': emailValue,
                'password': pwValue
            } );
            /*this.model.save(null, {
                success: function (model, response) {
                    console.log("success");
                },
                error: function (model, response) {
                    console.log("error");
                }
            });*/
        },
        hide: function () {
            $( this.el ).hide();
        }
    } );

    return LoginView;    
});

