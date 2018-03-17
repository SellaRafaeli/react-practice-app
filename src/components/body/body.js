import React from "react";
import ReactDOM from "react-dom";
import "./body.scss";
import tabs from "../../data/body-data";
import Sidebar from "../sidebar/Sidebar";
import Paragraphs from "../paragraphs/Paragraphs";

export default class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      selected: 1
    };
    this.setSelectedTab = this.setSelectedTab.bind(this);
    this.getRefs = this.getRefs.bind(this);
  }

  componentWillMount() {
    this.setState({
      friends: this.props.friends,
      tabs
    });
  }

  setSelectedTab(id) {
    this.setState(
      {
        selected: id
      },
      () => this.handleScrollToElement(this.state.selected)
    );
  }

  handleScrollToElement(id) {
    const testNode = ReactDOM.findDOMNode(this.state.refs[id]);
    testNode.scrollIntoView({ behavior: "smooth" });
  }

  getRefs(refs) {
    this.setState(
      {
        refs
      },
      () => this.getRefsValue()
    );
  }

  getRefsValue() {
    const { refs } = this.state;
    return Object.values(refs);
  }

  render() {
    const { selected } = this.state;
    const { friends } = this.props;

    return (
      <div className="body">
        <Sidebar
          tabs={tabs}
          selected={selected}
          setSelectedTab={this.setSelectedTab}
        />
        <Paragraphs
          tabs={tabs}
          friends={friends}
          selcted={selected}
          getRefs={this.getRefs}
        />
      </div>
    );
  }
}
