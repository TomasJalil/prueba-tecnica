<template>
  <div>
    <div class="container">
      <img class="imgPikachu" :src="require('@/assets/pikachu.png')">
      <h1>Welcome to pokédex</h1>
      <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <button @click="$router.push('/list')">Get Started</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgPikachu{
  width: 500px;
  height: 400px;
}
h1 {
  font-size: 2em;
  color: #353535;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}
p{
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1.5em;
  width: 50%;
  text-align: center;
}
button{
  background-color: #f44336;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.5em;
  margin-top: 20px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
}
@media screen and (max-width: 768px) {
  .imgPikachu{
    width: 300px;
    height: 250px;
  }
  h1 {
    font-size: 1.5em;
  }
  p{
    font-size: 1em;
  }
  button{
    font-size: 1em;
  }
  
}
</style>
