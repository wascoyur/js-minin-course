import {Block} from './classes/blocks'
import image from './assets/image.png'
export const model = [
  new Block('title', 'Конструктор сайтов', options:{
    tag:'h2'
  }),
  {type: 'title', value: 'Test Title', options:{
    tag:'h2',
    styles: 'background: darkred; color: #fff; text-align:center'
  }},

  {type:'image', value: image, options:{
    styles: 'padding:2rem 0; display: flex; justify-content: center',
    alt:'my image',
    imageStyles: 'width: 500px; hight: auto;'
  }},

  { type: 'text', value: 'Lorem ipsum dolor sit, amet consectetur adipisicing ', options:{
    styles: 'background: darkblue; color: yellow;'
  }},
  {type:'textColumns', value:[
    '1 text',
    '2 text',
    '3 text'
  ], options:{
      styles: 'padding: 1rem;'
  }}
]
