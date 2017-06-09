import React from 'react';

const tab = '.js-popover-tab';
const tabTrigger = '.js-target-trigger';
let tabsTriggers = [];

function handleSelectTab(event) {
  const { currentTarget, target } = event;
  const allTargets = Array.from(currentTarget.parentNode.querySelectorAll(tab));
  const selectedTabIndex = [].indexOf.call(target.parentNode.childNodes, target);

  // Removes active class from all tabs:
  allTargets.forEach(item => item.classList.remove('active'));

  // Adds active class to selected tab:
  const targets = allTargets.filter((_, index) => (index % 2 === selectedTabIndex));
  targets.forEach(item => item.classList.add('active'));
}

export default function PopoverWithTabsHOC(Popover) {
  return class extends React.Component {
    componentDidMount() {
      tabsTriggers = Array.from(document.querySelectorAll(tabTrigger));
      tabsTriggers.forEach(item => item.addEventListener('click', handleSelectTab));
    }

    render() {
      return <Popover {...this.props} />;
    }
  };
}
