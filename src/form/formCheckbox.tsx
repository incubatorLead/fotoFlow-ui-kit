import React from "react"
import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form"

import { Checkbox, type CheckboxProps } from "../components"

type PropsForm<T extends FieldValues> = { control: Control<T> } & CheckboxProps &
  Omit<UseControllerProps<T>, "control">

export const FormCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: PropsForm<T>) => {
  const { field } = useController({
    control,
    disabled,
    name,
    shouldUnregister
  })

  return <Checkbox {...rest} {...field} />
}
