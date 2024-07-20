import { Field, FieldProps } from "formik"
import { handleChange } from "../../../helpers/formHelpers"

interface TextAreaPropsInterface {
  type?: string
  name: string
  placeholder?: string
  setFieldState: React.Dispatch<React.SetStateAction<{ isBlur: boolean; isFocus: boolean; }>>
  fieldState: { isBlur: boolean, isFocus: boolean }
  inputStyleValidation: string
  rows?: number
  cols?: number
  maxLength?: number
  minLength?: number
  required?: boolean
}


const Textarea = (inputProps: TextAreaPropsInterface) => {
  const { name, placeholder, setFieldState, fieldState, inputStyleValidation, ...rest } = inputProps
  return (
    <>
      <Field className="form-control" name={name}>
        {({ field, form }: FieldProps) => {
          return (
            <textarea {...rest} {...field}
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

export default Textarea