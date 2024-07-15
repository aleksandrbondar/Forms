export interface FormValuesInterface {
  username: string
  password: string
  confirmPassword: string
  email: string
}

interface FormikFieldState {
  [key: string]: boolean | string
}

export interface InputFieldProps {
  name: string
  type: string
  placeholder: string
  label: string
  touched: FormikFieldState
  errors: FormikFieldState
}