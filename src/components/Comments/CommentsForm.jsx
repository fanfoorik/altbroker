import PropTypes from 'prop-types';
import React from 'react';

import ajax from 'utils/ajax';
import Icon from 'components/Icon';

export default class CommentsForm extends React.Component {
  constructor() {
    super();
    this.state = { comment: '' };
  }

  submitComment = (event) => {
    event.preventDefault();
    const { url, updateComments } = this.props;
    const { comment } = this.state;

    if (comment.length) {
      this.setState({ comment: '' });
      ajax.post(url, { TEXT: comment })
        .then((data) => {
          updateComments(data);
        });
    }
  };

  typeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    const { comment } = this.state;

    return (
      <form className="comments-form" onSubmit={this.submitComment}>
        <input
          className="comments-form__input input"
          onChange={this.typeComment}
          placeholder="Ваш комментарий…"
          type="text"
          value={comment}
        />
        <button type="submit" className="comments-form__submit">
          <Icon
            icon="send-message"
            className="comments-form__icon"
            width={16}
            height={16}
          />
        </button>
      </form>
    );
  }
}

CommentsForm.propTypes = {
  url: PropTypes.string.isRequired,
  updateComments: PropTypes.func.isRequired,
};
