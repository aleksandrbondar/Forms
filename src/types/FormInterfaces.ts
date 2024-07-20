// Интерфейс для полей ввода
export interface FormFieldProps {
  label: string
  type: string
  touched: boolean | undefined
  errors: string | undefined
  name: string
  placeholder?: string
  warning?: string
  success?: string
  rows?: number
  options?: SelectInterface[]
}

// Интерфейс для общих свойств
export interface BasePropsInterface {
  name: string
  placeholder?: string
  setFieldState: React.Dispatch<React.SetStateAction<{ isBlur: boolean; isFocus: boolean; }>>
  fieldState: { isBlur: boolean, isFocus: boolean }
  inputStyleValidation: string
  rows?: number
  cols?: number
  maxLength?: number
  minLength?: number
  required?: boolean
}

// Интерфейс для сообщений ввода
export interface InputMessageInterface {
  validation: string
  warning?: string
  success?: string
  name: string
}

// Интерфейс для стилей
export interface GetStylePropsInterface {
  touched: boolean | undefined
  errors: string | undefined
  fieldState: { isBlur: boolean, isFocus: boolean }
}

// Интерфейс для различных типов ввода
export interface InputTypeInterface extends BasePropsInterface {
  type: string
  options?: SelectInterface[]
}

// Интерфейс для textarea
export interface TextAreaPropsInterface extends BasePropsInterface {
  // Специфичных свойств для textarea нет
}

// Интерфейс для радиокнопок
export interface RadioPropsInterface extends BasePropsInterface {
  options?: SelectInterface[]
}

// Интерфейс для чекбоксов
export interface CheckboxPropsInterface extends BasePropsInterface {
  options?: SelectInterface[]
}

// Интерфейс для выпадающих списков
export interface SelectPropsInterface extends BasePropsInterface {
  options?: SelectInterface[]
}

export interface DatePropsInterface extends BasePropsInterface {
}

// Интерфейс для опций выбора
export interface SelectInterface {
  value: string
  key: string
}