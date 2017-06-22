import PropTypes from 'prop-types';
import React from 'react';

const tab = '.tabs__tab-item';
const tabTrigger = '.tabs__trigger';
let tabsTriggers = [];

function handleSelectTab(event) {
  const { currentTarget, target } = event;
  const allTargets = Array.from(currentTarget.parentNode.parentNode.querySelectorAll(tab));
  const selectedTabIndex = [].indexOf.call(currentTarget.parentNode.childNodes, currentTarget);

  // Removes active class from all tabs:
  allTargets.forEach(item => item.classList.remove('active'));

  // Adds active class to selected tab:
  const targets = allTargets.filter((_, index) => (index % 2 === selectedTabIndex));
  targets.forEach(item => item.classList.add('active'));
}

export default (Component) => {
  class Tabs extends React.Component {

    componentDidMount() {
      tabsTriggers = Array.from(document.querySelectorAll(tabTrigger));
      tabsTriggers.forEach(item => item.addEventListener('click', handleSelectTab));

      // TODO: Доработать табки, сделать по-человечески, а не все это вот...
      // const tabsLinks = Array.from(document.querySelectorAll('.tabs__trigger[data-tab]'));
      // let tabs = [];
      //
      // function tabClick(event) {
      //   tabs.forEach((item) => {
      //     item.classList.remove('active');
      //     if (event.currentTarget.dataset.tab === item.dataset.tab) {
      //       item.classList.add('active');
      //     }
      //   });
      // }
      //
      // tabsLinks.forEach((item) => {
      //   const tab = document.querySelector(`.tabs__tab[data-tab="${item.dataset.tab}"]`);
      //
      //   if (tab) {
      //     item.addEventListener('click', handleSelectTab);
      //   }
      //
      //   if (item.classList.contains('active')) {
      //     tab.classList.add('active');
      //   }
      //   tabs.push(tab);
      // });

      // tabsLinks.forEach((item, index) => {
      //   if (item.classList.contains('active')) {
      //     console.log( document.querySelectorAll(`.tabs__body[data-tab="${item.dataset.tab}"]`));
      //   }
      // });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return Tabs;
};
