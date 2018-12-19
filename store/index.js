export const state = () => ({
  sidebar: false,
  title: null,
  points: 0,
  projects: [
    {
      id: 'pyAudioClassification',
      name: 'pyAudioClassification',
      short_description: 'PyPI Library comprised of simple calls to classify an audio dataset',
      icon_src: '/personal_projects/pyAudioClassification/icon.png',
      short_languages: 'Python',
      long_languages: '​Python​, ​Keras',
      year: '2018',
      video_src: '/personal_projects/pyAudioClassification/video.mov',
      links: [
        {
          name: 'Github',
          src: 'https://www.github.com/98mprice/pyAudioClassification'
        }
      ]
    },
    {
      id: 'sneaker-generator',
      name: 'sneaker-generator',
      short_description: 'Neural Network that makes shoes 👟',
      long_description: 'Neural Network (DCGAN) that makes shoes. Featured on Product Hunt',
      icon_src: '/personal_projects/sneaker-generator/icon.png',
      short_languages: 'Javascript, Python',
      long_languages: 'Python,​ ​Keras​, ​Node.js​, ​Tensorflow.js​, ​Vue.js​, ​Vuetify',
      year: '2018',
      screenshot_src: '/personal_projects/sneaker-generator/screenshot.png',
      links: [
        {
          name: 'Demo',
          src: 'https://github.io/sneaker-generator'
        },
        {
          name: 'Github',
          src: 'https://www.github.com/98mprice/sneaker-generator'
        },
        {
          name: 'Product Hunt',
          src: 'https://www.producthunt.com/posts/sneaker-generator'
        }
      ]
    },
    {
      id: 'findanewyoutuber',
      name: 'findanewyoutuber',
      short_description: 'Search engine to find youtubers',
      long_description: 'Search engine to find youtubers. Models used to predict MBTI (personality), sentiment, age, gender',
      icon_src: '/personal_projects/findanewyoutuber/icon.gif',
      short_languages: 'Javascript, Python',
      long_languages: 'Front-end: ​Vue.js, Vuetify, Nuxt, Webpack, Node.js, ​back-end: ​Python,​ ​Flask, Keras, MongoDB',
      year: '2018',
      video_src: '/personal_projects/findanewyoutuber/video.mov',
      links: [
        {
          name: 'Demo',
          src: 'https://www.findanewyoutuber.fun'
        },
        {
          name: 'Github',
          src: 'https://www.github.com/98mprice/findanewyoutuber'
        }
      ]
    },
    {
      id: 'memebroker',
      name: 'Memebroker',
      short_description: 'Buy & sell memes to try & make a profit',
      long_description: 'Buy & sell memes to try & make a profit. Featured on Vice/ Motherboard',
      icon_src: '/personal_projects/memebroker/icon.png',
      short_languages: 'Java, Javascript',
      long_languages: 'Android, Node.js​',
      year: '2017',
      screenshot_src: '/personal_projects/memebroker/screenshot.png',
      video_src: 'https://video.twimg.com/amplify_video/834639677835575296/vid/320x180/aYs7jRx2erJ0Gkxz.mp4',
      links: [
        {
          name: 'Google Play',
          src: 'https://play.google.com/store/apps/details?id=com.amble43.MemeBroker&hl=en_ZA'
        },
        {
          name: 'Motherboard',
          src: 'https://motherboard.vice.com/en_us/article/jpapq4/buy-low-sell-high-in-the-meme-economy-with-memebroker'
        },
        {
          name: 'Vice',
          src: 'https://twitter.com/vicecanada/status/834787419312369667?s=08'
        }
      ]
    },
    {
      id: 'psone_css',
      name: 'PSone.css',
      short_description: 'Playstation 1 style CSS Framework, inspired by NES.css',
      long_description: 'Playstation 1 style CSS Framework, inspired by NES.css. 100+ stars on Github',
      icon_src: '/personal_projects/PSOne_css/icon.jpg',
      short_languages: 'CSS',
      year: '2018',
      screenshot_src: '/personal_projects/PSOne_css/screenshot.jpg',
      links: [
        {
          name: 'Demo',
          src: 'https://98mprice.github.io/PSone.css/'
        },
        {
          name: 'Github',
          src: 'https://www.github.com/98mprice/PSone.css'
        }
      ]
    },
    {
      id: 'karma_academy',
      name: 'Karma Academy',
      short_description: 'Dating sim written by Reddit',
      long_description: 'An experiment- what happens when you give the internet free-roam to write their own dating sim?',
      icon_src: '/personal_projects/karma_academy/icon.png',
      short_languages: 'Javascript, Python',
      long_languages: '​Vue.js, Vuetify, Flask, MongoDB',
      year: '2018',
      video_src: '/personal_projects/karma_academy/video.mp4',
      links: [
        {
          name: 'Demo',
          src: 'https://98mprice.gitlab.io/karma_academy/'
        },
        {
          name: 'Github',
          src: 'https://www.github.com/98mprice/karma-academy'
        }
      ]
    },
    {
      id: 'word_count_camera',
      name: 'Word Count Camera',
      short_description: 'Uses Tesseract (OCR) to read number of words from photos',
      icon_src: '/personal_projects/word_count_camera/icon.jpeg',
      short_languages: 'Java',
      long_languages: '​Android',
      year: '2017',
      screenshot_src: '/personal_projects/word_count_camera/screenshot.png',
      links: [
        {
          name: 'Google Play',
          src: 'https://play.google.com/store/apps/details?id=com.amble43.wordcountcamera'
        }
      ]
    }
  ]
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  set_title (state, title) {
    state.title = title
  },
  inc_points(state) {
    state.points += 100
  }
}
