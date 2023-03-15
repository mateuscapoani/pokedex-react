import './style.css'

export const Message = ({ show, error, success, message }) => {
  return (
    <>
      {show &&
        <div className={`message__content message__${error ? 'error' : success ? 'success' : 'info'}`}>
          <span className='message__text'>{message}</span>
        </div>
      }
    </>
  )
}
