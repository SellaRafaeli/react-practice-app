import React from "react";
import "./Header.scss";
import Tab from "./tabs/Tab";

const Header = props => {
  let d = props.d;
  var tabs = d.tabs.map(t => <Tab key={t.tech_id} tech_id={t.tech_id} name={t.name} d={d} />);
    //console.log('header props',props);
  return (
    <div className="header">
      <div className="text-area">
        <p className="first-headline">Tabs</p>
        {tabs}
      </div>
    </div>
  );
};

export default Header;
