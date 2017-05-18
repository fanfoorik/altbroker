import * as types from 'constants/authTypes';

const initialState = {
  redirect: false,
  login: true,
  recoverEmail: false,
  recoverEmailSuccess: false,
  recoverPassword: false,
  recoverPasswordSuccess: false,
  userCheckword: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH_REDIRECT:
      return {
        ...state,
        redirect: action.payload,
      };

    case types.LOGIN_PANEL:
      return {
        ...state,
        login: true,
        recoverEmail: false,
        recoverEmailSuccess: false,
        recoverPassword: false,
        recoverPasswordSuccess: false,
        userCheckword: false,
      };

    case types.RECOVER_EMAIL_PANEL:
      return {
        ...state,
        login: false,
        recoverEmail: true,
        recoverEmailSuccess: false,
        recoverPassword: false,
        recoverPasswordSuccess: false,
        userCheckword: false,
      };

    case types.RECOVER_EMAIL_SUCCESS_PANEL:
      return {
        ...state,
        login: false,
        recoverEmail: false,
        recoverEmailSuccess: true,
        recoverPassword: false,
        recoverPasswordSuccess: false,
        userCheckword: false,
      };

    case types.USER_CHECKWORD_PANEL:
      return {
        ...state,
        login: false,
        recoverEmail: false,
        recoverEmailSuccess: false,
        recoverPassword: false,
        recoverPasswordSuccess: false,
        userCheckword: true,
      };

    case types.RECOVER_PASSWORD_PANEL:
      return {
        ...state,
        login: false,
        recoverEmail: false,
        recoverEmailSuccess: false,
        recoverPassword: true,
        recoverPasswordSuccess: false,
        userCheckword: false,
      };

    case types.RECOVER_PASSWORD_SUCCESS_PANEL:
      return {
        ...state,
        login: false,
        recoverEmail: false,
        recoverEmailSuccess: false,
        recoverPassword: false,
        recoverPasswordSuccess: true,
        userCheckword: false,
      };

    default:
      return state;
  }
}
