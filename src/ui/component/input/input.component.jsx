import './style.css'

export const Input = ({ name, label, onChange, value, type, required }) => {

  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div className='input__content'>
      <label className='input__label' htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        onChange={handleChange}
        name={name}
        value={value}
        required={required}
        className='input__input'
      />
    </div>
  )
}
