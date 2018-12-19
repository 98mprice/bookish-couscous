<template>
  <v-layout column class="text">
    <v-card class="blue-outline pa-3">
      <div class="blue-heading text-xs-center pb-3 mb-2">
        B.Sc. Mathematical Sciences (Computer Science) ​​- 2018
      </div>
      ● Main course modules included ​Data Structures and Algorithms​, ​Computer Architecture​, ​Concurrency​, ​Databases and
      Web Centric Programming,​ ​Program Design​, ​Computer Networks ​and ​Mathematics (Calculus & Linear Algebra)<br>
      ● Secondary modules included ​Probability Theory and Statistics​, ​Modelling in Mechanics​, ​Applied Matrix Methods​,
      Applied Differential Equations​, A​pplied Discrete Mathematics​,​ Numerical methods​,​ Applied Fourier analysis​,​ Computer Vision​ and ​Operations research
    </v-card>
    <v-card class="blue-outline pa-3 mt-3">
      <div class="blue-heading text-xs-center pb-3 mb-2">
        Edgemead High School ​​- 2013
      </div>
      ● Six Distinctions​ (2013), ​Academic Colours​ (2009, 11-12), A​ cademic Honours​ (2010)
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data () {
     return {

     }
   },
   mounted: function() {
     this.$store.commit('set_title', 'Education')
   }
}
</script>
