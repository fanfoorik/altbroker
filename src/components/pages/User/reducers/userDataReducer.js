import { SET_USER_DATA } from 'constants/userTypes';

const initialState = {
  ID: '',
  NAME: '',
  SHOT_NAME: '',
  UF_SKYPE: null,
  UF_TWITTER: null,
  UF_FACEBOOK: null,
  UF_INSTAGRAMM: null,
  UF_VK: null,
  UF_GOOGLE: null,
  WORK_PHONE: '',
  PERSONAL_PHONE: '',
  WORK_POSITION: '',
  PERSONAL_PHOTO: '',
  PERSONAL_GENDER: '',
  EMAIL: '',
  LOGIN: '',
  LAST_NAME: '',
  SECOND_NAME: '',
  UF_CITY_TEXT: '',
  PERSONAL_PHOTO_TEXT: '',
  PERSONAL_PHOTO_TEXT_86x86: '',
  UF_DEP2_TEXT: [],
  CURUSER_GROUPS_TEXT: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      const { payload } = action;

      return {
        ...state,
        ID: payload.ID,
        NAME: payload.NAME,
        SHOT_NAME: payload.SHOT_NAME,
        UF_SKYPE: payload.UF_SKYPE,
        UF_TWITTER: payload.UF_TWITTER,
        UF_FACEBOOK: payload.UF_FACEBOOK,
        UF_INSTAGRAMM: payload.UF_INSTAGRAMM,
        UF_VK: payload.UF_VK,
        UF_GOOGLE: payload.UF_GOOGLE,
        WORK_PHONE: payload.WORK_PHONE,
        PERSONAL_PHONE: payload.PERSONAL_PHONE,
        WORK_POSITION: payload.WORK_POSITION,
        PERSONAL_PHOTO: payload.PERSONAL_PHOTO,
        PERSONAL_GENDER: payload.PERSONAL_GENDER,
        EMAIL: payload.EMAIL,
        LOGIN: payload.LOGIN,
        LAST_NAME: payload.LAST_NAME,
        SECOND_NAME: payload.SECOND_NAME,
        UF_CITY_TEXT: payload.UF_CITY_TEXT,
        PERSONAL_PHOTO_TEXT: payload.PERSONAL_PHOTO_TEXT,
        PERSONAL_PHOTO_TEXT_86x86: payload.PERSONAL_PHOTO_TEXT_86x86,
        UF_DEP2_TEXT: payload.UF_DEP2_TEXT,
        CURUSER_GROUPS_TEXT: payload.CURUSER_GROUPS_TEXT,
      };

    default:
      return state;
  }
};
