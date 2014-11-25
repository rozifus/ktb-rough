
var React       = require('react'),
    Nav         = require('./Nav.react'),
    TeamPage    = require('./TeamPage.react');

module.exports = React.createClass({

  render: function() {
    return(
      <div>
        <Nav />
        <TeamPage />
      </div>
    );
  },

});

