var React = require('react');
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var ViewLearn = React.createClass({
  displayName: 'ViewLearn',
  //---------------------------------------------------
  // React Lifecycle/Defaults
  //--
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      title: 'biggest'
      switcher: false,
    };
  },

  // getDefaultProps: function() {
  //   return {

  //   };
  // },

  // componentWillMount: function() {
  // },

  componentDidMount: function() {
    this.setState({
      switcher: setInterval(this.biggestBoss.bind(this), 500);
    });
  },

  // componentWillUnmount: function() {

  // },
  //---------------------------------------------------
  // Render Functions
  //--
  render: function() {
    return (
      <div className="view view-learn">
        <div className="view--content">
          <h2 className="view--title">{this.state.title}</h2>

          <img
            className="view--boss"
            src="/assets/out/img/boss.jpg"
            alt="Biggest Boss"
            title="Biggest Boss"
          />
        </div>
      </div>
    );
  },
  //---------------------------------------------------
  // Consumer-defined functions
  //--
  biggestBoss: function () {
    if (this.state.title === 'biggest') {
      this.setState({
        title: 'boss'
      });
    }
    else {
      this.setState({
        title: 'biggest'
      });
    }
  },
});
module.exports = ViewLearn;
