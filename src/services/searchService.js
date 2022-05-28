import { httpRequest } from '~/utils';

const searchService = async (q, type = 'less') => {
  try {
    const res = await httpRequest.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res?.data;
  } catch (error) {
    return error;
  }
};

export default searchService;
