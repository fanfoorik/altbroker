import * as types from 'constants/recoverEmailTypes';

const initialState = {
  form: {
    touch: false,
    loading: false,
    successMessage: '',
    error: false,
    message: '',
  },
  email: {
    value: '',
    valid: false,
    message: 'Введите корректрый E-mail',
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    // email
    case types.RECOVER_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload.value,
          valid: action.payload.valid,
        },
        form: {
          ...state.form,
          error: false,
        },
      };

    // form
    case types.RECOVER_EMAIL_SUBMIT_TOUCH:
      return {
        ...state,
        form: {
          ...state.form,
          touch: true,
        },
      };

    case types.RECOVER_EMAIL_SUBMIT_START:
      return {
        ...state,
        form: {
          ...state.form,
          loading: true,
          successMessage: '',
          error: false,
        },
      };

    case types.RECOVER_EMAIL_SUBMIT_ERROR:
      return {
        ...state,
        form: {
          ...state.form,
          loading: false,
          error: true,
          message: action.payload,
        },
      };

    case types.RECOVER_EMAIL_SUBMIT_SUCCESS:
      return {
        ...state,
        form: {
          ...state.form,
          touch: false,
          loading: false,
          error: false,
          message: '',
          successMessage: action.payload,
        },
      };

    default:
      return state;
  }
}
