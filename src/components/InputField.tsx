import { ErrorMessage, Field, FieldProps } from "formik"
import SuccessMessage from "./SuccessMessage"
import { InputFieldProps } from "../types/FormInterfaces"
import { ChangeEvent, useState } from "react"

const InputField = ({ name, type, placeholder, label, touched, errors }: InputFieldProps) => {
  const [isBlur, setIsBlur] = useState(false)
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
              onBlur={() => setIsBlur(true)}
              onFocus={() => setIsBlur(false)}
              className={`form-control ${errors[name] && touched[name] && isBlur ? 'is-invalid'
                : !errors[name] && (touched[name] || isBlur) ? 'is-valid' : ''}`} />
          )
        }}
      </Field>
      {touched[name] && errors[name] && isBlur ? (
        <ErrorMessage name={name} component="div" className="invalid-feedback" />
      ) : <SuccessMessage name={name} isBlur={isBlur} />}
    </div>
  )
}

export default InputField