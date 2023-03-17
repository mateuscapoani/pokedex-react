import './style.css'

export const Message = ({ show, error, success, message, blockSpace }) => {
  return (
    <>
      {show ?
        <div className={`message__content message__${error ? 'error' : success ? 'success' : 'info'} ${blockSpace && 'message__block-space'}`}>
          <span className='message__text'>{message}</span>
        </div>
        :
        blockSpace && <div className='message__content message__block-space' />
      }
    </>
  )
}
