import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const tabs = this.renderTabs(props.activeTab);
    this.state = {
      active: props.activeTab,
      tabsTitle: tabs.tabsTitle,
      tabsBody: tabs.tabsBody,
    };
  }

  componentWillReceiveProps(nextProps) {
    const tabs = this.renderTabs(this.state.active, nextProps);
    this.state = {
      tabsTitle: tabs.tabsTitle,
      tabsBody: tabs.tabsBody,
    };
  }

  handleTabChange = (event) => {
    const { tab } = event.currentTarget.dataset;
    const tabs = this.renderTabs(tab);
    this.setState({
      active: tab,
      tabsTitle: tabs.tabsTitle,
      tabsBody: tabs.tabsBody,
    });
  };

  renderTabs = (activeTab, props) => {
    const { children } = props || this.props;
    const handleTabChange = this.handleTabChange;
    const tabsTitle = [];
    let tabsBody = null;
    const active = activeTab || React.Children.toArray(children)[0].props['data-tab'];

    React.Children.forEach(children, ((data) => {
      if (React.isValidElement(data)) {
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
      }
    }));
    return { tabsTitle, tabsBody };
  };

  render() {
    const { tabsTitle, tabsBody } = this.state;
    return (
      <div className="tabs">
        <div className="tabs-head">
          {tabsTitle}
        </div>
        <div className="tabs-body">
          {tabsBody}
        </div>
      </div>
    );
  }
}
