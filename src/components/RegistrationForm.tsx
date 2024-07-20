/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Formik } from "formik"
import { Button } from "react-bootstrap"
import { formConfig, FormValuesInterface, inputProps } from "../formConfig/FormConfig"
import FormField from "./FormField"

const RegistrationForm = () => {
  return (
    <Formik {...formConfig}>
      {({ isValid, isSubmitting, errors, touched }) => {
        return (
          <Form className={`mb-3 p-3 rounded border ${(isValid || isSubmitting) ? 'border-green-500' : 'border-warning'}`} autoComplete="off">
            {Array.from(inputProps.entries()).map(([name, props]) => {
              const inputProps = {
                ...props,
                name,
                touched: touched[name as keyof FormValuesInterface],
                errors: errors[name as keyof FormValuesInterface]
              }
              return <FormField key={name} {...inputProps} />
            })}
            <Button variant={(isValid || isSubmitting) ? 'success' : 'warning'} type="submit" disabled={!isValid || isSubmitting}>
              {(isValid || isSubmitting) ? 'Submit' : 'Enter all fields to submit'}
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default RegistrationForm