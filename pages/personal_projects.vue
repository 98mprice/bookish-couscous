<template>
  <v-layout column>
    <project-card v-for="project in $store.state.projects" class="text"
      :name="project.name"
      :short_description="project.short_description"
      :short_languages="project.short_languages"
      :icon_src="project.icon_src"
      :id="project.id"
    ></project-card>
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

     }
   },
   mounted: function() {
     this.$store.commit('set_title', 'Personal Projects')
   },
}
</script>
