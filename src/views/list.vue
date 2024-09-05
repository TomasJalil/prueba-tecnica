<template>
    <div class="container">
        <div>
        <input @input="searchPokemon($event)" type="search" placeholder="Search.." class="searchBar"></input>
        <div class="errorContainer" v-if="showError">
            <p class="errorTittle">Uh-oh!</p>
            <p class="errorSubtittle">You look lost on your journey!</p>
            <button @click="$router.push('/')" class="activeHome">Go back home </button>
        </div> 
    </div>
        <div class="cardContainer">
            <div v-for="(pokemon) in filteredPokemons" :key="pokemon.id">
                <div v-if="showAll || pokemon.fav === true" @click="selectedPokemon(pokemon)" class="card">
                    <p>{{ pokemon.name }}</p>
                    <img @click.stop="setFav(pokemon.name)" :src="require(pokemon.fav ? '@/assets/favs-enabled.png' : '@/assets/favs-disabled.png')">
                </div>
            </div>
            <Popup  :pokemon="getSelectedPokemon" :isVisible="isVisible" @close="isVisible = false" @setFav="setFav" ></Popup>

        </div> 
        <footer>
    <div v-if="!showError" class="footerContainer">
        <button 
            :class="{ active: showAll }"
            class="footerButton" 
            @click="changeView(1)">
            
            <img class="imgFooter" :src="require('@/assets/all.png')">

            All
        </button>
        <button
            class="footerButton"
            :class="{ active: !showAll }" 
            @click="changeView(0)">
            <img class="imgFooter" :src="require('@/assets/favs.png')">
            Favorites
        </button>
    </div>
</footer>
    </div>
</template>

<script>
import Popup from '@/components/popUp.vue';
export default {
    name: 'list',
    components: {
        Popup
    },
    data() {
        return {
            pokemons: [],
            filteredPokemons: [], 
            showAll: true,
            searchTerm: '',
            isVisible: false,
            showError: false
        }
    },
    computed: {
        getPokemons() {
            return this.$store.getters['list/getPokemons'];
        },
        getSelectedPokemon() {
            return this.$store.getters['list/getSelectedPokemon'];
        }
    },
    mounted() {
        this.$store.dispatch('list/getList');
    },
    methods: {
        setFav(name) {
            let index = this.pokemons.findIndex(p => p.name === name);
            if (index !== -1) {
                this.pokemons[index].fav = !this.pokemons[index].fav;
            } else {
            }
        },
        changeView(view) {
            this.showAll = view === 1;
        },
        searchPokemon(event) {
            const searchTermLower = event.target.value.toLowerCase();
            this.filteredPokemons = this.pokemons.filter(pokemon => 
                pokemon.name.toLowerCase().includes(searchTermLower)
            );
            this.showError = this.filteredPokemons.length === 0 ? true : false;

        },
        selectedPokemon(pokemon){
            this.isVisible=true;
            this.$store.dispatch('list/getSelectedPokemon', pokemon);
            
        }
    },
    watch: {
        getPokemons(newPokemons) {
            this.pokemons = Array.isArray(newPokemons) ? newPokemons : [];
            this.filteredPokemons = this.pokemons;
        }
    }
}
</script>

<style scoped>
.footerButton{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    width: 200px
}
.imgFooter{
    height: 30px;
    width: 30px;
    margin-right: 15px
}
.errorTittle{
    font-size: 4em;
}
.errorSubtittle{
    font-size: 2em;
}
.errorContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
}

p{
    width: fit-content;
    height: fit-content;
    margin: 0;
    font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.searchBar{
    width: 60vw;
    height: 50px;
    font-size: 1.5em;
    margin: 20px 0;
    padding: 10px;
    border: none;
    border-radius: 10px;
    align-self: center;
    outline: none;
    background-image: url('@/assets/search.png');
    padding-left: 50px;
    background-repeat: no-repeat;
    background-position: 5px center;
    font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.cardContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;
    overflow-y: auto;
    width: fit-content;
    align-self: center;
    padding-right: 10px;
    margin-top: 20px;
    
}
.card{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 60vw;
    height: 5vh;
    background-color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.5em;
    cursor: pointer;
}
.footerContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100px;
    background-color: white;
    box-shadow: -1px 2px 20px 14px rgba(0, 0, 0, 0.2)
}

.cardContainer::-webkit-scrollbar {
    width: 8px; 
}

.cardContainer::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px; 
    min-height: 50px;
}

.cardContainer::-webkit-scrollbar-track {
    background-color: transparent; 
}

.cardContainer::-webkit-scrollbar-button {
    display: none; 
}
button {
    background-color: #d3d3d3;
    color: white;
    padding: 10px 20px;
    border: none;
    width: 35vw;
    border-radius: 20px;
    font-size: 1.5em;
    margin-top: 20px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}

button.active {
    background-color: #f44336;
}
button.activeHome {
    background-color: #f44336; 
}

img{
        height: 60px;
    }
</style>