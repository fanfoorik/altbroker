import React from 'react';
import { connect } from 'react-redux';

import Icon from 'components/Icon';
import IsActive from 'components/IsActive';

import Stickers from './components/Stickers';
import { triggerStickers } from './actions/triggerStickers';

const StickersComponent = (props) => {
  const { stickers, dispatchTriggerStickers } = props;

  return (
    <div className="stickers">
      <div className={stickers.active ? 'top-trigger active' : 'top-trigger'} onClick={dispatchTriggerStickers}>
        <Icon className="top-trigger__icon" icon="message" width="18" height="21" />
      </div>

      <IsActive
        component={Stickers}
        active={stickers.active}
        handleOuterClick={dispatchTriggerStickers}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stickers: state.header.stickers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchTriggerStickers(){
      dispatch(triggerStickers());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StickersComponent);
