import './Input.css'

interface InputProps {
  label: string
  value: string | undefined
  onChange: (value: string) => void
  error?: string
  disabled?: boolean
}

const Input = ({ label, value, onChange, error, disabled }: InputProps) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className={`input ${error ? 'input-error' : ''}`}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      />
      {error && <div className="input-error-message">{error}</div>}
    </div>
  )
}

export default Input
