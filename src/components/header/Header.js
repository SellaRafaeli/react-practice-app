import React from "react";
import "./Header.scss";
import Tab from "./tabs/Tab";

const Header = props => {
  let d = props.d;
  var tabs = d.tabs.map(t => <Tab key={t.id} id={t.id} name={t.name} d={d} />);
    console.log('header props',props)
  return (
    <div className="header">
      <div className="text-area">
        <p className="first-headline">KYC Header {d.num} {d.selectedTab}</p>
        {tabs}
      </div>
    </div>
  );
};

export default Header;
