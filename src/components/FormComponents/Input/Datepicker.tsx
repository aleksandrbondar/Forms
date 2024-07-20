import { Field, FieldProps } from "formik"
import { DatePropsInterface } from "../../../types/FormInterfaces"

import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { uk } from "date-fns/locale"

const Datepicker = (inputProps: DatePropsInterface) => {
  const { name, setFieldState, fieldState, inputStyleValidation, ...rest } = inputProps
  return (
    <>
      <Field name={name}>
        {({ field, form }: FieldProps) => {
          const { setFieldValue } = form
          const { value } = field
          function dateHandleChange(date: Date | null) {
            setFieldValue(name, date)
            form.setFieldTouched(name, true, false).catch((err) => console.log(err))
          }
          return (
            <ReactDatePicker
              locale={uk}
              dateFormat={"dd.MM.yyyy"}
              dateFormatCalendar="dd.MM.yyyy"
              wrapperClassName={`w-100`}
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={dateHandleChange}
              onBlur={() => setFieldState({ isFocus: false, isBlur: true })}
              onFocus={() => setFieldState({ ...fieldState, isFocus: true })}
              className={`form-control ${inputStyleValidation}`}
            />
          )
        }}
      </Field>
    </>
  )
}

export default Datepicker