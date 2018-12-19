<template>
  <v-app>
    <div class="splash" v-if="show_splash">
      <div class="center-splash">
        <div class="title-text">Micah</div>
        <div class="sound-text">(turn on your sound)</div>
        <div class="outer">
          <div class="inner-main">
            <div class="circle-main"></div>
          </div>
        </div>
      </div>
    </div>
    <h1 :class="$store.state.title ? 'pl-5 pr-5 pt-3 border-bottom black--text' : 'pl-5 pr-5 pt-3 border-bottom blue--text'">
      {{$store.state.title ? $store.state.title : 'Micah Resume Channel'}}
      <v-slide-y-transition>
        <v-card v-show="$store.state.title" class="side-btn elevation-5" @click="$router.back()">
          <v-img src="/icons/back.png">
          </v-img>
        </v-card>
      </v-slide-y-transition>
    </h1>
    <div v-if="loading" class="outer" style="position: absolute; z-index: 8; left: 3rem; top: 3rem;">
      <div class="inner">
        <div class="circle"></div>
      </div>
    </div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="white" class="pa-3 border-top">
      <v-layout column>
        <v-layout row>
          <v-flex xs12 sm4>
            <v-card class="blue-card mb-3" @click="open('https://github.com/98mprice/resume')">
              <div class="text pa-3 text-xs-center">
                Fork me!
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <div class="text-xs-center text">
              <span style="color: #7BA2A1;">{{$store.state.points}}</span><br>Miicah Points
            </div>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="blue-card mb-3" @click="open('https://drive.google.com/file/d/17oMDRPZVd6_NYze74pzlYqup5fl8bYOi/view?usp=sharing')">
              <div class="text pa-3 text-xs-center">
                CV
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <iframe src="/sounds/silence.mp3" allow="autoplay" id="audio" style="display:none"></iframe>
        <audio v-if="!show_splash" controls="controls" autoplay loop style="display: block;
  margin-left: auto;
  margin-right: auto;">
          <source id="player" src="/sounds/wii.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        show_splash: true,
        loading: false
      }
    },
    methods: {
      goto: function(page) {
        this.$router.push({
          path: page
        })
      },
      open: function(url) {
        window.location = url;
      }
    },
    mounted: function() {
      var vm = this
      setTimeout(function(){
        vm.show_splash = false
      }, 2000);
    },
    watch: {
      '$route': function() {
        var vm = this
        vm.loading = true
        setTimeout(function(){
          vm.loading = false
          vm.$store.commit('inc_points')
        }, 1000);
  		},
    }
  }
</script>

<!--#03EDFF;-->
<style>
@font-face {
  font-family: 'Continuum';
  src: url('../assets/fonts/ContinuumLight.woff2') format('woff2'),
      url('../assets/fonts/ContinuumLight.woff') format('woff');
  font-weight: 50;
  font-style: normal;
}
@font-face {
  font-family: 'ContinuumMedium';
  src: url('../assets/fonts/ContinuumMedium.woff2') format('woff2'),
      url('../assets/fonts/ContinuumMedium.woff') format('woff');
  font-weight: 50;
  font-style: normal;
}
@font-face {
    font-family: 'Avenir 85';
    src: url('../assets/fonts/AvenirNextW01ThinRegular.woff2') format('woff2'),
        url('../assets/fonts/AvenirNextW01ThinRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

#app {
  background-color: white;
  cursor: url('../assets/cursor.png'), auto;
}

audio {
  cursor: url('../assets/cursor.png'), auto;
}

@-ms-keyframes spin {
    from { -ms-transform: rotate(0deg); }
    to { -ms-transform: rotate(360deg); }
}
@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

.splash {
  width: 100%; height: 100%; position: fixed; background-color: white; z-index: 8;
}
.center-splash {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.title-text {
  font-family: 'ContinuumMedium';
  font-size: 10vw;
  color: #818B80;
  font-weight: bold;
  letter-spacing: 3px;
}
.sound-text {
  font-size: 1em; font-weight: normal;
  font-family: 'Avenir 85';
  color: #818B80;
}
.inner-main {
  background-color:transparent;
  width:20vw;
  height:20vw;
  border-radius:500px;
  border: 10px #69F1FF solid;
  box-shadow: 0 0 8px #59F8FF, inset 0 0 8px #59F8FF;
  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-left: 3vw;
}
.circle-main {
  background-color:#69F1FF;
  width:5vw;
  height:5vw;
  border-radius:50px;
  box-shadow: 0 0 8px #59F8FF, inset 0 0 8px #59F8FF;
  transform: translate(0px, -6px);
}

.outer {
  transform: scale(1, 0.8);
}
.inner {
  background-color:transparent;
  width:60px;
  height:60px;
  border-radius:50px;
  border: 5px #E9EDE8 solid;
  box-shadow: 0 0 8px #DFE3DE, inset 0 0 8px #DFE3DE;
  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.circle {
  background-color:#E9EDE8;
  width:20px;
  height:20px;
  border-radius:50px;
  box-shadow: 0 0 8px #DFE3DE, inset 0 0 8px #DFE3DE;
  transform: translate(0px, -6px);
}

h1 {
  font-family: 'Avenir 85';
  color: #00d8e9;
  transform: scaleY(0.85);
  font-size: 3em;
  z-index: 5;
}
.border-bottom {
  background-image: linear-gradient(to right, grey 20%, rgba(255,255,255,0) 0%);
  background-position: bottom;
  background-size: 12px 2px;
  background-repeat: repeat-x;
}
.border-top {
  background-image: linear-gradient(to right, grey 20%, rgba(255,255,255,0) 0%) !important;
  background-position: top !important;
  background-size: 12px 2px !important;
  background-repeat: repeat-x !important;
}
.v-footer {
  height: 100% !important;
  align-items: flex-start !important;
}
.blue--text {
  color: #03F2FF !important;
}
.side-btn {
  width: 5rem;
  height: 5rem;
  padding: 12px;
  position: absolute;
  right: 10%;
  z-index: 5;
  border: 2px solid #BAFFFF !important;
  border-radius: 10px;
  transform: translate(0px, -60px);
}
.side-btn:hover {
  border: 3px solid #49CDE6 !important;
  box-shadow: 0px 0px 5px 2px #97F2FA !important;
}

.v-card.blue-card {
  border: 2px solid #BAFFFF !important;
  border-radius: 10px;
  background-image: linear-gradient(white, white, white, white, rgba(0, 0, 0, 0.03));
}
.text {
  font-family: 'Avenir 85';
  font-weight: bold;
  transform: scaleY(0.8);
  font-size: 1.3em;
  letter-spacing: 1px;
}
.v-card.blue-card > .v-image {
  transform: scaleY(0.7);
}
.v-card.blue-card:hover {
  border: 3px solid #49CDE6 !important;
  box-shadow: 0px 0px 5px 2px #97F2FA !important;
}
.v-card.green-card {
  border: 0px solid !important;
  border-radius: 30px;
  background-color: #EDFFFF;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.3) !important;
}
.v-card.green-card:hover {
  background-color: #BFFFFF;
}
.v-image {
  height: 100% !important;
}

.v-card.blue-outline {
  border: 2px solid #BAFFFF !important;
  border-radius: 10px;
  box-shadow: none;
}
.blue-heading {
  color: #03F2FF;
  border-bottom: 1px #03F2FF solid;
}
.blue-heading-top {
  color: #03F2FF;
  border-top: 1px #03F2FF solid;
}
.black-heading {
  color: black;
  border-bottom: 1px #03F2FF solid;
}

body {
  background: #111;
  color: white;
}

#switch {
  display: none;
}

.switch-label {
  display: inline-block;
  cursor: pointer;
  background: #fff;
  color: #111;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 2px #666;
}
.switch-label::after {
  content: "on";
}
.switch-label::before {
  content: " ";
  display: inline-block;
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background: #003321;
  margin-right: 10px;
  border: 1px solid #111;
}
.switch-label:active {
  box-shadow: none;
  transform: translate3d(0, 2px, 0);
}

#switch:checked + .switch-label::before {
  background: #22ff55;
}
#switch:checked + .switch-label::after {
  content: "off";
}

@keyframes flicker {
  0% {
    opacity: 0.4851;
  }
  5% {
    opacity: 0.0719;
  }
  10% {
    opacity: 0.0973;
  }
  15% {
    opacity: 0.00284;
  }
  20% {
    opacity: 0.74001;
  }
  25% {
    opacity: 0.88241;
  }
  30% {
    opacity: 0.04084;
  }
  35% {
    opacity: 0.26622;
  }
  40% {
    opacity: 0.60535;
  }
  45% {
    opacity: 0.176;
  }
  50% {
    opacity: 0.65594;
  }
  55% {
    opacity: 0.33699;
  }
  60% {
    opacity: 0.93279;
  }
  65% {
    opacity: 0.97672;
  }
  70% {
    opacity: 0.55413;
  }
  75% {
    opacity: 0.37294;
  }
  80% {
    opacity: 0.67567;
  }
  85% {
    opacity: 0.82781;
  }
  90% {
    opacity: 0.78451;
  }
  95% {
    opacity: 0.00106;
  }
  100% {
    opacity: 0.9924;
  }
}
#app {
  background: white;
  position: relative;
  overflow: hidden;
}
#app::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.015);
  opacity: 0;
  z-index: 100;
  pointer-events: none;
}
#app::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.03));
  z-index: 100;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}

/*#app::after {
  animation: flicker 0.15s infinite;
}*/

@keyframes turn-on {
  0% {
    transform: scale(1, 0.8) translate3d(0, 0, 0);
    -webkit-filter: brightness(30);
    filter: brightness(30);
    opacity: 1;
  }
  3.5% {
    transform: scale(1, 0.8) translate3d(0, 100%, 0);
  }
  3.6% {
    transform: scale(1, 0.8) translate3d(0, -100%, 0);
    opacity: 1;
  }
  9% {
    transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
    -webkit-filter: brightness(30);
    filter: brightness(30);
    opacity: 0;
  }
  11% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    -webkit-filter: contrast(0) brightness(0);
    filter: contrast(0) brightness(0);
    opacity: 0;
  }
  100% {
    transform: scale(1, 1) translate3d(0, 0, 0);
    -webkit-filter: contrast(1) brightness(1.2) saturate(1.3);
    filter: contrast(1) brightness(1.2) saturate(1.3);
    opacity: 1;
  }
}
@keyframes turn-off {
  0% {
    transform: scale(1, 1.3) translate3d(0, 0, 0);
    -webkit-filter: brightness(1);
    filter: brightness(1);
    opacity: 1;
  }
  60% {
    transform: scale(1.3, 0.001) translate3d(0, 0, 0);
    -webkit-filter: brightness(10);
    filter: brightness(10);
  }
  100% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: scale(0, 0.0001) translate3d(0, 0, 0);
    -webkit-filter: brightness(50);
    filter: brightness(50);
  }
}
.screen {
  width: 100%;
  height: 100%;
  border: none;
}

#switch ~ #app > .screen {
  animation: turn-off 0.55s cubic-bezier(0.23, 1, 0.32, 1);
  animation-fill-mode: forwards;
}

#switch:checked ~ #app > .screen {
  animation: turn-on 4s linear;
  animation-fill-mode: forwards;
}

@keyframes overlay-anim {
  0% {
    visibility: hidden;
  }
  20% {
    visibility: hidden;
  }
  21% {
    visibility: visible;
  }
  100% {
    visibility: hidden;
  }
}
.overlay {
  color: #00FF00;
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 60px;
  visibility: hidden;
  pointer-events: none;
}

#switch:checked ~ #app .overlay {
  animation: overlay-anim 5s linear;
  animation-fill-mode: forwards;
}

</style>
