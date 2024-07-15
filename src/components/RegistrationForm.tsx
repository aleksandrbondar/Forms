/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Formik } from "formik"
import { Button } from "react-bootstrap"

import { initialValues, validationSchema } from "../config/FormConfig"
import { handleFormSubmit } from "../helpers/formHelpers"
import InputField from "./InputField"



const RegistrationForm = () => {
  const formikConfig = (() => {
    return {
      initialValues: initialValues,
      validationSchema: validationSchema,
      validateOnMount: true,
      // validateOnChange: false,
      // validateOnBlur: true,
      onSubmit: handleFormSubmit,
    }
  })()
  return (
    <Formik {...formikConfig} >
      {({ isValid, isSubmitting, errors, touched }) => (
        <Form className="mb-3" autoComplete="off">
          <InputField name="username" type="text" placeholder="Enter your Name" label="User Name" touched={touched} errors={errors} />
          <InputField name="password" type="password" placeholder="Enter your password" label="Password" touched={touched} errors={errors} />
          <InputField name="confirmPassword" type="password" placeholder="Enter your password" label="Confirm Password" touched={touched} errors={errors} />
          <InputField name="email" type="email" placeholder="Enter your email" label="Email" touched={touched} errors={errors} />
          <Button variant="primary" type="submit" disabled={!isValid || isSubmitting}>
            Submit
          </Button>
        </Form>
      )}

    </Formik>
  )
}

export default RegistrationForm