import { Field, FieldProps } from "formik"
import { handleChange } from "../../../helpers/formHelpers"
import { RadioPropsInterface } from "../../../types/FormInterfaces"



const Radio = (inputProps: RadioPropsInterface) => {
  const { name, setFieldState, fieldState, inputStyleValidation, options, ...rest } = inputProps
  const fieldsetStyle = inputStyleValidation ? 'border border-success' : ''
  return (
    <fieldset className={`p-2 form-control ${fieldsetStyle}`}>
      <div>
        <Field name={name}>
          {({ field, form }: FieldProps) => {
            return (
              options?.map((option) => {
                const valid = field.value === option.value ? `btn form-control ${inputStyleValidation} border border-none` : `btn`
                return (
                  <div className="ps-0 form-check" key={option.value}>
                    <input
                      {...rest}
                      {...field}
                      type="radio"
                      id={option.value}
                      value={option.value}
                      checked={field.value === option.value}
                      onChange={(e) => handleChange(e, form, field, name)}
                      onBlur={() => setFieldState({ isFocus: false, isBlur: true })}
                      onFocus={() => setFieldState({ ...fieldState, isFocus: true })}
                      className={`btn-check`} />
                    <label className={`w-100, text-start ${valid}`}
                      htmlFor={option.value}>
                      {option.key}
                    </label>
                  </div>
                )
              })
            )
          }}
        </Field>
      </div>
    </fieldset>
  )
}

export default Radio