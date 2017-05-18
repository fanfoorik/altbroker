export default () => {
  return {
    login: localStorage.getItem('login'),
    token: localStorage.getItem('token'),
  };
};
