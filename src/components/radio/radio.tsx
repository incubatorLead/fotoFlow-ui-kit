import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react"

import clsx from "clsx"

import s from "./radio.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"

type Props = {
  labelText?: ReactNode
} & ComponentPropsWithoutRef<"input">

export const Radio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, id, labelText, name, ...restProps } = props

  // Generate unique ID if it is not provided
  const inputId = useGenerateId(name, id)

  return (
    <label className={clsx(s.radio, className)} htmlFor={inputId}>
      <input className={s.input} id={inputId} name={name} ref={ref} type={"radio"} {...restProps} />
      <span className={s.icon}></span>
      {labelText}
    </label>
  )
})
