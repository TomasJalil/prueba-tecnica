# prueba-tecnica

Para esta prueba use Vue 3 
1. Componente de Lista de Pokémon (list.vue)
Funcionalidades:
Buscar y filtrar Pokémon.
Alternar entre vistas de todos los Pokémon y favoritos.
Marcar Pokémon como favoritos.
Mostrar detalles adicionales del Pokémon en un popup.
2. Componente Popup (popUp.vue)
Funcionalidades:
Mostrar y ocultar el popup.
Copiar información del Pokémon al portapapeles.
Alternar el estado de favorito del Pokémon.
Mostrar un loader mientras se cargan los datos.
3. Módulo Vuex (pokemonStore.js)
State:
pokemons: Arreglo para almacenar la lista de Pokémon.
selectedPokemon: Objeto para almacenar el Pokémon seleccionado.
Mutaciones:
SET_POKEMONS: Actualiza la lista de Pokémon en el estado.
SET_SELECTED_POKEMON: Actualiza el Pokémon seleccionado en el estado.
Getters:
getPokemons: Retorna la lista de Pokémon.
getSelectedPokemon: Retorna el Pokémon seleccionado.
Acciones:
getList: Obtiene la lista de Pokémon desde la API de Pokémon y actualiza el estado.
getSelectedPokemon: Obtiene detalles del Pokémon seleccionado desde la API y actualiza el estado.
Resumen General
La aplicación proporciona una interfaz interactiva para buscar y gestionar Pokémon. Los usuarios pueden:
Buscar Pokémon por nombre.
Filtrar la vista para mostrar todos los Pokémon o solo los favoritos.
Ver detalles adicionales de cada Pokémon en un popup.
Marcar Pokémon como favoritos y compartir información con otros.
El proyecto utiliza Vue.js para la interfaz de usuario, Vuex para la gestión del estado, y Axios para las solicitudes HTTP a la API de Pokémon.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
