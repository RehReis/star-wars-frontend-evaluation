import axios from 'axios';

export const fetchPlanets = async () => {
  try {
    let results = [];
    let currentUrl = 'https://swapi.dev/api/planets';
     while (currentUrl) {
      const { data } = await axios.get(currentUrl);
      results = results.concat(data.results);
      currentUrl = data.next;
    }
    return results;
  } catch(error) {
    console.log(error);
  }
}

export const fetchResidents = (residentsUrl) => {
  let residentsPromise = residentsUrl.map((residentUrl) => {
    return axios.get(residentUrl)
    .then(({data}) => {
      return data;
    })
  })
  return Promise.all(residentsPromise)
  .then((result) => {
    return result;
  })
  .catch((error) => {
    console.log(error);
  })
}