import axios from 'axios';

export const fetchCharacters = async (page) => {
  const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
  return response.data;
};

export const fetchHomeworld = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export const fetchFilms = async (urls) => {
  const requests = urls.map(url => axios.get(url));
  const responses = await Promise.all(requests);
  return responses.map(res => res.data);
};

export const fetchSpecies = async (urls) => {
  const requests = urls.map(url => axios.get(url));
  const responses = await Promise.all(requests);
  return responses.map(res => res.data);
};

