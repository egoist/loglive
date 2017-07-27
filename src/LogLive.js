import './polyfills'
import Vue from 'vue'
import App from './components/App.vue'

export default class LogLive {
  constructor({
    el = '#app',
    changelog = '/CHANGELOG.md',
    colors
  } = {}) {
    colors = {
      Fix: '#b26cee',
      New: '#3778ff',
      Breaking: '#ff9800',
      ...colors
    }

    return new Vue({
      el,
      render() {
        return <App
          colors={colors}
          changelog={changelog}
        />
      }
    })
  }
}
