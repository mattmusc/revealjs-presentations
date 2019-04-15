Reveal.configure({
  slideNumber: true
});
// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  dependencies: [
    {src: '../js/plugin/markdown/marked.js'},
    {src: '../js/plugin/markdown/markdown.js'},
    {src: '../js/plugin/notes/notes.js', async: true},
    {src: '../js/plugin/highlight/highlight.js', async: true}
  ]
});
