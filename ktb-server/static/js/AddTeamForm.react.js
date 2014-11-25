
var React        = require('react'),
    TextInput    = require('./TextInput'),
    SubmitButton = require('./SubmitButton');

var AddTeamForm = React.createClass({

  postForm: function() {

  },

  render: function() {
    return(
      <div className="ui inverted form segment">
        <TextInput label="Kiva Team" icon="users"/>
        <TextInput label="Kiva User" icon="user"/>
        <br />
        <SubmitButton color="green" onClick={this.postForm}/>
      </div>
    );
  },

});

module.exports = AddTeamForm;

