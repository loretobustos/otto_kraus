import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Juguetes from '../views/Juguetes.vue'
import Agregar from '../components/Agregar.vue'
import Editar from '../components/Editar.vue'
import Eliminar from '../components/Eliminar.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/agregar',
        name: 'Agregar',
        component: Agregar,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/editar',
        name: 'Editar',
        component: Editar,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/eliminar',
        name: 'Eliminar',
        component: Eliminar,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/juguetes',
        name: 'Juguetes',
        component: Juguetes,
        meta: {
            autenticado: true,
        }
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            autenticado: true,
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes
    })
    //guards

router.beforeEach((to, from, next) => {
    let user = firebase.auth().currentUser;

    let private_rute = to.matched.some((record) => record.meta.autenticado)

    if (private_rute && !user) {
        next({ name: 'Login' })
    } else if (!private_rute && user) {
        next('/home')
    } else next()
});


export default router