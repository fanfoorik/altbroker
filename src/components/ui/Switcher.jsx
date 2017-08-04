import PropTypes from 'prop-types';
import React from 'react';
import Btn from 'components/ui/Btn';

export default class Switcher extends React.Component {

  constructor() {
    super();
    this.state = { checked: false };
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  handleTrue = () => {
    this.setState({
      checked: true,
    });
  };

  handleFalse = () => {
    this.setState({
      checked: false,
    });
  };

  render() {
    return (
      <div>
        <Btn
          onChange={this.handleChange}
          handleTrue={this.handleTrue}
          handleFalse={this.handleFalse}
          checked={this.state.checked}
        />
        {/*<br/>*/}
        {/*<div className="checked__block">*/}
          {/*{*/}
            {/*this.state.checked &&*/}
              {/*<span>*/}
                {/*loren ipsum dolor*/}
              {/*</span>*/}
          {/*}*/}
        {/*</div>*/}
      </div>

    );
  }
}
