<template>
  <div id="app">
    <div id="nav">
      <router-link to="./agregar">Agregar</router-link> |
      <router-link to="/editar">Editar</router-link> |
      <router-link to="/eliminar">Eliminar</router-link>
    </div>
    <router-view/>
    <h1>Listado de juguetes</h1>

  <b-list-group horizontal class="listado">
    <b-list-group-item variant="success">Código</b-list-group-item>
    <b-list-group-item>Nombre</b-list-group-item>
    <b-list-group-item>Stock</b-list-group-item>
    <b-list-group-item>Precio</b-list-group-item>
  </b-list-group>
   <b-list-group horizontal>
    <b-list-group-item v-for="juguete in juguetes" :key="juguete.codigo"> {{juguete.codigo}} </b-list-group-item>
    <b-list-group-item v-for="juguete in juguetes" :key="juguete.nombre"> {{juguete.nombre}} </b-list-group-item>
    <b-list-group-item v-for="juguete in juguetes" :key="juguete.stock"> {{juguete.stock}} </b-list-group-item>
    <b-list-group-item v-for="juguete in juguetes" :key="juguete.precio"> {{juguete.precio}} </b-list-group-item>
  </b-list-group>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
    name: 'juguetes-gallery',
    // props: {},
    data: function(){
        return {
            juguetes: [
            {
              id: 1,
              codigo: 'A0001',
              nombre: 'Figura Cuphead',
              stock: '100',
              precio: '9990',
            },
            {
              id: 2,
              codigo: 'A0002',
              nombre: 'Figura Max Steel',
              stock: '50',
              precio: '8990',
            },
            {
              id: 3,
              codigo: 'A0003',
              nombre: 'Auto Hot Wheels',
              stock: '1000',
              precio: '1190',
            },
            {
              id: 4,
              codigo: 'A0004',
              nombre: 'Cartas españolas',
              stock: '200',
              precio: '990',
            },
            {
              id: 5,
              codigo: 'A0005',
              nombre: 'Cartas inglesas',
              stock: '200',
              precio: '1490',
            },
            {
              id: 6,
              codigo: 'A0006',
              nombre: 'Furby',
              stock: '500',
              precio: '39990'
            }
          ]
        }
    },
    computed: {
     // ...mapState(['juguetes'])
    },

    methods: {
        // -- Metodos
    ...mapActions(['fetchJuguetes'])
    },
    // components: {},
    created(){
    this.fetchJuguetes();
  }

};
</script>

<style scoped>
.listado{
  line-height:50x;
		border:1px solid;
		text-align:center;
    justify-content: space-evenly;
}
</style>