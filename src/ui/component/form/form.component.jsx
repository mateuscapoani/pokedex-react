export const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className='form__form'>
      {children}
    </form>
  )
}
