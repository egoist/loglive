// eslint-disable-next-line import/no-unassigned-import
import './polyfills'
import Vue from 'vue'
import App from './components/App.vue'

export default class LogLive {
  constructor({ el, changelog, colors } = {}) {
    return new Vue({
      el,
      render() {
        return <App colors={colors} changelog={changelog} />
      }
    })
  }
}
