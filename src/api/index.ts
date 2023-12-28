import axios from 'axios';

export const useBackend = () => {
  const getBackend = async () => {
    const response = await axios.get(`http://localhost:3000`);
    return response.data;
  };

  return { getBackend };
};
