
var React  = require('react/addons');

var TextInput = React.createClass({

  postForm: function() {

  },

  render: function() {

    var classIcon = "icon " + (this.props.icon || "write");

    return(
      <div className="ui inverted form segment">
        <div className="field">
          <label>{this.props.label}</label>
          <div className="ui left icon input">
            <input type="text" />
            <i className={classIcon}></i>
          </div>
        </div>
      </div>
    );
  },

});

module.exports = TextInput;

