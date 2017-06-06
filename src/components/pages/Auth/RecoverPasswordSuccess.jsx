import React from 'react';
import { connect } from 'react-redux';
import htmlParser from 'html-react-parser';

import AuthPanel from './components/AuthPanel';
import { LOGIN_PANEL } from 'constants/authTypes';

function RecoverPasswordSuccess(props) {
  const { form, dispatchToLogin } = props;

  return (
    <AuthPanel>
      <div className="align-center mb-36">
        <svg fill="#4DA1FF" width="80" height="80" viewBox="0 0 80 80">
          <path
            fillRule="evenodd"
            d="M40 0c5.52 0 10.716 1.042 15.586 3.125C60.456 5.208 64.7 8.06 68.32 11.68c3.62 3.62 6.472 7.864 8.555 12.734C78.958 29.284 80 34.48 80 40c0 5.52-1.042 10.716-3.125 15.586-2.083 4.87-4.935 9.115-8.555 12.734-3.62 3.62-7.864 6.472-12.734 8.555C50.716 78.958 45.52 80 40 80c-5.52 0-10.716-1.042-15.586-3.125-4.87-2.083-9.115-4.935-12.734-8.555-3.62-3.62-6.472-7.864-8.555-12.734C1.042 50.716 0 45.52 0 40c0-5.52 1.042-10.716 3.125-15.586C5.208 19.544 8.06 15.3 11.68 11.68c3.62-3.62 7.864-6.472 12.734-8.555C29.284 1.042 34.48 0 40 0zm0 75.078c4.844 0 9.388-.924 13.633-2.773 4.245-1.85 7.943-4.362 11.094-7.54 3.15-3.176 5.65-6.887 7.5-11.132C74.076 49.388 75 44.843 75 40c0-4.844-.924-9.388-2.773-13.633-1.85-4.245-4.35-7.943-7.5-11.094-3.151-3.15-6.85-5.65-11.094-7.5C49.388 5.924 44.843 5 40 5c-4.844 0-9.388.924-13.633 2.773-4.245 1.85-7.943 4.35-11.094 7.5-3.15 3.151-5.65 6.85-7.5 11.094C5.924 30.612 5 35.157 5 40c0 4.844.924 9.388 2.773 13.633 1.85 4.245 4.35 7.956 7.5 11.133 3.151 3.177 6.85 5.69 11.094 7.539 4.245 1.849 8.79 2.773 13.633 2.773zm15.938-49.687c.52-.521 1.12-.782 1.796-.782.677 0 1.276.26 1.797.782.469.468.703 1.054.703 1.757 0 .704-.234 1.29-.703 1.758L34.61 53.984l-.312.313a2.267 2.267 0 0 1-1.758.781c-.703 0-1.289-.26-1.758-.781L18.36 41.953c-.468-.469-.703-1.055-.703-1.758 0-.703.235-1.289.703-1.758.521-.52 1.12-.78 1.797-.78.677 0 1.276.26 1.797.78L32.5 48.984l23.438-23.593z"
          />
        </svg>
      </div>

      <div className="align-center">
        <div className="auth-pane__text mb-12">
          { htmlParser(form.successMessage) }
        </div>
        <span onClick={dispatchToLogin} className="auth-pane__footlink" role="link">Войти</span>
      </div>
    </AuthPanel>
  );
}

function mapStateToProps(state) {
  return {
    form: state.auth.recoverPassword.form,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchToLogin() {
      dispatch({ type: LOGIN_PANEL });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPasswordSuccess);
