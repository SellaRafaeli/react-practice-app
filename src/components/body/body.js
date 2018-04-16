import React from "react";
import ReactDOM from "react-dom";
import "./body.scss";
import tabs from "../../data/body-data";
import Sidebar from "../sidebar/Sidebar";
import Paragraphs from "../paragraphs/Paragraphs";
import NewScan from "../new_scan/NewScan";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    window.body = this;
    this.state = {}


    // this.setSelectedTab = this.setSelectedTab.bind(this);
    // this.getRefs = this.getRefs.bind(this);
  }

  componentWillMount() {
    // this.setState({
    //   friends: this.props.friends,
    //   tabs
    // });
  }

  // setSelectedTab(id) {
  //   this.setState(
  //     {
  //       selected: id
  //     },
  //     () => this.handleScrollToElement(this.state.selected)
  //   );
  // }

  // handleScrollToElement(id) {
  //   const testNode = ReactDOM.findDOMNode(this.state.refs[id]);
  //   testNode.scrollIntoView({ behavior: "smooth" });
  // }

  // getRefs(refs) {
  //   this.setState(
  //     {
  //       refs
  //     },
  //     () => this.getRefsValue()
  //   );
  // }

  // getRefsValue() {
  //   const { refs } = this.state;
  //   return Object.values(refs);
  // }

  render() {
    console.log('rendering body')
  
    let d = this.props.d;
    let screen;

    if (d.selectedTab == 'new_scan') screen = <NewScan />
    else screen = '<h1> something else </h1>';

    return (
      <div className="body">
        <h1>Body</h1>        
        {d.selectedTab}
        {screen}    
      </div>
    );
  }
}
