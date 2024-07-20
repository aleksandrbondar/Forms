import { FormFieldProps } from "../types/FormInterfaces"
import { useState } from "react"
import { getInputStyle, getMessageType } from "../helpers/formHelpers"
import InputMessage from "./InputMessage"
import Label from "./FormComponents/Label/Label"
import InputType from "./FormComponents/Input/InputType"

const InputField = ({ name, ...inputProps }: FormFieldProps) => {
  const { label, touched, errors, warning, success, ...rest } = inputProps
  const [fieldState, setFieldState] = useState({ isBlur: false, isFocus: false })
  const messageStyleValidation = getMessageType({ touched, errors, fieldState })
  const inputStyleValidation = getInputStyle({ touched, errors, fieldState })
  return (
    <div className="mb-3 form-item">
      <Label name={name} label={label} />
      <InputType {...rest} name={name} setFieldState={setFieldState} fieldState={fieldState} inputStyleValidation={inputStyleValidation} />
      <InputMessage validation={messageStyleValidation} warning={warning} success={success} name={name} />
    </div>
  )
}

export default InputField