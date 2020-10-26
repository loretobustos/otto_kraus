<template>
  <div class="home">
    <div class="alert alert-success" role="alert">Haz iniciado seción con exito!!! Conoce nuestros juguetes</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <form>
        <button @click="logout">Cerrar seción</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase"

export default {
  name: 'Home',
  components: {

  },
  methods:{
    logout(){
      firebase.auth().signOut()
        .then(()=>{
          this.$router.push('/')
        }).catch(function(error){
          alert(error)
        })
    }
  }
}
</script>
