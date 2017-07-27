import marked from 'marked3'
import createRender from './renderer'

export default (text, opts) => {
  return marked(text, {
    renderer: createRender(opts),
    linksInNewTab: true
  })
}
