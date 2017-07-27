<template>
  <div id="app">
    <header class="loglive-header" v-if="site">
      <div class="container">
        <h1 class="loglive-title">
          <a :href="url"><strong>{{ site.title }} </strong> changelog</a>
        </h1>
        <div class="loglive-website" v-if="site.website"><a :href="site.website">{{ getDomain(site.website) }}</a></div>
      </div>
    </header>
    <div class="loglive-body">
      <div class="markdown-body container" v-html="html"></div>
    </div>
  </div>
</template>

<script>
import fetch from 'unfetch'
import fm from '../utils/front-matter'
import markdown from '../utils/markdown'

export default {
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
      fetch(this.changelog)
        .then(res => res.text())
        .then(res => {
          const { body, attributes } = fm(res)
          this.site = attributes
          this.html = markdown(body, {
            site: this.site,
            colors: this.colors
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

<style>
body {
  margin: 0;
  font: 14px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 560px;
  margin: auto;
}

.clearfix {
  clear: both;
}
</style>


<style lang="stylus">
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
  padding: 3rem 1rem 5rem 1.25rem
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
      padding-top: @margin-top
    .loglive-date
      font-size: 13px
      position: absolute
      left: -130px
      top: 50%
      margin-top: 26px
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
</style>
