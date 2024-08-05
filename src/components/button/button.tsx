import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ElementType,
  type ForwardedRef,
  forwardRef
} from "react"

import clsx from "clsx"

import s from "./button.module.scss"

type ButtonVariant = "outlined" | "primary" | "secondary" | "text"

type ButtonProps<T extends ElementType = "button"> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

const ButtonPolymorph = <T extends ElementType = "button">(props: ButtonProps<T>, ref: any) => {
  const {
    as,
    className,
    fullWidth,
    type = !as || as === "button" ? "button" : undefined,
    variant,
    ...restProps
  } = props
  const Component = as ?? "button"

  return (
    <Component
      className={clsx(
        "btnReset",
        s.button,
        variant && s[variant],
        fullWidth && s.fullWidth,
        className
      )}
      type={type}
      {...restProps}
      ref={ref}
    />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = "button">(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => ReturnType<typeof ButtonPolymorph>

// ToDo: Why we use here ButtonPoly seperated? Can we merge it?
