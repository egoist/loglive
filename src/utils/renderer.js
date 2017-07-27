import marked from 'marked3'
import timeago from 'date-fns/distance_in_words_to_now'
import parseDate from 'date-fns/parse'

const COLORS = [
  '#9e0734',
  '#016b18',
  '#4e6d00',
  '#42890c',
  '#457c0b',
  '#d1b908',
  '#a000d1',
  '#458704',
  '#0a1172',
  '#4c0172',
  '#377705',
  '#10a870',
  '#047531',
  '#870004',
  '#149903',
  '#01722c',
  '#073870',
  '#0f0d87',
  '#bf07bf',
  '#af0002'
]

const randomColor = () => {
  return COLORS[Math.floor(Math.random() * 20)]
}

const TITLE_REGEX = /^([^(]+)(?:\(([^)]+)\))?$/

const matchChangelogTitle = title => {
  return TITLE_REGEX.exec(title)
}

export default ({ site, colors } = {}) => {
  const renderer = new marked.Renderer()

  const originalHeading = renderer.heading.bind(renderer)

  renderer.heading = (text, level, raw) => {
    if (level === 1) {
      site.title = text
      return ''
    }

    if (level === 2) {
      const matched = matchChangelogTitle(raw)
      if (matched) {
        let [, title, date = ''] = matched
        title = title.trim()
        return `<div class="loglive-logtitle">${originalHeading(
          title,
          level,
          title
        )}<time class="loglive-date" datetime="${date &&
          parseDate(date)}">${date && timeago(date)}</time></div>`
      }
    }

    if (level === 3) {
      let res = '<div class="loglive-sep"></div>'
      const color = colors[raw.trim()] || randomColor()
      res +=
        originalHeading(text, level, raw).replace(
          /^<h3/,
          `<h3 style="background-color: ${color}" class="loglive-h3"`
        ) + '<div class="clearfix"></div>'
      return res
    }

    return originalHeading(text, level, raw)
  }

  return renderer
}
