
var app = app || {};

(function () {
  'use strict';

  app.Actions = {
    addTeam: function(data) {
      app.Dispatcher.handleAction({
        actionType: app.Actions.ADD_TEAM
        data: data
      })
    }

})();
