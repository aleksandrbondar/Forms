import { Field, FieldProps } from "formik"
import { handleChange } from "../../../helpers/formHelpers"

export interface InputPropsInterface {
  type?: string
  name: string
  placeholder?: string
  setFieldState: React.Dispatch<React.SetStateAction<{ isBlur: boolean; isFocus: boolean; }>>
  fieldState: { isBlur: boolean, isFocus: boolean }
  inputStyleValidation: string
}

const Input = (inputProps: InputPropsInterface) => {
  const { name, type, placeholder, setFieldState, fieldState, inputStyleValidation, ...rest } = inputProps
  return (
    <>
      <Field className="form-control" name={name}>
        {({ field, form }: FieldProps) => {
          return (

            < input {...rest} {...field}
              type={type}
              placeholder={placeholder}
              onChange={(e) => handleChange(e, form, field, name)}
              onBlur={() => setFieldState({ isFocus: false, isBlur: true })}
              onFocus={() => setFieldState({ ...fieldState, isFocus: true })}
              className={`form-control ${inputStyleValidation}`} />
          )
        }}
      </Field>
    </>
  )
}

export default Input