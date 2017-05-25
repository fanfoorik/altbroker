import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions/';
import StickersWrapper from './components/StickersWrapper';

function getActiveStickers(obj) {
  if (obj.stickers) {
    return obj.stickers.filter(item => item.ACTIVE === 'Y');
  }
  return [];
}

function mapStateToProps(state) {
  return {
    stickersObj: state.header.stickers,
    stickers: getActiveStickers(state.header.stickers),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StickersWrapper);
