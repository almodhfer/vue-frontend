import Vue from "vue";
import Vuetify from "vuetify/lib";
import ar from 'vuetify/src/locale/ar'
import en from 'vuetify/src/locale/en'


Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
    lang: {
        locales: { ar, en },
        current: 'ar',
    },
});
