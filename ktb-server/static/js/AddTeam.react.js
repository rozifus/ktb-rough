
var React       = require('react'),
    AddTeamForm = require('./AddTeamForm.react')

var AddTeam = React.createClass({

  render: function() {
    return(
      <AddTeamForm />
    );
  }

});

module.exports = AddTeam

