import sendRequest from './sendRequest';

const checkToken = async (token: string) => {
  return sendRequest('/api/auth/login', 'GET', { authorization: token });
};

export default checkToken;
