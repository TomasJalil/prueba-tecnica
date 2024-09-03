import { createStore } from 'vuex';
import list from '../store/list'; // Asegúrate de que esta ruta es correcta

export default createStore({
  modules: {
    list
  }
});