<template>
    <div>
    <h1>Editar juguetes</h1>
    <form>
        <label for="">Código</label>
        <input type="text" pattern="[A-Za-z0-9]" v-model="form.codigo" :disabled="!edit"><br>
         <label for="">Nombre</label>
        <input type="text" v-model="form.nombre" :disabled="!edit"><br>
         <label for="">Stock</label>
        <input type="number" v-model="form.stock" :disabled="!edit"><br>
         <label for="">Precio</label>
        <input type="number" v-model="form.precio" :disabled="!edit"><br>
        <button @click.prevent="editJuguete" :disabled="!edit">Editar juguete</button>

    </form>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
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
            },
            edit:false
        }
    },
    computed: {
        ...mapGetters(['getJuguete'])
    },
    methods: {
        // -- Metodos
        async setJuguete(){
            let juguete = this.getJuguete(this.id)
            console.log(juguete)
            if(juguete == undefined){
                let resp= await this.fetchIdJuguete(this.id)
                juguete = resp.data()
            }
            this.form.codigo = juguete.codigo
            this.form.nombre = juguete.nombre
            this.form.stock = juguete.stock
            this.form.precio = juguete.precio
        },
        editJuguete(){
            let juguete = this.form
            juguete.id = this.id
            let response =this.updateJuguete(juguete)
            response.then(()=>{
                alert('Juguete Actualizado')
                this.$router.push('/juguetes')
            }).catch(error=>{
                console.log(error)
            })
        },
        ...mapActions(['fetchIdJuguete', 'updateJuguete'])
    },
    // components: {},
    create(){
        this.setJuguete();
    }
}
</script>

<style scoped>

</style>