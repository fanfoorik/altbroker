import PropTypes from 'prop-types';
import React from 'react';

import htmlParser from 'html-react-parser';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import ToplineTooltip from 'components/HeaderTooltip';
import preventOverScroll from 'utils/preventOverScroll';
import { hostUrl } from 'utils/urls';

export default function PatchNotes(props) {
  const { fetchPatchNotes, patchNotes } = props;
  const { data: { current, next, prev }, icon } = patchNotes;
  const { isActive, triggerDropdown } = props;

  return (
    <div className="patch-notes">
      <span
        className="patch-notes__trigger"
        onClick={triggerDropdown}
        ref={trg => trg}
        role="button"
        tabIndex={0}
      >
        <Icon icon="info" width="13" height="13" />
      </span>

      {isActive &&
        <Dropdown triggerDropdown={triggerDropdown}>
          <ToplineTooltip className="patch-notes__droptip">

            <ToplineTooltip.Header className="clear">
              <div className="patch-notes__icon">
                <img src={hostUrl + current.icon} height="84" alt="" />
              </div>
              <div className="overflow_hidden">
                <div className="patch-notes__title">АльтБрокер</div>
                <div className="patch-notes__version">{current.version}</div>
                <div className="patch-notes__name">{current.name}</div>
              </div>
            </ToplineTooltip.Header>

            <div className="droptip__content patch-notes__content fz_16" ref={node => preventOverScroll(node)}>
              {htmlParser(current.text)}
            </div>

            <ToplineTooltip.Footer>
              <div className="patch-notes__controls">
                <span
                  className={`patch-note-control ${!prev.url ? 'disabled' : ''}`}
                  title={prev.name}
                  onClick={() => prev.url && fetchPatchNotes(prev.url)}
                  role="button"
                  tabIndex={0}
                >
                  <Icon icon="arrow-left" width="10" height="16" viewBox="0 0 10 16" />
                </span>

                <span
                  className={`patch-note-control ${!next.url ? 'disabled' : '' }`}
                  title={next.name}
                  onClick={() => next.url && fetchPatchNotes(next.url)}
                  role="button"
                  tabIndex={0}
                >
                  <Icon icon="arrow-right" width="10" height="16" viewBox="0 0 10 16" />
                </span>
              </div>
            </ToplineTooltip.Footer>
          </ToplineTooltip>
        </Dropdown>
      }
    </div>
  );
}

PatchNotes.propTypes = {
  fetchPatchNotes: PropTypes.func.isRequired,
  patchNotes: PropTypes.shape({
    active: PropTypes.bool,
    data: PropTypes.object,
    error: PropTypes.object,
  }).isRequired,
};
