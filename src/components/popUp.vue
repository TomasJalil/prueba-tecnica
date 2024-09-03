<template>
  <div v-if="isVisible" class="popup-overlay" >
    <div v-if="isLoading===false" class="popup-content">
      <button class="close-button" @click="closePopup">&times;</button>
      <div class="imgContainer">
        <img class="sprite" :src="pokemonImg"/>
      </div>
      <div class="textContainer">
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
        <hr>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <hr>
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <hr>
        <p><strong>Type:</strong> {{ type }}</p>
        <hr>
      </div>
      <div class="buttonContainer">
        <button @click="copyAttributes" class="shareButton">Share with friends </button>
        <img class="favButton" @click.stop="setFav(pokemon.name)" :src="require(pokemon.fav ? '@/assets/favs-enabled.png' : '@/assets/favs-disabled.png')">
      </div>
      <slot></slot>
    </div>
    <div class="loader" v-if="isLoading">
      <img :src="require('@/assets/pokeball.png')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      isLoading: true,
    };
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    pokemon: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    pokemon: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        }
      }
    }
  },
  computed: {
    type() {
      return this.pokemon.types ? this.pokemon.types.map(type => type.type.name).join(", ") : "";
    },
    pokemonImg() {
      return this.pokemon.sprites.other["official-artwork"].front_default || require('@/assets/noimage.png');

    }
  },
  methods: {
    closePopup() {
      this.isLoading=true;
      this.$emit('close');
    },
    copyAttributes() {
      const text = `Name: ${this.pokemon.name}\nWeight: ${this.pokemon.weight}\nHeight: ${this.pokemon.height}\nType: ${this.type}`;
      navigator.clipboard.writeText(text);
      alert("Atributos copiados al portapapeles");
    },
    setFav() {
      this.pokemon.fav=! this.pokemon.fav;
      this.$emit('setFav', this.pokemon.name);
    }
  },
};
</script>

<style scoped>
.buttonContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  margin-top: 20px;
}
.favButton{
  height: 60px;
  cursor: pointer;
}
.shareButton {
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    width: 25vw;
    margin-bottom: 20px;
    border-radius: 20px;
    font-size: 1em;
    margin-top: 20px;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
p{
  max-width: 30vw;
  width: fit-content;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.textContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px
}
.sprite{
  width: 30vh;
  height: 30vh;
}
.imgContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 30vh;
  background-image: url("@/assets/background.png");
  background-size: cover;
  background-position: bottom;
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: white;
  border-radius: 10px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px; 
}

.loader img {
  width: 100%;
  height: auto;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
hr{
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #E8E8E8;
}
@media screen and (max-width: 600px) {
  .popup-content {
    width: 90%;
    height: 90%;
  }
  .imgContainer {
    width: 100%;
    height: 50%;
  }
  .textContainer {
    padding: 10px;
  }
  p {
    max-width: 100%;
  }




}
</style>