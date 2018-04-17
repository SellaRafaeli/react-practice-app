import React from "react";
import ReactDOM from "react-dom";
import "./body.scss";
import tabs from "../../data/body-data";
import Sidebar from "../sidebar/Sidebar";
import Paragraphs from "../paragraphs/Paragraphs";
import NewScan from "../new_scan/NewScan";
import Scan from "../scan/Scan";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    window.body = this;

    //console.log('body props',props)
    this.state = props;


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

  render(props) {
    //console.log('rendering body')
  
    let d = this.props.d;
    //console.log('body props',props)
    let scans = d.scans.map(scan => {
      return <div key={scan.tech_id}  style={{display: (d.selectedTab==scan.tech_id) ? 'block' : 'none'}}>
                <Scan d={d} scan={scan} />
              </div>
    })

    //console.log('scans',scans)
    //console.log('body props',props)
    // if (d.selectedTab == 'new_scan') screen = 
    // else screen = <Scan d={d} />

    return (
      <div className="body">
        <h1>Body</h1>                
        selectedTab: {d.selectedTab}
        <div style={{display: (d.selectedTab=='new_scan') ? 'block' : 'none'}}>
          <NewScan d={d} />
        </div>
        
        
        {scans}
        
      </div>
    );
  }
}
