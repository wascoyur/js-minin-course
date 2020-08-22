import {TitleBlock, ImageBlock, TextBlock, TextColumnBlock} from './classes/blocks'
import image from './assets/image.png'
export const model = [
  new TitleBlock( 'Конструктор сайтов', {
    tag:'h2',
    styles: 'background: linear-gradient(to right, #ff0099, #493240); color:#fff; padding: 1.5rem; text-align: center'
  }),
  new ImageBlock(image,{
    styles: 'padding:2rem 0; display: flex; justify-content: center',
    alt:'my image',
    imageStyles: 'width: 500px; hight: auto;'
  }),

  new TextBlock('Lorem ipsum dolor sit, amet consectetur adipisicing ',{
    styles: 'padding: 2rem 0; color: #fff; background: linear-gradient(to bottom, #8e2de2,#4a00e0);'
  }),

  new TextColumnBlock([
    'Приложение на чистом JS',
    'Узнаешь как работают принципы SOLID',
    'JS это просто'],
    {styles: 'padding: 2rem 0; color:#fff; background:linear-gradient(to bottom, #8e2de2, #4a00e0);'}
  ),

]
