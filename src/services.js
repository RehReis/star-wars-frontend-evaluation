import axios from 'axios';

function cacheData(key, data) {
  const expiration = new Date().getTime() + 1000 * 60 * 60 * 24 //24 hours;
	localStorage.setItem(key, JSON.stringify({data, expiration}))
}

function getCachedData(key) {
	let cachedData = localStorage.getItem(key);
	if (!cachedData) {
    return null;
  }
  cachedData = JSON.parse(cachedData);
  if (new Date().getTime() > cachedData.expiration) {
    localStorage.removeItem(key)
    return null;
  }
	return cachedData.data;
}

export const fetchPlanets = async () => {
  let cachedPlanets = getCachedData('allplanets');
  if (cachedPlanets){
    console.log('cachedPlanets', cachedPlanets);
    return cachedPlanets;
  } else {
    try {
      let results = [];
      let currentUrl = 'https://swapi.dev/api/planets';
       while (currentUrl) {
        const { data } = await axios.get(currentUrl);
        for (let result of data.results) {
          let planet = {};
          planet.name = result.name;
          planet.residents = result.residents;
          results.push(planet);
        }
        currentUrl = data.next;
      }
      cacheData('allplanets', results);
      return results;
    } catch(error) {
      console.log(error);
    }
  }
}

export const fetchResidents = (planet, residentsUrl) => {
  let cachedResidents = getCachedData(planet);
  if (cachedResidents){
    console.log('cachedResidents', cachedResidents);
    return cachedResidents;
  } else {
    let residentsPromise = residentsUrl.map((residentUrl) => {
      return axios.get(residentUrl)
      .then(({data}) => {
        return data;
      })
    })
    return Promise.all(residentsPromise)
    .then((result) => {
      cacheData(planet, result);
      return result;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}