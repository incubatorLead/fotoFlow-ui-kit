import { type ComponentPropsWithoutRef, type ReactElement, forwardRef, useId } from "react"

import clsx from "clsx"

import s from "./checkbox.module.scss"

type Props = {
  labelText?: ReactElement
} & ComponentPropsWithoutRef<"input">

export const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, disabled, id, labelText, name, ...restProps } = props

  // Generate unique ID if it is not provided
  const generatedId = useId()
  const inputId = id ?? name + generatedId

  return (
    <label className={clsx(s.checkbox, className)} htmlFor={inputId}>
      <input
        className={s.input}
        id={inputId}
        name={name}
        ref={ref}
        type={"checkbox"}
        {...restProps}
      />
      <span className={s.icon}></span>
      {labelText}
    </label>
  )
})
