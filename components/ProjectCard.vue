<template>
  <v-card class="blue-card pa-3" @click="goto(`/project/${id}`)">
    <v-layout v-if="$vuetify.breakpoint.smAndUp" row style="height: 12rem;">
      <v-img :src="icon_src" max-width="10rem"></v-img>
      <v-layout column class="pl-3">
        <div class="black-heading pb-3 mb-2">
          {{name}}
        </div>
        {{short_description}}<br>
        {{short_languages}}
      </v-layout>
    </v-layout>
    <v-layout v-else column>
      <v-img :src="icon_src" max-height="10rem"></v-img>
      <v-layout column class="pt-3">
        <div class="black-heading pb-3 mb-2">
          {{name}}
        </div>
        {{short_description}}<br>
        {{short_languages}}
      </v-layout>
    </v-layout>
  </v-card>
</template>

<script>
export default {
    name: 'project-card',
    props: [ 'name', 'short_description', 'short_languages', 'icon_src', 'id' ],
    methods: {
      goto: function(page) {
        console.log('goto clicked')
        this.$router.push({
          path: page
        })
      }
    }
}
</script>
