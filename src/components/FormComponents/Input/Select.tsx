import { Field, FieldProps } from "formik"
import { handleChange } from "../../../helpers/formHelpers"
import { SelectPropsInterface } from "../../../types/FormInterfaces"

const Select = (inputProps: SelectPropsInterface) => {
  const { name, setFieldState, fieldState, inputStyleValidation, options, ...rest } = inputProps
  return (
    <>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          return (
            <select {...rest} {...field}
              onChange={(e) => handleChange(e, form, field, name)}
              onFocus={() => setFieldState({ ...fieldState, isFocus: true })}
              onClick={() => setFieldState({ isBlur: true, isFocus: false })}
              className={`form-select ${inputStyleValidation}`} >
              {options?.map((option) => {
                return <option
                  key={option.value}
                  value={option.value}>
                  {option.key}
                </option>
              })}
            </select>
          )
        }}
      </Field>
    </>
  )
}

export default Select