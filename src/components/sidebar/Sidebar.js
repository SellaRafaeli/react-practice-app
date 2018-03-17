import React from "react";
import Button from "../button/Button";
import "./Sidebar.scss";

const Sidebar = props => {
  const { tabs, setSelectedTab, selected } = props;

  function renderButtons() {
    return tabs.map(tab => {
      return (
        <div key={tab.id}>
          <Button
            tab={tab}
            selected={selected}
            setSelectedTab={setSelectedTab}
          />
        </div>
      );
    });
  }

  return <div className="btn-container">{renderButtons()}</div>;
};

export default Sidebar;
