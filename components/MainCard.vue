<template>
  <v-tooltip top nudge-bottom=20 nudge-left="30%">
    <v-card class="ml-3 mr-3 mb-3 text-xs-center elevation-5 blue-card" slot="activator">
      <v-img
        :src="src"
        class="ml-5 mr-5 mt-2"
        height="100%"
      ></v-img>
      <div class="text pa-3">
        {{text}}
      </div>
    </v-card>
    <span v-html="tooltip"></span>
  </v-tooltip>
</template>

<script>
export default {
    name: 'main-card',
    props: [ 'text', 'tooltip', 'src' ]
}
</script>

<style>
.v-tooltip__content {
  background-color: #B0FFFF;
  border-radius: 25px;
  font-family: 'Avenir 85';
  color: black;
  font-weight: bold;
  padding: 1em 3.5em 0.5em 3.5em !important;
  letter-spacing: 0.1;
  opacity: 1 !important;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3) !important;
}
.v-tooltip__content > span {
  display: inline-block;
  transform: scale(1.2, 1);
  font-size: 1em;
  -webkit-transform: scale(1.2, 1); /* Safari and Chrome */
  -moz-transform: scale(1, 1.5); /* Firefox */
  -ms-transform: scale(1, 1.5); /* IE 9+ */
  -o-transform: scale(1, 1.5); /* Opera */
}
</style>
