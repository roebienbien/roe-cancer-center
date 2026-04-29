import './Input.scss'
type InputProps = {
  label: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, type = 'text', error, ...props }: InputProps) => {
  return (
    <div className="input">
      <label className="input__label">{label}</label>
      <input
        type={type}
        {...props}
        className="input__field"
      />
      {error && <p className="input__error">{error}</p>}
    </div>
  )
}

export default Input;
