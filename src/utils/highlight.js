import hljs from 'highlight.js/lib/highlight'

hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))

export default function (input) {
  return hljs.highlight('html', input).value
}