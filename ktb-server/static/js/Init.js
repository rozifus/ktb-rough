

var React = require('react'),
    App   = require('./App.react');

console.log(document.getElementById('react-app'));

React.render(
  <App/>,
  document.getElementById('react-app')
);


