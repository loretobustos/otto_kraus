import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../firebase/firebaseDb'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {
        ADD_JUGUETE(state, juguete) {
            state.juguetes.push({
                id: juguete.id,
                codigo: juguete.data().codigo,
                nombre: juguete.data().nombre,
                stock: juguete.data().stock,
                precio: juguete.data().precio
            })
        },
        RESET_JUGUETES(state) {
            state.juguetes = []
        }
    },
    actions: {
        fetchJuguetes({ commit }) {
            db.collection('juguete').onSnapshot((snap) => {
                commit('RESET_JUGUETES')
                snap.forEach(doc => {
                    commit('ADD_JUGUETE', doc)
                })
            })



        }

    },
    getters: {
        getJuguete: (state) => (id_juguete) => {
            return state.juguetes.find(juguete => juguete.id == id_juguete)
        }
    },
    modules: {},
})