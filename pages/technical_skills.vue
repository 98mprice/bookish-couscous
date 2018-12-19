<template>
  <v-layout column class="text">
    Languages ​​- ​Java​ (7 years), ​Javascript​ (3 years), ​Matlab​ (3 years), ​C​ (2 years), ​Python​ (1 year), ​x86 Assembly​ (4 months), PHP​ (4 months)<br>
    Tools/Frameworks ​​- ​jQuery​, ​Vue.js,​ ​Vuetify,​ ​Webpack,​ ​Nuxt​, ​Spring MVC​, ​Node.js​, ​Express,​ ​Socket.io​, ​Electron.js​, Tensorflow.js,​ ​Librosa,​ ​Keras​, ​Flask,​ ​Bootstrap​, ​Cordova​, ​pthreads,​ ​OpenMP​, ​LaTeX<br>
    Databases​​ - ​MySQL​, ​MongoDB
  </v-layout>
</template>

<script>
export default {
  data () {
     return {

     }
   },
   mounted: function() {
     this.$store.commit('set_title', 'Technical Skills')
   }
}
</script>
