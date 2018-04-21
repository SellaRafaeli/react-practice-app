import React from "react";
import ReactDOM from "react-dom";
import "./body.scss";
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
   
  }

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
        <div style={{display: (d.selectedTab=='new_scan') ? 'block' : 'none'}}>
          <NewScan d={d} />
        </div>
        
        {scans}
      </div>
    );
  }
}
