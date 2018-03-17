import React from "react";
import "./Paragraph.scss";

const Paragraph = props => {
  const { tab, names } = props;
  const { bigIcon, paragraph } = tab;
 

  function returnText() {
    const length = names.length;

    if (length === 0) return <div className="block" />;
    if (length === 1) {
      return (
        <p className="paragraph-text">
          <span className="names">{names[0]}</span>{" "}
          <span>is also in Baby Step {tab.id}</span>
        </p>
      );
    } else if (length === 2) {
      return (
        <p className="paragraph-text">
          <span className="names">{names[0]} </span> and{" "}
          <span className="names">{names[1]} </span>{" "}
          <span>are also in Baby Step {tab.id}</span>
        </p>
      );
    } else if (length === 3) {
      return (
        <p className="paragraph-text">
          <span className="names">{names[0]} </span>,{" "}
          <span className="names">{names[1]} </span>,{" "}
          <span>and 1 other friend are also in Baby Step {tab.id}</span>
        </p>
      );
    } else {
      return (
        <p className="paragraph-text">
          <span className="names">{names[0]} </span>,{" "}
          <span className="names">{names[1]} </span>,{" "}
          <span>
            and {length - 2} other friends are also in Baby Step {tab.id}
          </span>
        </p>
      );
    }
  }

  return (
    <div className="paragraph">
      <div className="img-container">
        <img src={`${bigIcon}`} alt="icon" className="img" />
      </div>
      <p className="paragraph-text">{`${paragraph}`}</p>
      {returnText()}
    </div>
  );
};

export default Paragraph;
