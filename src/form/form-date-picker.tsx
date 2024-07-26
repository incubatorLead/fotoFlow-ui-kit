import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form"

import { DatePicker, type DatePickerProps } from "../components"

type PropsForm<T extends FieldValues> = { control: Control<T> } & Omit<
  DatePickerProps,
  "date" | "onSelect"
> &
  Omit<UseControllerProps<T>, "control" | "defaultValue" | "rules">

export const FormDatePicker = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: PropsForm<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister
  })

  return <DatePicker date={value} error={error?.message} onSelect={onChange} {...rest} />
}
