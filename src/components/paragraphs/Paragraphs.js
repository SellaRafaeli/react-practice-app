import React from "react";
import "./Paragraphs.scss";
import Paragraph from "../paragraph/Paragraph";

export default class Paragraphs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getRefs } = this.props;
    // catching the paragraphs elements so it can be delivered to father component.
    getRefs(this.refs);
  }

  getFriends() {
    const { friends } = this.props;
    let arr = [[], [], [], [], [], [], [], []];

    friends.forEach(friend =>
      arr[friend.babyStep - 1].push(friend.firstName + " " + friend.lastName)
    );

    return arr;
  }

  renderParagraphs() {
    const { tabs } = this.props;
    const names = this.getFriends();

    return tabs.map(tab => {
      return (
        <div key={tab.id} ref={tab.id}>
          <Paragraph tab={tab} names={names[tab.id - 1]} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="paragraphs-container">{this.renderParagraphs()}</div>
    );
  }
}
