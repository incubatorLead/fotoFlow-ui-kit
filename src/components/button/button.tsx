import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import clsx from "clsx"

import s from "./button.module.scss"

type ButtonVariant = "outlined" | "primary" | "secondary" | "text"

type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  fullWidth?: boolean
  icon?: ReactNode
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = "button">(props: ButtonProps<T>) => {
  const { as, children, className, fullWidth, icon, variant = "primary", ...restProps } = props
  const Component = as ?? "button"

  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...restProps}
    >
      {icon}
      {children && <span>{children}</span>}
    </Component>
  )
}
