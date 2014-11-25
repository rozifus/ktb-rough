
var React  = require('react/addons');

var SubmitButton = React.createClass({

  render: function() {

    var cx = React.addons.classSet;
    var classButton = "ui submit button " + (this.props.color || "");
    var value = this.props.value || "Submit";

    return(
      <div className={classButton}>
        {value}
      </div>
    );
  },

});

module.exports = SubmitButton;

