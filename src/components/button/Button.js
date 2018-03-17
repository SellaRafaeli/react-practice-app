import React from "react";
import "./Button.scss";

const Button = props => {
  const { setSelectedTab, selected } = props;
  const { id, greyIcon, blueIcon } = props.tab;

  const selectedTab = selected === id;

  return (
    <button
      className={selectedTab ? "button selected" : "button"}
      onClick={() => setSelectedTab(id)}
    >
      <span
        className={selectedTab ? "step-btn-text selectedText" : "step-btn-text"}
      >
        baby step {id}
      </span>
      <img
        src={`${!selectedTab ? greyIcon : blueIcon}`}
        alt="icon"
        className="icon"
      />
    </button>
  );
};

export default Button;
