export const Image = ({ size, src, alt }) => {

  const syledSize = {
    height: `${size ?? 100}px`
  }

  return (
    <img src={src} alt={alt} style={syledSize} />
  )
}
