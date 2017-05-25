import htmlParser from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';

import DropTip from 'components/DropTip/DropTip';
import IsActive from 'utils/IsActive';
import Icon from 'components/Icon';

export default function PatchNotes(props) {
  const { fetchPatchNotes, patchNotes, triggerPatchNotes } = props;
  const { active, data: { current, next, prev } } = patchNotes;

  return (
    <div className="patch-notes">
      <span
        className="patch-notes__trigger"
        onClick={triggerPatchNotes}
        ref={trg => trg}
        role="button"
        tabIndex={0}
      >
        <Icon icon="info" width="13" height="13" />
      </span>

      <IsActive active={active}>
        <DropTip handleOuterClick={triggerPatchNotes} className="patch-notes__droptip">
          <div className="droptip__header clear">

            <div className="patch-notes__icon">
              <Icon fill="#4da1ff" icon="anchor" width="70" height="70" />
            </div>

            <div className="overflow_hidden">
              <div className="patch-notes__title">АльтБрокер</div>
              <div className="patch-notes__version">{current.version}</div>
              <div className="patch-notes__name">{current.name}</div>
            </div>
          </div>

          <div className="droptip__content fz_16">
            {htmlParser(current.text)}
          </div>

          <div className="droptip__footer">
            <div className="patch-notes__controls">
              <span
                className={`patch-note-control ${prev.url ? '' : 'disabled'}`}
                title={prev.name}
                onClick={() => {
                  if (prev.url) fetchPatchNotes(prev.url);
                }}
                role="button"
                tabIndex={0}
              >
                <Icon icon="arrow-left" width="10" height="16" viewBox="0 0 10 16" />
              </span>

              <span
                className={`patch-note-control ${prev.url ? '' : 'disabled'}`}
                title={next.name}
                onClick={() => {
                  if (next.url) fetchPatchNotes(next.url);
                }}
                role="button"
                tabIndex={0}
              >
                <Icon icon="arrow-right" width="10" height="16" viewBox="0 0 10 16" />
              </span>
            </div>
          </div>
        </DropTip>
      </IsActive>
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
  triggerPatchNotes: PropTypes.func.isRequired,
};
