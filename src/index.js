import './styles/main.css'
import {model} from './model'

model.forEach(block => {
  if(block.type === 'title'){
    html = title(block)
  } else if(block.type ==='text'){
    html = text(block)
  } else if(block.type === 'textColumns'){

  }
})
function title(block){
  return`
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `
}
function text(block) {
  return`
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `
}
function textColumns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
  return `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `
}
