import * as types from 'constants/recoverPasswordTypes';

const initialState = {
  form: {
    touch: false,
    loading: false,
    success: '',
    successMessage: '',
    error: false,
    message: '',
  },
  password: {
    value: '',
    minLength: false,
    lowerCase: false,
    upperCase: false,
    digit: false,
    valid: false,
    message: 'Введите корректный пароль',
  },
  confirm: {
    value: '',
    touch: false,
    valid: true,
  },
  user: {
    login: '',
    checkword: '',
    loading: false,
    error: false,
  },
};

export default function (state = initialState, action) {
  const { payload } = action;

  switch (action.type) {
    // checkword
    case types.RECOVER_CHECKWORD:
      return {
        ...state,
        user: {
          ...state.user,
          login: payload.login,
          checkword: payload.checkword,
          loading: true,
          error: false,
        },
      };

    case types.RECOVER_CHECKWORD_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: true,
        },
      };

    case types.RECOVER_CHECKWORD_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          loading: false,
          error: false,
        },
      };

    // password
    case types.RECOVER_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          value: payload.password.value,
          minLength: payload.password.minLength,
          lowerCase: payload.password.lowerCase,
          upperCase: payload.password.upperCase,
          digit: payload.password.digit,
          valid: payload.password.valid,
        },
        confirm: {
          ...state.confirm,
          touch: true,
          valid: payload.confirm.valid,
        },
        form: {
          ...state.form,
          error: false,
        },
      };

    case types.RECOVER_PASSWORD_CONFIRM:
      return {
        ...state,
        confirm: {
          ...state.confirm,
          touch: true,
          value: payload.value,
          valid: payload.valid,
        },
        form: {
          ...state.form,
          error: false,
        },
      };

    // form
    case types.RECOVER_PASSWORD_SUBMIT_TOUCH:
      return {
        ...state,
        form: {
          ...state.form,
          touch: true,
        },
        confirm: {
          ...state.confirm,
          touch: true,
        },
      };

    case types.RECOVER_PASSWORD_SUBMIT_START:
      return {
        ...state,
        form: {
          ...state.form,
          loading: true,
          successMessage: '',
          error: false,
        },
      };

    case types.RECOVER_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        form: {
          ...state.form,
          touch: false,
          loading: false,
          error: false,
          message: '',
          success: true,
          successMessage: action.payload,
        },
        password: {
          ...state.password,
          value: '',
        },
        confirm: {
          ...state.confirm,
          value: '',
          touch: false,
        },
      };

    case types.RECOVER_PASSWORD_SUBMIT_ERROR:

      return {
        ...state,
        form: {
          ...state.form,
          loading: false,
          error: true,
          message: action.payload,
        },
      };

    default:
      return state;
  }
}
