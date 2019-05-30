import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Your Vue.js App',
        guide: 'For a guide and recipes on how to configure / customize this project,',
        userBehavior: 'Users behavior',
        plugins: 'Installed CLI Plugins',
        capacity: 'Capacity',
        stats: 'Stats',
        settings: 'Settings'
    },
    'es': {
        welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
        guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
        userBehavior: 'Comportamiento de usuarios',
        plugins: 'Plugins de CLI instalados',
        capacity: 'Capacidad',
        stats: 'Estadísticas',
        settings: 'Opciones'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;