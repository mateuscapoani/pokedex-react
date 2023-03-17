import './style.css'

export const Box = ({ alignItens, column, padding, children }) => {
  return (
    <div className={`box__content ${alignItens && 'box__center'} ${column && 'box__column'} ${padding && 'box__padding'}`}>
      {children}
    </div>
  )
}
