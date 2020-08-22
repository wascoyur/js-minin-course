export class Block{
  constructor(type, value, options){
    this.type = type
    this.value = value
    this.options = options
  }
  toHTML(){
    throw new Error('Метод toHTML должен быть реализован')
  }
}
export class TitleBlock extends Block{
  constructor(value, options){
    super('title', value, options);
  }
  toHTML(){
    const {tag, styles} = this.options
    return row(col(`
      <${tag}>${this.value}</${tag}>
    `), styles)
  }
}
