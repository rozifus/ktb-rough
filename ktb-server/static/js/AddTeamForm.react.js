
var rsui = require('react-semantic-ui'),
    Form      = rsui.form.Form,
    Button    = rsui.form.Button,
    TextInput = rsui.input.Text;

var AddTeamForm = React.createClass({

  postForm: function() {

  },

  render: function() {
    return(
      <Form className="inverted segment">
        <TextInput label="Kiva Team" />
        <TextInput label="Kiva User" />
        <br />
        <Button className="green" onClick={this.postForm} label="Submit" />
      </Form>
    );
  },

});

module.exports = AddTeamForm;

