<template>
    <Landing v-if="$route.path === '/landing'" @change-theme="changeTheme" />
    <Login v-else-if="$route.path === '/login'" />
    <FacaSeuPedido v-else-if="$route.path === '/faça-seu-pedido'"  />
    <DesignCoffe v-else-if="$route.path === '/designCoffe'"  />
    <CarBurguer v-else-if="$route.path === '/carrinho'"  />
    <Product v-else-if="$route.path === '/product'"  />
    <Error v-else-if="$route.path === '/error'" />
    <NotFound v-else-if="$route.path === '/notfound'" />
    <Access v-else-if="$route.path === '/access'" />
    <App v-else @change-theme="changeTheme" />
</template>

<script>
import EventBus from './AppEventBus';
import App from './App';
import Landing from './pages/LandingDemo';
import FacaSeuPedido from './pages/faça-seu-pedido';
import DesignCoffe from './pages/designCoffe';
import Product from './pages/Product';
import CarBurguer from './pages/CarBurguer';
import Login from './pages/Login';
import Error from './pages/Error';
import NotFound from './pages/NotFound';
import Access from './pages/Access';

export default {
    methods: {
        changeTheme(event) {
            let themeElement = document.getElementById('theme-link');
            themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.$appState.theme, event.theme));
            this.$appState.theme = event.theme;
            this.$appState.darkTheme = event.dark;
            EventBus.emit('change-theme', event);

            if (event.theme.startsWith('md')) {
                this.$primevue.config.ripple = true;
            }
        }
    },
    components: {
        FacaSeuPedido,
        App,
        Landing,
        Product,    
        CarBurguer,
        DesignCoffe,
        Login,
        Error,
        NotFound,
        Access
    }
}
</script>