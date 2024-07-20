const Label = ({ name, label }: { name: string, label: string }) => {
  return (
    <label className="form-label d-block" htmlFor={name}>{label}</label>
  )
}

export default Label