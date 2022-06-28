import { types } from 'mobx-state-tree';
import {fetchPlanets, fetchResidents} from './services.js';

const PlanetsModel = types.model('PlanetsModel', {
  name: types.string,
  residents: types.array(types.string),
})

const ResidentsModel = types.model('ResidentsModel', {
  name: types.string,
  birthYear: types.string,
  gender: types.string,
  eyeColor: types.string,
  hairColor: types.string,
  height: types.string,
  mass: types.string,
  skinColor: types.string
})

export const RootStore = types.model("RootStore", {
  planetsList: types.array(PlanetsModel),
  residentsList: types.array(ResidentsModel)
}).actions(store => ({
  setPlanetsList(newList) {
    store.planetsList = newList;
  },
  async fetchPlanetsList() {
    const newList = await fetchPlanets();
    store.setPlanetsList(newList);
  },
  setResidentsList(newList) {
    store.residentsList = newList;
   },
  async fetchResidentsList(planet, residents) {
    const newList = await fetchResidents(planet, residents);
    store.setResidentsList(newList);
  }

}));

let _store;
export const useStore = () => {
  if (!_store) {
    _store = RootStore.create({
      planetsList: [],
      residentsList: []
    });
  }
  return _store;
}