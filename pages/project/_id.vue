<template>
  <v-layout v-if="project" column>
    <div class="little-blue-title pl-1">{{project.short_languages}}</div>
    <v-card class="blue-corner mb-3">
      <v-layout column>
        <v-layout row style="height: 12rem;">
          <v-img
            v-if="project.screenshot_src" :src="project.screenshot_src" contain width="10rem"
            class="mt-1 grey lighten-3"
          >
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
          <video v-if="project.video_src" height="100%" autoplay loop muted class="pl-1 pt-2">
            <source :src="project.video_src" type="video/mp4" />
          </video>
          <v-layout column class="pl-3 pt-3">
            {{project.long_description ? project.long_description : project.short_description}}<br>
            {{project.long_languages ? project.long_languages : project.short_languages}}<br>
            {{project.year}}
          </v-layout>
        </v-layout>
        <div class="blue-heading-top pt-2 mt-2 mb-2 ml-2 mr-2 text-xs-center">
          {{project.name}}
        </div>
      </v-layout>
    </v-card>
    <v-layout row>
      <v-btn
        block
        v-for="link in project.links"
        class="ml-3 mr-3 text"
        @click="open(link.src)">{{link.name}}</v-btn>
    </v-layout>
  </v-layout>
</template>

<script>
import ProjectCard from '~/components/ProjectCard'
export default {
  components: {
      ProjectCard
  },
  data () {
     return {
       project: null
     }
   },
   mounted: function() {
     this.project = this.$store.state.projects.filter(obj => {
        return obj.id === this.$route.params.id
     })[0]
     this.$store.commit('set_title', this.project.name)
   },
   methods: {
     open: function(url) {
       window.location = url;
     }
   }
}
</script>

<style>
.v-card.blue-corner {
  border: 2px solid #BAFFFF !important;
  border-radius: 0px 10px 10px 10px;
  box-shadow: none;
}
.little-blue-title {
  background-color: #BAFFFF;
  border-radius: 0px 10px 0px 0px;
  width: 40%;
  color: white;
  font-weight: bold;
}
.v-btn {
  background-color: #02E7FF !important;
  border-radius: 10px;
  text-transform: capitalize;
  font-family: 'Avenir 85';
  color: white !important;
  font-weight: bold;
  height: 5rem;
  transition: 0.2s linear all;
  cursor: url('../../assets/cursor.png'), auto;
}
.v-btn:after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 5px;
    right: 5px;
    border-radius: 5px;
    border: 1px solid white;
}
.v-btn:hover {
  background-image: linear-gradient(#FFCA9B, #FF4801, #FFF260);
  box-shadow: 0px 0px 5px 2px #E65C2B !important;
}
.v-btn:hover:after {
  top: 1px;
  bottom: 1px;
  left: 1px;
  right: 1px;
  border: 2px solid #FFD29A;
}
</style>
