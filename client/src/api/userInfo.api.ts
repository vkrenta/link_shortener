import sendRequest from './sendRequest';

const getUserInfoFromServer = async (token: string) => {
  const userInfo = await sendRequest('/api/user/info', 'GET', {
    authorization: token,
  });

  return userInfo;
};

export default getUserInfoFromServer;
