import React from "react"
import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form"

import { TextArea, type TextAreaProps } from "../components"

type PropsForm<T extends FieldValues> = { control: Control<T> } & Omit<
  TextAreaProps,
  "onChange" | "value"
> &
  Omit<UseControllerProps<T>, "control" | "defaultValue" | "rules">

export const FormTextArea = <T extends FieldValues>({
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

  return <TextArea error={error?.message} {...field} {...rest} />
}
