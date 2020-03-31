import sendRequest from './sendRequest';

const createLink = async (long: string, token: string) => {
  return sendRequest(
    '/api/link/create',
    'POST',
    { 'content-type': 'application/json', authorization: token },
    JSON.stringify({ long, token })
  );
};

export default createLink;
