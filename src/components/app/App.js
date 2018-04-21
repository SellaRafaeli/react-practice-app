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
      selectedTab: 'new_scan',
    };

    state.tabs = [{tech_id: 'foo', name: 'Foo'}, {tech_id: 'bar', name: 'Bar'}];
    state.scans = [
      {tech_id: 'foo'},
      {tech_id: 'bar'}
    ]
    state.scans = [{tech_id: 'qux', name: 'qux'}];
    state.tabs  = [];
    state.tabs.push({tech_id: 'new_scan', name: 'new_scan'})

    app.setTab = (tech_id) => {
      if (!app.state.tabs.find(t=>t.tech_id==tech_id)) app.addTab(tech_id, tech_id)
      app.s({selectedTab: tech_id});
    };

    app.addTab = (tech_id, name) => {
      var newTabs  = [...app.state.tabs, {tech_id: name, name: name}];
      console.log(newTabs)
      this.setState({tabs: newTabs});
    }

    app.submitScan = (name) => {
      app.addTab(name, name);
      var newScans = [...this.state.scans, {tech_id: name, name: name}];
      this.setState({scans: newScans, selectedTab: name})
    }

    this.state = state;
    window.app = app;
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    setTimeout(()=>{
      let scans = [
        {name: 'foo', tech_id: 'foo1'},
        {name: 'bar', tech_id: 'bar2'},
        {name: 'baz', tech_id: 'baz3'}
      ]
      app.setState({scans: scans})
    },100);
  }

  render() {
    const d = this.state;
    
    return (
        <div className="app">
          <Header d={d} />
          <Body d={d} />
        </div>
      );
  }
}
