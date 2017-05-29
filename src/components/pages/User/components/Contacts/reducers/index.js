import { SET_USER_CONTACTS } from 'constants/userTypes';

const initialState = {
  editable: false,
  socials: {
    workPhone: '',
    email: '',
    facebook: '',
    vk: '',
    instagram: '',
    twitter: '',
    skype: '',
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case SET_USER_CONTACTS:

      return {
        ...state,
        socials: {
          ...state.socials,
          workPhone: payload.WORK_PHONE,
          email: payload.EMAIL,
          facebook: payload.UF_FACEBOOK,
          vk: payload.UF_VK,
          instagram: payload.UF_INSTAGRAMM,
          twitter: payload.UF_TWITTER,
          skype: payload.UF_SKYPE,
        },
      };

    default:
      return state;
  }
}
