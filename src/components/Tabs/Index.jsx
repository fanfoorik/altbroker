import React from 'react';
import nanoid from 'nanoid';

const Panel = function (props) {
  return (
    <div className="tabs__tab">
      {props.children}
    </div>
  );
};

class Tabs extends React.Component {
  constructor(props) {
    console.log(props.children);
    const tabsTitle = React.Children.map(props.children, (data => (
      typeof data.props.title === 'string' ? <div key={nanoid()}>{data.props.title}</div> : data.props.title
    )));

    super(props);
    this.state = {
      tabsTitle,
      tabsBody: props.children,
    };
  }

  render() {
    const { tabsBody, tabsTitle } = this.state;
    const head = [];
    const body = [];

    // tabs.forEach((item) => {
    //   head.push(<div
    //     key={nanoid()}
    //     className="tab-title"
    //     onClick={() => console.log(item.title)}
    //   >{item.title}</div>);
    //   body.push(item.content);
    // });

    return (
      <div className="tabs">
        <div className="tabs__head">
          {tabsTitle}
        </div>
        <div className="tabs__body">
          {tabsBody}
        </div>
      </div>
    );
  }
}

Tabs.Panel = Panel;
export default Tabs;
