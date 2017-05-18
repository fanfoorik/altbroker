import React from 'react';

import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';
import Search from './Search';

export default class SearchWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  clickHandler() {
    this.setState({
      ...this.state,
      active: !this.state.active,
    });
  }

  render() {
    const { active } = this.state;

    return (
      <div className="searchbar">
        <div
          className="top-trigger"
          onClick={() => this.clickHandler()}
          role="button"
          tabIndex={0}
        >
          <Icon className="top-trigger__icon top-trigger__icon_stroke" icon="lens" width="19" height="20" />
        </div>
        <IsActive
          active={active}
          component={Search}
          handleSearchClose={() => this.clickHandler()}
        />
      </div>
    );
  }
}
