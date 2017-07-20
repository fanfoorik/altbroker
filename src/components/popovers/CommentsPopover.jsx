import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';
import ajax from 'utils/ajax';

import CommentsList from 'components/Comments/CommentsList';
import CommentsForm from 'components/Comments/CommentsForm';

import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';


class CommentsPopover extends React.Component {
  constructor() {
    super();
    this.state = {
      staffComments: [],
      clientComments: [],
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    const url = `broker/gb/${this.props.id}/detail/`;
    const ths = this;

    ajax.post(url, { TAB: 'MAIN' })
      .then((data) => {
        if (!data.ERRORS.length) {
          ths.setState({
            staffComments: data.ANSWER.COMMENTS.INNER_COM,
            clientComments:  data.ANSWER.COMMENTS.KLIENT_COM,
          });
        }
      });
  };

  updateComments = (data) => {
    this.setState((prevState) => {
      const staffComments = data.ANSWER.COMMENTS.INNER_COM;
      const commentsLength = (staffComments.length + prevState.clientComments.length).toString();
      this.props.updateCommentsLength(commentsLength);
      return {
        staffComments,
      };
    });
    this.scrollable.scrollTop = this.scrollable.scrollHeight;
  };

  render() {
    const { id, providePopover } = this.props;
    const { staffComments, clientComments } = this.state;
    const url = `broker/gb/${id}/addcomments/`;

    return (
      <div className="popover popover_visible popover_md" ref={node => providePopover(node)}>
        <div className="popover-header js-target-trigger">
          <div className="popover-header__tab active js-popover-tab">Брокеры</div>
          <div className="popover-header__tab js-popover-tab">Клиенты</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding active js-popover-tab">
            <div className="popover-comments">
              <div className="popover-comments__scrollable js-scrollable" ref={(node) => { this.scrollable = node; }}>
                <CommentsList comments={staffComments} />
              </div>
              <CommentsForm url={url} updateComments={this.updateComments} />
            </div>
          </div>

          <div className="popover-content-wrapper no-padding js-popover-tab">
            <div className="popover-comments">
              <div className="popover-comments__scrollable js-scrollable">
                <CommentsList comments={clientComments} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentsPopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  updateCommentsLength: PropTypes.func.isRequired,
};

export default compose(PopoverBaseHOC, PopoverWithTabsHOC)(CommentsPopover);
