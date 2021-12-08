const html = document.getElementById("html")
const css = document.getElementById("css")
const js = document.getElementById("js")
const codemirror = document.querySelector('.CodeMirror');
const preview = document.querySelector('.preview')

//Variables
var $html = {options:{
  value: ''
}}
var $css
var $js

function getDimension2(e,w,h){
  e.style.width = `${w/2}px`
  e.style.height = `${h/2}px`
}

const config = {
  theme: 'ayu-dark',
  extraKeys: {"Ctrl-Space": "autocomplete"},
  value: '',
  lineNumbers: true
}

window.onload = function() {
    $html = CodeMirror(html, {
      mode: "text/html",
      autoCloseTags: true,
      ...config
    });
    
    $css = CodeMirror(css, {
      mode: "text/css",
      ...config
    });

    $js = CodeMirror(js, {
      mode: {
        name: "javascript", 
        globalVars: true
      },
      hint: CodeMirror.hint.javascript,
      ...config
    });

};

function ConvertirHTML() {
  return `
      <!DOCTYPE html>
      <html>
          <head>
            <style>
              ${$css.getValue()}
            </style>
          </head>
          <body>
          ${$html.getValue()}
          <script>${$js.getValue()}</script>
          </body>
      </html>
  `
}

html.addEventListener('keyup',(e)=>{
  const template = ConvertirHTML()
  preview.setAttribute('srcdoc',template)
})

css.addEventListener('keyup',(e)=>{
  const template = ConvertirHTML()
  preview.setAttribute('srcdoc',template)
})

js.addEventListener('keyup',(e)=>{
  const template = ConvertirHTML()
  preview.setAttribute('srcdoc',template)
})
