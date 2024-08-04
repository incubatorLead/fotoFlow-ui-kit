import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react"

import clsx from "clsx"

import s from "./checkbox.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"

type labelTextVariant = "textCenter" | "textEnd"

export type CheckboxProps = {
  alignText?: labelTextVariant
  labelText?: ReactNode
} & ComponentPropsWithoutRef<"input">

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { alignText = "textEnd", className, id, labelText, name, ...restProps } = props

  // Generate unique ID if it is not provided
  const inputId = useGenerateId(name, id)

  return (
    <label className={clsx(s.checkbox, s[alignText], className)} htmlFor={inputId}>
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
