const vue = require('vue')

const { createApp } = vue

createApp({
  data () {
    return {
      message: 'Hello Vue!'
    }
  }
}).mount('#app')
