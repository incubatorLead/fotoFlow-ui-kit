import type { ComponentPropsWithoutRef, ElementType } from "react"

import s from "./button.module.scss"
import clsx from "clsx"

export type ButtonProps<T extends ElementType = "button"> = {
  variant?: "primary" | "secondary" | "outlined"
  fullWidth?: boolean
  as?: T
} & ComponentPropsWithoutRef<T>

export function Button<T extends ElementType = "button">({
  className,
  variant = "primary",
  fullWidth = false,
  as,
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
