import axios from 'axios';

const state = {
  pokemons: [],
  selectedPokemon: null
};

const mutations = {
  SET_POKEMONS(state, pokemons) {
    state.pokemons = pokemons;
  },
  SET_SELECTED_POKEMON(state, pokemon) {
    state.selectedPokemon = pokemon;
  }
};

const getters = {
    getPokemons: state => {
        return state.pokemons;
    },
    getSelectedPokemon: state => {
        return state.selectedPokemon;
    }
    }


const actions = {
  async getList({ commit }) {
    commit('SET_POKEMONS', null);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5000`);
      commit('SET_POKEMONS', response.data.results);
    } catch (err) {
      console.error('Error al obtener los Pokémons:', error);
    }
  },
  async getSelectedPokemon({ commit }, pokemon) {
    try{
      const response = await axios.get(pokemon.url);
      let responseData = response.data;
      responseData.fav = pokemon.fav !== undefined && pokemon.fav !== false ? pokemon.fav : false;
      commit('SET_SELECTED_POKEMON', response.data, pokemon.fav);
    }
    catch(err){
      console.error('Error al obtener el Pokémon:', error);
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};