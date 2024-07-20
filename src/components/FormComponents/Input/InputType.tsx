import { InputTypeInterface } from "../../../types/FormInterfaces"
import Checkbox from "./Checkbox"
import Datepicker from "./Datepicker"
import Input from "./Input"
import Radio from "./Radio"
import Select from "./Select"
import Textarea from "./Textarea"



const InputType = ({ type, ...props }: InputTypeInterface) => {
  switch (type) {
    case 'textarea':
      return <Textarea {...props} />
    case 'checkbox':
      return <Checkbox {...props} />
    case 'select':
      return <Select {...props} />
    case 'radio':
      return <Radio {...props} />
    case 'date':
      return <Datepicker {...props} />
    default:
      return <Input type={type} {...props} />
  }
}
export default InputType