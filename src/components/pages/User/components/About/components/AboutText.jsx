import React from 'react';
import PropTypes from 'prop-types';

import htmlParser from 'html-react-parser';
import BaseEditor from 'components/Editor/BaseEditor';

class AboutText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
    };
  }

  componentWillReceiveProps() {
    if (this.state.trigger) {
      this.setState({ trigger: false });
    }
  }

  triggerDescription = () => {
    this.setState({ trigger: !this.state.trigger });
  };

  onChange = (html) => {
    console.log(html);
  };

  render() {
    const htmlText = htmlParser(this.props.data);

    return (
      <div className="profile-details__text">

        <div>
          { !this.state.trigger && htmlText.length > 8 ? htmlText.slice(0, 8) : htmlText }
        </div>

        <BaseEditor html={!this.state.trigger ? this.props.data : 'asdasdasdasdsad'} onChange={this.onChange} />

        {htmlText.length > 8 &&
        <span
          role="button"
          tabIndex="0"
          className="profile-details__text-trigger"
          onClick={this.triggerDescription}
        >
            { !this.state.trigger ? 'Показать полностью' : 'Cвернуть' }
          </span>
        }
      </div>
    );
  }
}

AboutText.defaultProps = {
  data: '',
};

AboutText.propTypes = {
  data: PropTypes.string,
};

export default AboutText;
