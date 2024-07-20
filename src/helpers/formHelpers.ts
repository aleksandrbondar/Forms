import { FormikHelpers } from "formik"
import { GetStylePropsInterface } from "../types/FormInterfaces"
import { ChangeEvent } from "react"
import { FormValuesInterface } from "../formConfig/FormConfig";

export function getMessageType({ touched, errors, fieldState }: GetStylePropsInterface): string {
  const { isBlur, isFocus } = fieldState;
  if (!touched) return '';

  if (errors) {
    if (isBlur) return 'invalid';
    if (isFocus) return 'warning';
    return 'invalid';
  }

  return 'valid';
}

export function getInputStyle({ touched, errors, fieldState }: GetStylePropsInterface): string {
  const { isBlur, isFocus } = fieldState;
  const style = '';

  if (!touched) return style;

  if (errors) {
    if (isBlur) return `${style} is-invalid`;
    if (isFocus) return `${style} border-warning`;
    return `${style} is-invalid`;
  }

  return `${style} is-valid`;
}

export const handleFormSubmit = (values: FormValuesInterface, { setSubmitting }: FormikHelpers<FormValuesInterface>) => {
  console.log(values)
  setSubmitting(true)  // при клике на кнопку "Submit" делаем кнопку неактивной
}

export const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, form: FormikHelpers<FormValuesInterface>, field: { onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void }, name: string) => {
  form.setFieldTouched(name, true, false).catch((err) => console.log(err)) // изменяем флаг touched(нажимали на поле ввода) на true
  field.onChange(e)  // продолжаем обработку изменений ввода
}