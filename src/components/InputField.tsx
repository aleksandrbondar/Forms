import { ErrorMessage, Field, FieldProps } from "formik"
import { InputFieldProps } from "../types/FormInterfaces"
import { ChangeEvent, useState } from "react"

const InputField = ({ name, type, placeholder, label, touched, errors, warning, success }: InputFieldProps) => {
  const [isBlur, setIsBlur] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  return (
    <div className="mb-3 form-item">
      <label className="form-label" htmlFor={name}>{label}</label>
      <Field className="form-control" name={name}>
        {({ field, form }: FieldProps) => {
          const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            form.setFieldTouched(name, true, false).catch((err) => console.log(err))
            field.onChange(e)
          }
          return (
            < input {...field}
              type={type}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={() => { setIsFocus(false); setIsBlur(true) }}
              onFocus={() => setIsFocus(true)}
              className={`form-control
                ${touched[name] ?
                  errors[name] ? (isBlur ? 'is-invalid' : (isFocus ? 'border-warning' : 'is-invalid')) : 'is-valid'
                  : ''}`} />
          )
        }}
      </Field>
      {touched[name] ?
        errors[name] ?
          (isBlur ? <ErrorMessage name={name} component="div" className="invalid-feedback" />
            : (isFocus ? <div className="text-warning">{warning}</div> : ''))
          : <div className="valid-feedback">{success}</div> : ''}
    </div>
  )
}

export default InputField