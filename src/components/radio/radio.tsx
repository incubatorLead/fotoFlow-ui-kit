import { type ComponentPropsWithoutRef, type ReactNode, forwardRef, useId } from "react"

import clsx from "clsx"

import s from "./radio.module.scss"

type Props = {
  labelText?: ReactNode
} & ComponentPropsWithoutRef<"input">

export const Radio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, id, labelText, name, ...restProps } = props

  // Generate unique ID if it is not provided
  const generatedId = useId()
  const inputId = id ?? name + generatedId

  return (
    <label className={clsx(s.radio, className)} htmlFor={inputId}>
      <input className={s.input} id={inputId} name={name} ref={ref} type={"radio"} {...restProps} />
      <span className={s.icon}></span>
      {labelText}
    </label>
  )
})
