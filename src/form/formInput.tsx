import React, { type ElementType } from "react"
import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form"

import { Input, type InputProps } from "../components"

type PropsForm<T extends FieldValues> = { control: Control<T> } & Omit<
  InputProps<ElementType>,
  "onChange" | "value"
> &
  Omit<UseControllerProps<T>, "control" | "defaultValue" | "rules">

export const FormInput = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: PropsForm<T>) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister
  })

  return <Input error={error?.message} {...field} {...rest} />
}
