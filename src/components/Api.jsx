import axios from 'axios';
// апишка для картинок 
export const fetchImage = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const KEY = '33577731-7b9b7bf07a9d841c486c320f5';
  const OPTIONS = `q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const { data } = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return data;
};
