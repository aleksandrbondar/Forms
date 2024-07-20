import { ErrorMessage } from "formik"
import Success from "./FormComponents/Message/Success"
import Warning from "./FormComponents/Message/Warning"

interface InputMessageInterface {
  validation: string | null
  warning?: string
  success?: string
  name: string
}

const InputMessage = ({ validation, warning, success, name }: InputMessageInterface) => {
  switch (validation) {
    case 'invalid':
      return <ErrorMessage name={name} component="div" className="invalid-feedback" />
    case 'warning':
      return <Warning warning={warning} />
    case 'valid':
      return <Success success={success} />
    default:
      return null
  }
}

export default InputMessage