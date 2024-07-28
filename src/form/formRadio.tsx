import React from "react"
import {
  type Control,
  type FieldValues,
  type UseControllerProps,
  useController
} from "react-hook-form"

import { Radio, type RadioProps } from "../components"

type PropsForm<T extends FieldValues> = { control: Control<T> } & Omit<
  UseControllerProps<T>,
  "control"
> &
  RadioProps

export const FormRadio = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...restProps
}: PropsForm<T>) => {
  const { field } = useController({
    control,
    disabled,
    name,
    shouldUnregister
  })

  // console.log("native ", rest.value)

  return <Radio {...field} {...restProps} />
}
