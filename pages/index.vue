<template>
  <v-layout column>
    <v-layout row wrap>
      <v-flex xs12 sm4 @click="goto('personal_projects')">
        <main-card
          text="Personal Projects"
          tooltip="I just think they're neat."
          src="/icons/icons.png">
        </main-card>
      </v-flex>
      <v-flex xs12 sm4 @click="goto('work_experience')">
        <main-card
          text="Work Experience"
          tooltip="Basically just my internship"
          src="/icons/questionmark.png">
        </main-card>
      </v-flex>
      <v-flex xs12 sm4 @click="goto('technical_skills')">
        <main-card
          text="Technical Skills"
          tooltip="Programming Languages,<br> Frameworks & Tools"
          src="/icons/controller.png">
        </main-card>
      </v-flex>
      <v-flex xs12 sm8 offset-sm2>
        <v-card class="blue-card mb-3" @click="goto('education')">
          <div class="text pa-3 text-xs-center">
            Education
          </div>
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 md4>
        <v-card class="green-card ml-3 mr-3 mb-3" @click="open('https://www.github.com/98mprice')">
          <div class="text pa-3 text-xs-center">
            Github
          </div>
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 md4>
        <v-card class="green-card ml-3 mr-3 mb-3" @click="open('https://stackoverflow.com/users/2276831/98mprice?tab=profile')">
          <div class="text pa-3 text-xs-center">
            Stack Overflow
          </div>
        </v-card>
      </v-flex>
      <v-flex xs12 sm8 md4>
        <v-card class="green-card ml-3 mr-3 mb-3" @click="open('https://www.reddit.com/user/oppai_suika/')">
          <div class="text pa-3 text-xs-center">
            Reddit
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import MainCard from '~/components/MainCard'
export default {
  components: {
      MainCard
  },
  data () {
     return {

     }
   },
   methods: {
     goto: function(page) {
       console.log('goto clicked')
       this.$router.push({
         path: page
       })
     },
     open: function(url) {
       window.location = url;
     }
   },
   mounted: function() {
     this.$store.commit('set_title', null)
   }
}
</script>
