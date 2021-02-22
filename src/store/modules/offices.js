/* eslint no-shadow: ["error", { "allow": ["state"] }]  */
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import parameters from '../../services/parameters';

const state = {
  offices: [],
  officesLoading: true,
  officesSuccess: false,
};

const getters = {
  allOffices: (state) => state.offices,
  isOfficesLoading: (state) => state.officesLoading,
  officeEditStatus: (state) => state.officesSuccess,
};

const actions = {
  async fetchOffices({ commit }) {
    const response = await axios.get(parameters.DB_URL, parameters.config);
    commit('setOffices', response.data);
    commit('officesLoaded');
  },
  async addOffice({ commit }, data) {
    const response = await axios.post(parameters.TEST_URL, data);
    commit('newOffice', response.data);
    commit('officeAdded', true);
  },
  async deleteOffice({ commit }, id) {
    await axios.delete(`${parameters.TEST_URL}/${id}`);
    commit('removeOffice', id);
  },
  async updateOffice({ commit }, updOffice) {
    await axios.put(`${parameters.TEST_URL}/${updOffice.id}`);
    commit('updateOffice', updOffice);
    commit('officeAdded', true);
  },
};

const mutations = {
  setOffices: (state, offices) => {
    state.offices = offices;
  },
  officesLoaded: (state) => {
    state.officesLoading = false;
  },
  newOffice: (state, office) => {
    state.offices.unshift(office);
  },
  officeAdded: (state, status) => {
    state.officesSuccess = status;
    setTimeout(() => {
      state.officesSuccess = !status;
    }, 2000);
  },
  removeOffice: (state, id) => {
    state.offices = state.offices.filter((office) => office.id !== id);
  },
  updateOffice: (state, updOffice) => {
    const index = state.offices.findIndex((office) => office.id === updOffice.id);
    if (index !== -1) {
      state.offices.splice(index, 1, updOffice);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
