import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Captcha from './Captcha';
import { refreshCaptcha, setCaptchaValue } from '../actions/captchaAction';

function mapStateToProps(state) {
  return {
    captcha: state.auth.login.captcha,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ refreshCaptcha, setCaptchaValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Captcha);
