import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

//language data
import zhTW from './lang/zh-tw'
import enUS from './lang/en-us'


let userLang = sessionStorage.getItem("cherri-chat-language") === "en-us" ? "en-us" : "zh-tw"

const messages = {
    'zh-tw': zhTW,
    'en-us': enUS
} 

const i18n = new VueI18n({
    locale: userLang,
    messages
})

export default i18n