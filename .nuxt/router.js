import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0c024a51 = () => interopDefault(import('../pages/education.vue' /* webpackChunkName: "pages/education" */))
const _920b867a = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _9e37e67c = () => interopDefault(import('../pages/personal_projects.vue' /* webpackChunkName: "pages/personal_projects" */))
const _c4017a6a = () => interopDefault(import('../pages/technical_skills.vue' /* webpackChunkName: "pages/technical_skills" */))
const _0d8efd41 = () => interopDefault(import('../pages/work_experience.vue' /* webpackChunkName: "pages/work_experience" */))
const _9548cba6 = () => interopDefault(import('../pages/project/_id.vue' /* webpackChunkName: "pages/project/_id" */))
const _747816fb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/education",
      component: _0c024a51,
      name: "education"
    }, {
      path: "/inspire",
      component: _920b867a,
      name: "inspire"
    }, {
      path: "/personal_projects",
      component: _9e37e67c,
      name: "personal_projects"
    }, {
      path: "/technical_skills",
      component: _c4017a6a,
      name: "technical_skills"
    }, {
      path: "/work_experience",
      component: _0d8efd41,
      name: "work_experience"
    }, {
      path: "/project/:id?",
      component: _9548cba6,
      name: "project-id"
    }, {
      path: "/",
      component: _747816fb,
      name: "index"
    }],

    fallback: false
  })
}
