import {getBaseApi} from './api';

const register = async (values) => {
  const api = getBaseApi();
  
  return await api.post('/register', values)
    .then((res) => res.data)
    .catch((error) => ({
      error: error
    }));
};

export default register;