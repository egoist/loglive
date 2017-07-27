Object.assign = Object.assign || require('nano-assign')

if (typeof window !== 'undefined') {
   window.Promise = window.Promise || require('promise-polyfill')
}
