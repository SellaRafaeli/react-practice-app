import React from "react";
import "./App.scss";
import FriendsService from "../../services/friendsService/friendsService";
import MDSpinner from "react-md-spinner";
import Header from "../header/Header";
import Body from "../body/body";

export default class App extends React.Component {
  constructor() {
    super();

    let app = this;
    let state = {};
    app.s = app.setState;
    state = {
      inc: function(){app.s({num: app.state.num+1})},      
      setTab: (k) => {
        app.s({selectedTab: k});
      },
      selectedTab: 'new_scan',
      num: 1,
      friends: null,
      error: null
    };
    state.tabs = [{tech_id: 'new_scan', name: 'new_scan'}, {tech_id: 'foo', name: 'Foo'}, {tech_id: 'bar', name: 'Bar'}];
    state.scans = [
      {tech_id: 'foo'},
      {tech_id: 'bar'}
    ]
    
    app.toggleOverview = function() {
      app.s({showOverview: !app.state.showOverview})
    } 
    this.state = state;
    window.app = app;
  }

  componentDidMount() {
  }

  render() {

    const { friends, error } = this.state;
    const d = this.state;
    //console.log('rendering app. State: ',d)
    return (
        <div className="app">
          <Header d={d} />
          <Body d={d} />
        </div>
      );

    
    if (error) {
      return <div className="app-error"> {error} </div>;
    } else if (friends === null) {
      return (
        <div className="app-loading">
          <MDSpinner size={200} />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Header d={this.state} />
          <Body friends={friends} />
        </div>
      );
    }
  }
}
