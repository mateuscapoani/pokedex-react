import logo from '../../../assets/images/logo.png'

export const Image = ({ size, src, alt }) => {

  let styledSize = {
    height: `${size ?? 100}px`
  }

  if (!src) {
    styledSize = {
      ...styledSize,
      filter: 'grayscale(100%)'
    }
  }

  return (
    <img
      src={src || logo}
      alt={alt}
      style={styledSize}
    />
  )
}
