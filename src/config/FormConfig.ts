import * as Yup from "yup"
import { handleFormSubmit } from "../helpers/formHelpers"
import { SelectInterface } from "../types/FormInterfaces"
import { FormikTouched } from "formik"

export interface FormValuesInterface {
  username: string
  password: string
  confirmPassword: string
  email: string
  textarea: string,
  checkbox: number | boolean | FormikTouched<SelectInterface>[] | undefined,
  select: string | number | undefined,
  radio: string | number | undefined,
  [key: string]: string | string[] | object | number | boolean | FormikTouched<SelectInterface>[] | undefined | null
}

export const initialValues: FormValuesInterface = { username: '', password: '', confirmPassword: '', email: '', date: null, textarea: '', checkbox: [], select: 'default', radio: 'default' }

export const inputProps = new Map([
  ["username", {
    type: "text",
    placeholder: "Enter your Name",
    label: "User Name",
    warning: "Must be 3 characters or more",
    success: "Success"
  }],
  ["password", {
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    warning: "Must be 8 characters or more with 1 uppercase, 1 lowercase letter, 1 number and 1 special character",
    success: "Success"
  }],
  ["confirmPassword", {
    type: "password",
    placeholder: "Enter your password",
    label: "Confirm Password",
    warning: "Passwords must match",
    success: "Success"
  }],
  ["email", {
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    warning: "Invalid email address",
    success: "Success"
  }],
  ["date", {
    type: "date",
    label: "Enter your birthday",
    success: "Success"
  }],
  ['textarea', {
    type: "textarea",
    placeholder: "Enter about me",
    label: "About me",
    warning: "Must be 20 characters or more",
    success: "Success",
    rows: 3
  }],
  ["checkbox", {
    type: "checkbox",
    label: "What kind of ice cream do you like?",
    warning: "",
    success: "checkbox Success",
    options: [{ value: "chocolate", key: "Chocolate" }, { value: "vanilla", key: "Vanilla" }, { value: "strawberry", key: "Strawberry" }]
  }],
  ["select", {
    type: "select",
    label: "Select",
    warning: "",
    success: "select Success",
    options: [{ value: "default", key: "Select Option" }, { value: "select1", key: "Option 1" }, { value: "select2", key: "Option 2" }, { value: "select3", key: "Option 3" }]
  }],
  ["radio", {
    type: "radio",
    label: "How much ice cream will you eat today?",
    warning: "",
    success: "radio Success",
    options: [{ value: '1', key: "One" }, { value: '2', key: "Two" }, { value: 'not today', key: "On diet" }]
  }]
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
    .matches(/[\W_]/, 'Must contain 1 special character')
    .matches(/[0-9]/, 'Must contain 1 number'),
  confirmPassword: Yup.string()
    .required("Password Confirm Required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
  email: Yup.string()
    .required("Email Required")
    .email("Invalid email address"),
  textarea: Yup.string()
    .required("Message Required")
    .min(20, "Must be 20 characters or more")
    .max(200, "Must be 200 characters or less"),
  checkbox: Yup.array().min(1, "Checkbox Required"),
  select: Yup.string().notOneOf(["default"], "Select Required"),
  radio: Yup.string().notOneOf(["default"], "Select Required"),
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