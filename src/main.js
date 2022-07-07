import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'

// Views
import New from './views/New.vue'
import Login from './views/Login.vue'
import Support from './views/Support.vue'
import About from './views/About.vue'
import NotFound from './views/404.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home, meta: {title: 'URGames | Home'}},
        { path: '/new', name: 'New', component: New, meta: {title: 'URGames | New'}},
        { path: '/login', name: 'Login', component: Login, meta: {title: 'URGames | Login'}},
        { path: '/support', name: 'Support', component: Support, meta: {title: 'URGames | Support'}},
        { path: '/about', name: 'About', component: About, meta: {title: 'URGames | About'}},
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {title: 'URGames | NotFound'}}
        // { path: '/quit', name: 'Quit', component: Quit}
    ]
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'URGames';
    next()
})
  

createApp(App)
.use(router)
.mount('#app')


