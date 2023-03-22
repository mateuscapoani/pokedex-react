import logo from '../../../assets/images/logo.png'
import './style.css'

export const Image = ({ size, src, alt }) => {

  const renderImage = () => {
    const styledSize = {
      height: `${size ?? 100}px`
    }

    if (src) {
      return (
        <img
          src={src}
          alt={alt}
          style={styledSize}
        />
      )
    } else {
      return (
        <div className='image__content'>
          <img
            src={logo}
            alt={alt}
            style={styledSize}
            className='image__no-image'
          />
          <span className='image__no-image-text'>Sem Imagem</span>
        </div >
      )
    }
  }

  return renderImage()
}
