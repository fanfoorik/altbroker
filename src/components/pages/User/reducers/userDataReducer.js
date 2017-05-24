import { SET_USER_DATA } from 'constants/userTypes';

const initialState = {
  id: '',
  name: '',
  shortName: '',
  skype: '',
  twitter: '',
  facebook: '',
  instagram: '',
  vk: '',
  google: '',
  workPhone: '',
  workPosition: '',
  gender: '',
  email: '',
  login: '',
  lastName: '',
  secondName: '',
  city: '',
  photo: '',
  avatar: '',
  history: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_USER_DATA:

      return {
        ...state,
        id: payload.ID,
        name: payload.NAME,
        shortName: payload.SHOT_NAME,
        skype: payload.UF_SKYPE,
        twitter: payload.UF_TWITTER,
        facebook: payload.UF_FACEBOOK,
        instagram: payload.UF_INSTAGRAMM,
        vk: payload.UF_VK,
        google: payload.UF_GOOGLE,
        workPhone: payload.WORK_PHONE,
        workPosition: payload.WORK_POSITION,
        gender: payload.PERSONAL_GENDER,
        email: payload.EMAIL,
        login: payload.LOGIN,
        lastName: payload.LAST_NAME,
        secondName: payload.SECOND_NAME,
        city: payload.UF_CITY_TEXT,
        photo: payload.PERSONAL_PHOTO_TEXT,
        avatar: payload.PERSONAL_PHOTO_TEXT_86x86,
        history: payload.HISTORY.DETAIL_TEXT,
      };

    default:
      return state;
  }
};
