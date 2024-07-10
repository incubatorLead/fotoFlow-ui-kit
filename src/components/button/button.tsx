import type { ComponentPropsWithoutRef, ElementType } from "react"

import clsx from "clsx"

import s from "./button.module.scss"

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  fullWidth?: boolean
  variant?: "outlined" | "primary" | "secondary"
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType = "button">({
  as,
  className,
  fullWidth = false,
  variant = "primary",
  ...rest
}: ButtonProps<T>) {
  const Component = as ?? "button"

  return (
    <Component
      {...rest}
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
    />
  )
}
