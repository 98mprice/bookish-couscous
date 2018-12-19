<template>
  <v-layout column class="text">
    <v-card class="blue-outline pa-3">
      <div class="blue-heading text-xs-center pb-3 mb-2">
        Glu Global ​​- Full Stack Intern (Jan 2017 - Apr 2018)
      </div>
      ● Worked with ​Bootstrap​ & ​jQuery​ on front-end and ​Java​ (​Spring MVC​) & ​MySQL​ on back-end<br>
      ● Wrote an API Portal for Swagger JSON files<br>
      ● Used ​Node.js​ to create a regression test-harness
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
     this.$store.commit('set_title', 'Work Experience')
   }
}
</script>
