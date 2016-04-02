var React       = require('react');
var ReactRouter = require("react-router");

var Router     = ReactRouter.Router;
var Route      = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

var App = require('./routes/app.jsx');

// General template components
var ViewBoss  = require('./routes/view-boss.jsx');

var GaggleRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ViewBoss} />
    </Route>
  </Router>
);

module.exports = GaggleRoutes;
