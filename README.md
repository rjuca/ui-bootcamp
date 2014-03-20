Quiz app
========

Challenge application for UI Bootcamp at Avenue Code, exercising Backbone.js and RequireJS.

Run
===

1. npm install
1. bower install
1. grunt build
1. grunt server (development mode)
1. grunt server:dist (production mode)

Refactor to Design Patterns for Large-Scale JS
======================================================

1. Use your quiz app or fork this repo into your own GitHub account.
1. Create a new Collection for getting the **Top Five Users** from your persistence / local storage, showing their user names, emails and scores in an array of objects like above. Expose it in the Façade.

    ```javascript
    [
      {
        name: 'Yoda',
        email: 'yoda@disney.com',
        score: 100
      },
      {
        name: 'Darth Maul',
        email: 'dmaul@disney.com',
        score: 60
      },
      {
        name: 'Palpatine',
        email: 'palpatine@disney.com',
        score: 40
      },
      {
        name: 'Han Solo',
        email: 'hsolo@disney.com',
        score: 40
      },
      {
        name: 'Jabba The Hut',
        email: 'jhut@disney.com',
        score: 20
      }
    ]
    ```

1. Create a Sidebar view that will show the Top Five Users (name, email and score) in a sidebar which will always be visible on every page.
1. Create a Mediator (a.k.a. Pub/Sub) to control the communication flow for the following scenario:
  1. Every time a user is created or updated, this Sidebar view must be updated.
  1. The Sidebar view and the models/collections that manipulate User creation/update must not know about each other.
  1. Which means you should use the Mediator to re-render the Sidebar view after a User create/update on your model/collection. You need to setup some channel, publisher and subscriber to make that happen.
  1. Remember the way the Mediator works, the Modules MUST NOT contain any reference to the Mediator. It should be the other way around.
1. Create an Observer (a.k.a. Custom Event) to control the communication flow for the following scenario:
  1. Create a 'clearAll' function on the User model/collection module to delete all the users from the persistence / local storage.
  1. Create a 'clear all' button on this sidebar to call this module.
  1. This button should invoke the Module's function via events. You need to setup some event, listener and publisher to make that happen.
  1. Differently from the Mediator, the Subject CAN fire the Observers directly.
1. Send me your solution in a GitHub repo.
