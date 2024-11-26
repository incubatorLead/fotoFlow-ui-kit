import React from "react"
import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form"

import { Select, type SelectProps } from "../components"

type PropsForm<T extends FieldValues> = { control: Control<T> } & Omit<SelectProps, "value"> &
  Omit<UseControllerProps<T>, "control">

export const FormSelect = <T extends FieldValues>({
  control,
  defaultValue,
  disabled,
  name,
  onValueChange,
  shouldUnregister,
  ...rest
}: PropsForm<T>) => {
  const {
    field: { onChange, value, ...selectField }
  } = useController({
    control,
    defaultValue,
    disabled,
    name,
    shouldUnregister
  })

  const onValueChangeHandler = (value: string) => {
    onValueChange?.(value)
    onChange(value)
  }

  return (
    <Select
      {...rest}
      {...selectField}
      defaultValue={defaultValue}
      // https://stackoverflow.com/questions/75815473/how-can-i-implement-react-hook-form-with-radix-ui-select
      onValueChange={onValueChangeHandler}
    />
  )
}
