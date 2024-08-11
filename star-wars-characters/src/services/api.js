// // // services/api.js
// // import axios from 'axios';

// // const api = axios.create({
// //   baseURL: 'https://swapi.dev/api',
// // });

// // export const fetchCharacters = async (page = 1) => {
// //   return await api.get(`/people/?page=${page}`);
// // };

// // export const fetchCharacterDetails = async (url) => {
// //   return await api.get(url);
// // };

// // export const fetchHomeworld = async (url) => {
// //   return await api.get(url);
// // };

// // export const fetchFilms = async (urls) => {
// //   return await Promise.all(urls.map(url => api.get(url)));
// // };

// // export const fetchSpecies = async (urls) => {
// //   return await Promise.all(urls.map(url => api.get(url)));
// // };
// // src/services/api.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://swapi.dev/api',
// });

// export const fetchCharacters = async (page = 1) => {
//   return await api.get(`/people/?page=${page}`);
// };

// export const fetchCharacterDetails = async (url) => {
//   return await api.get(url);
// };

// export const fetchHomeworld = async (url) => {
//   return await api.get(url);
// };

// export const fetchFilms = async (urls) => {
//   return await Promise.all(urls.map(url => api.get(url)));
// };

// export const fetchSpecies = async (urls) => {
//   return await Promise.all(urls.map(url => api.get(url)));
// };


// import axios from 'axios';

// export const fetchCharacters = async (page) => {
//   const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
//   return response.data;
// };

// export const fetchHomeworld = async (url) => {
//   const response = await axios.get(url);
//   return response.data;
// };

// export const fetchFilms = async (urls) => {
//   const requests = urls.map(url => axios.get(url));
//   const responses = await Promise.all(requests);
//   return responses.map(res => res.data);
// };

// export const fetchSpecies = async (urls) => {
//   const requests = urls.map(url => axios.get(url));
//   const responses = await Promise.all(requests);
//   return responses.map(res => res.data);
// };


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

