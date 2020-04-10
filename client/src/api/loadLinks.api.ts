import sendRequest from './sendRequest';

const loadLinksFromServer = async (token: string) => {
  const links = await sendRequest('/api/link/load', 'GET', {
    authorization: token,
  });
  return links;
};

export default loadLinksFromServer;
