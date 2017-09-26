import React from 'react';
import nanoid from 'nanoid';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsTitle: this.renderTabs(props.activeTab).tabsTitle,
      tabsBody: this.renderTabs(props.activeTab).tabsBody,
    };
  }

  handleTabChange = (event) => {
    const { tab } = event.currentTarget.dataset;
    this.setState({
      tabsTitle: this.renderTabs(tab).tabsTitle,
      tabsBody: this.renderTabs(tab).tabsBody,
    });
  };

  renderTabs = (activeTab) => {
    const { children } = this.props;
    const handleTabChange = this.handleTabChange;
    const tabsTitle = [];
    let tabsBody = null;
    const active = activeTab || React.Children.toArray(children)[0].props['data-tab'];

    React.Children.forEach(children, ((data) => {
      const { title, 'data-tab': dataTab, children: content } = data.props;
      const tab = dataTab;
      const tabsTrigger = typeof title === 'string' ?
        (
          <div
            key={tab}
            className={`tabs-trigger${active === tab ? ' active' : ''}`}
            data-tab={tab}
            onClick={active !== tab ? handleTabChange : false}
            role="tab"
            tabIndex="0"
          >{title}</div>
        )
        :
      {
        ...title,
        key: tab,
        props: {
          ...title.props,
          'data-tab': tab,
          className: active === tab ? `${title.props.className} active` : title.props.className,
          onClick: active !== tab ? handleTabChange : false,
        },
      };

      tabsTitle.push(tabsTrigger);
      if (active === tab) {
        tabsBody = content;
      }
    }));
    return { tabsTitle, tabsBody };
  };

  render() {
    const { tabsTitle, tabsBody } = this.state;
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
