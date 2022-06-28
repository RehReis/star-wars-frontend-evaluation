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
      sortData(results);
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
      result = result.map(result => ( {
        name: result.name,
        birthYear: result.birth_year,
        gender: result.gender,
        eyeColor: result.eye_color,
        hairColor: result.hair_color,
        height: result.height,
        mass: result.mass,
        skinColor: result.skin_color
      }));
      sortData(result);
      cacheData(planet, result);
      return result;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

function sortData(data) {
  data.sort((a, b) => {
    let itemA = a.name;
    let itemB = b.name;
    if (itemA < itemB) {
      return -1;
    }
    if (itemA > itemB) {
      return 1;
    }
    return 0;
  })
}