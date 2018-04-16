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
      setTab: (k) => {app.s({selectedTab: k})},
      selectedTab: 'new_scan',
      num: 1,
      friends: null,
      error: null
    };
    state.tabs = [{id: 'new_scan', name: 'new_scan'}, {id: 'foo', name: 'Foo'}, {id: 'bar', name: 'Bar'}];
    state.screens = [
      {tech_id: '123'},
      {tech_id: '123'}
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
