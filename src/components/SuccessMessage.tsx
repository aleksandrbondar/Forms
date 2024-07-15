import { Field, FieldProps } from "formik"

const SuccessMessage = ({ name, isBlur }: { name: string, isBlur: boolean }) => {
  return (
    <Field name={name}>
      {({ form: { touched, errors } }: FieldProps) =>
        !errors[name] && (touched[name] || isBlur) ? <div className="valid-feedback">Good Job!</div> : null
      }
    </Field>
  )
}

export default SuccessMessage