
var app = app || {};

(function () {
  'use strict';

  app.Input = React.createClass({

    render: function() {
      return(
      <div class="a-team field">
        <label>Kiva Team</label>
        <div class="ui left labeled icon input">
          <input type="text" />
          <i class="users icon"></i>
        </div>
      </div>
      );
    }

  });

})();
