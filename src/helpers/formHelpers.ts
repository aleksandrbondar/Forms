import { FormikHelpers } from "formik"
import { FormValuesInterface } from "../types/FormInterfaces"


export const handleFormSubmit = (values: FormValuesInterface, { setSubmitting }: FormikHelpers<FormValuesInterface>) => {
  console.log(values)
  setSubmitting(true)
}