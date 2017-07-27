<template>
  <div id="loglive-app">
    <header class="loglive-header" v-if="site">
      <div class="container">
        <h1 class="loglive-title">
          <a :href="url"><strong>{{ site.title }} </strong> changelog</a>
        </h1>
        <div class="loglive-website" v-if="site.website"><a :href="site.website">{{ getDomain(site.website) }}</a></div>
      </div>
    </header>
    <div class="loglive-loading" v-else>
      Loading...
    </div>
    <transition name="fade">
      <div class="loglive-body" v-if="html">
        <div class="markdown-body container" v-html="html"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import fetch from 'unfetch'
import fm from '../utils/front-matter'
import markdown from '../utils/markdown'

export default {
  name: 'LogLive',

  props: ['changelog', 'colors'],

  data() {
    return {
      html: '',
      site: null,
      url: location.origin + location.pathname
    }
  },

  created() {
    this.fetchFile()
  },

  methods: {
    fetchFile() {
      const changelog = this.changelog || '/CHANGELOG.md'
      fetch(changelog)
        .then(res => res.text())
        .then(res => {
          const { body, attributes } = fm(res)
          this.site = attributes
          this.html = markdown(body, {
            site: this.site,
            colors: {
              Fix: '#b26cee',
              New: '#3778ff',
              Breaking: '#ff9800',
              ...(this.colors || {})
            }
          })
        })
    },

    getDomain(url) {
      return url.replace(/^https?:\/\//, '')
    }
  }
}
</script>

<style src="github-markdown-css/github-markdown.css"></style>

<style lang="stylus">
body
  margin: 0
  font: 14px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif

*
  box-sizing: border-box
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
  -moz-osx-font-smoothing: grayscale

.container
  max-width: 560px
  margin: auto
  padding: 0 10px

.clearfix
  clear: both

.markdown-body
  a
    color: #1C90F3

  pre
    border: 1px solid rgb(234, 234, 234)
    border-radius: 0
    background-color: transparent

  code
    color: #bd10e0
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif
    font-size: 0.9em
    white-space: pre-wrap
    background-color: transparent
    &:before
      content: '`'
    &:after
      content: '`'

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>

<style lang="stylus">
.loglive-loading
  font-size: 2rem
  font-weight: 300
  color: #b1b0b0
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  display: flex
  align-items: center
  justify-content: center
  animation: 1s infinite fade-in-out

@keyframes fade-in-out
  from
    opacity: 1

  50%
    opacity: .5

  to
    opacity: 1

.loglive-header
  border-bottom: 1px solid #f3f3f3
  padding: 1rem 0
  .loglive-title
    font-weight: 300
    font-size: 1.125rem
    margin: 0
    a
      color: #333
      text-decoration: none
      &:hover
        text-decoration: underline
      strong
        font-weight: 500
  .loglive-website
    a
      color: rgba(71,82,93,.35)
      text-decoration: none
      &:hover
        text-decoration: underline

.loglive-body
  padding: 3rem 0 5rem 0
  position: relative
  .container
    position: relative

  .loglive-sep
    margin-top: 30px

  h1
    margin: 0
    border-bottom: none

  ul, ol
    padding-left: 20px
    margin-left: 0

  h2
    padding-bottom: 0
    margin-bottom: 0
    border-bottom: none

  .loglive-logtitle
    margin-top: 50px
    position: relative
    &:not(:first-child)
      border-top: 1px solid #f3f3f3
      padding-top: @margin-top - 10px
      .loglive-date
        margin-top: @margin-top - 10px + 24px + 2px
    .loglive-date
      font-size: 13px
      color: rgba(71,82,93,.4)

  .loglive-h3
    margin-top: 0

  .loglive-h3
    color: white
    float: left
    font-weight: 300
    padding: 3px 12px
    font-size: 12px
    border-radius: 33px

@media screen and (min-width: 768px)
  .loglive-logtitle
    .loglive-date
      position: absolute
      left: -130px
      top: 2px
</style>
