<template>
<div>
    <h1>Agregar juguetes</h1>
    <form>
        <label for="">Código</label>
        <input type="text" pattern="[A-Za-z0-9]" v-model="form.codigo"><br>
         <label for="">Nombre</label>
        <input type="text" v-model="form.nombre"><br>
         <label for="">Stock</label>
        <input type="number" v-model="form.stock"><br>
         <label for="">Precio</label>
        <input type="number" v-model="form.precio"><br>
         <button @click.prevent="createJuguete">Agregar juguete</button>
    </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {
            form: {
            codigo: "",
            nombre: "",
            stock: "",
            precio: "",
            },
        }
    },
    // computed: {},
    methods: {
        // -- Metodos
        createJuguete(){
            this.addJuguete(this.form).then(()=>{
                alert('juguete agregado')
                this.$router.push('/juguetes')
            }).catch(error =>{
                console.log(error)
            })
        },
        ...mapActions(['addJuguete'])
    },
    // components: {},
}
</script>

<style scoped>

</style>