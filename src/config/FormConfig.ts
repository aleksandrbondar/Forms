import * as Yup from "yup"
import { FormValuesInterface } from "../types/FormInterfaces"

export const initialValues: FormValuesInterface = { username: '', password: '', confirmPassword: '', email: '' }

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Name Required")
    .min(3, "Must be 3 characters or more")
    .max(20, "Must be 20 characters or less"),
  password: Yup.string()
    .required("Password Required")
    .min(8, "Must be 8 characters or more")
    .max(40, "Must be 40 characters or less")
    .matches(/[A-Z]/, 'Must contain 1 uppercase letter')
    .matches(/[a-z]/, 'Must contain 1 lowercase letter')
    .matches(/[0-9]/, 'Must contain 1 number')
    .matches(/[\W_]/, 'Must contain 1 special character'),
  confirmPassword: Yup.string()
    .required("Password Confirm Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  email: Yup.string()
    .required("Email Required")
    .email("Invalid email address")
})
