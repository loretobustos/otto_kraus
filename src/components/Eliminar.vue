<template>
  <div>
    <h1>Eliminar juguetes</h1>
    <form>
        <label for="">Código</label>
        <input type="text" pattern="[A-Za-z0-9]" v-model="form.codigo"><br>
         <label for="">Nombre</label>
        <input type="text" v-model="form.nombre"><br>
         <label for="">Stock</label>
        <input type="number" v-model="form.stock"><br>
         <label for="">Precio</label>
        <input type="number" v-model="form.precio"><br>
      <button @click.prevent="destroyJuguete">Eliminar juguete</button>

    </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'component-name',
    props: ['id'],
    data: function(){
        return {
            form: {
                codigo:'',
                nombre: '',
                stock: '',
                precio: '',
            }
        }
    },
    // computed: {},
    methods: {
        // -- Metodos
        destroyJuguete(){
            let res = confirm('¿Eliminar juguete?')
            if(!res) return // guardia
            this.deleteJuguete(this.id).then(()=>{
                alert('Juguete eliminado');
                this.$router.push('/juguetes')
            }).catch(error=>{
                console.log(error)
            })
        }, ...mapActions(['deleteJuguete'])
    },
    // components: {},
}
</script>

<style scoped>

</style>