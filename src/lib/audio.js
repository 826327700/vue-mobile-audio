import audio from './audio.vue'
export default {
    install:function(Vue){
        window.audioList=[]
        Vue.component("m-audio",audio);
    }
}