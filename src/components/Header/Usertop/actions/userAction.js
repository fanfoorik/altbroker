import { TRIGGER_USER } from 'constants/userTypes';

const triggerUser = () => {
  return { type: TRIGGER_USER };
};

export default triggerUser;
