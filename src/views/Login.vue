<template>
<div>
  <b-form inline>
       <h2>Login</h2>
    <label class="sr-only" for="inline-form-input-username">Useario</label>
      <b-input id="inline-form-input-username" type="text" placeholder="Username" v-model="user"></b-input>
    <label class="sr-only" for="inline-form-input-pessword">Contraseña</label>
      <b-input id="inline-form-input-password" type="password" placeholder="pasword" v-model="pass"></b-input>
    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Recordarme</b-form-checkbox>
    <b-button variant="primary" @click.prevent="login" >Acceder</b-button>

  </b-form>

  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'component-name',
  // props: {},
  data: function(){
    return {
      user:'',
      pass:'',
    }
  },
  // computed: {},
  methods: {
    // -- Metodos
    login(){

      firebase.auth().signInWithEmailAndPassword(this.user, this.pass)
        .then((resp)=>{
          console.log(resp,'result')
          this.$router.push('/home')
        })
       // .catch(function(error){
         // let errorCode = error.code;
          //let errorMessage = error.message;
          //console.log(erroCode,ErrorMessage)
        }
    }

  // components: {},
}
</script>

<style scoped>

</style>