
var React       = require('react'),
    AddTeamForm = require('./AddTeamForm.react')

var TeamPage = React.createClass({

  render: function() {
    return(
      <div className="ui page grid">
        <div className="row">
          <div className="column">
            &nbsp;
            <AddTeamForm />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = TeamPage

