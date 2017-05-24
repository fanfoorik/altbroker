import { SET_USER_CONTACTS } from 'constants/userTypes';

const initialState = {
  editable: true,
  socials: [
    {
      name: 'workPhone',
      value: '',
      icon: 'phone',
      link: '',
    },
    {
      name: 'email',
      value: '',
      icon: 'envelope',
      link: '',
    },
    {
      name: 'facebook',
      value: '',
      icon: 'facebook',
      link: 'facebook.com/',
    },
    {
      name: 'vk',
      value: '',
      icon: 'vk',
      link: 'vk.com/',
    },
    {
      name: 'instagram',
      value: '',
      icon: 'instagram',
      link: 'instagram.com/',
    },
    {
      name: 'twitter',
      value: '',
      icon: 'twitter',
      link: 'twitter.com/',
    },
    {
      name: 'skype',
      value: '',
      icon: 'skype',
      link: '',
    }],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {

    case SET_USER_CONTACTS:

      return {
        ...state,
        socials: [
          {
            name: 'workPhone',
            value: payload.WORK_PHONE,
            icon: 'phone',
            link: '',
          },
          {
            name: 'email',
            value: payload.EMAIL,
            icon: 'envelope',
            link: '',
          },
          {
            name: 'facebook',
            value: payload.UF_FACEBOOK,
            icon: 'facebook',
            link: 'facebook.com/',
          },
          {
            name: 'vk',
            value: payload.UF_VK,
            icon: 'vk',
            link: 'vk.com/',
          },
          {
            name: 'instagram',
            value: payload.UF_INSTAGRAMM,
            icon: 'instagram',
            link: 'instagram.com/',
          },
          {
            name: 'twitter',
            value: payload.UF_TWITTER,
            icon: 'twitter',
            link: 'twitter.com/',
          },
          {
            name: 'skype',
            value: payload.UF_SKYPE,
            icon: 'skype',
            link: '',
          }],
      };

    default:
      return state;
  }
}
