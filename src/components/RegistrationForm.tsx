/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Formik } from "formik"
import { Button } from "react-bootstrap"
import { formConfig, inputProps } from "../config/FormConfig"
import InputField from "./InputField"

const RegistrationForm = () => {
  return (
    <Formik {...formConfig} >
      {({ isValid, isSubmitting, errors, touched }) => (
        <Form className="mb-3" autoComplete="off">
          {Array.from(inputProps.entries()).map(([name, props]) => (
            <InputField key={name} name={name} {...props} touched={touched} errors={errors} />
          ))}
          <Button variant="primary" type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )
      }

    </Formik >
  )
}

export default RegistrationForm