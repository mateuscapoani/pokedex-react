import './style.css'

export const Container = ({ children }) => {
  return (
    <div className='container__content'>
      {children}
    </div>
  )
}
