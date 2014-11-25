
var React = require('react');

module.exports = React.createClass({

  render: function() {

    return(
      <div className="ui inverted page grid segment">
        <div className="column">
          <div className="ui inverted secondary menu">
            <div className="ui item">
              Kiva Team Bootstrapper
            </div>
            <div className="ui item">
              <div className="ui inverted menu">
                <a className="item" href="/">Home</a>
                <a className="item">Teams</a>
                <a className="item">Users</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

});
