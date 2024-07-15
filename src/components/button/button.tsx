import type { ComponentPropsWithoutRef, ElementType } from "react"

import clsx from "clsx"

import s from "./button.module.scss"

type ButtonVariant = "outlined" | "primary" | "secondary" | "text"

type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const { as, className, fullWidth, variant = "primary", ...restProps } = props
  const Component = as ?? "button"

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...restProps}
    />
  )
}
