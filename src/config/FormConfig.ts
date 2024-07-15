import * as Yup from "yup"
import { FormValuesInterface } from "../types/FormInterfaces"
import { handleFormSubmit } from "../helpers/formHelpers"


export const initialValues: FormValuesInterface = { username: '', password: '', confirmPassword: '', email: '' }

export const inputProps = new Map([
  ["username", { type: "text", placeholder: "Enter your Name", label: "User Name", warning: "Must be 3 characters or more", success: "Success", error: "Name Required" }],
  ["password", { type: "password", placeholder: "Enter your password", label: "Password", warning: "Must be 8 characters or more with 1 uppercase, 1 lowercase letter, 1 number and 1 special character", success: "Success", error: "Password Required" }],
  ["confirmPassword", { type: "password", placeholder: "Enter your password", label: "Confirm Password", warning: "Passwords must match", success: "Success", error: "Password Confirm Required" }],
  ["email", { type: "email", placeholder: "Enter your email", label: "Email", warning: "Invalid email address", success: "Success", error: "Email Required" }],
]
)

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

export const formConfig = (() => {
  return {
    initialValues: initialValues,
    validationSchema: validationSchema,
    validateOnMount: true, // валидация при монтировании
    // validateOnChange: true,  // валидация при изменении значения (ввода)
    // validateOnBlur: true, // валидация при потере фокуса
    onSubmit: handleFormSubmit,
  }
})()