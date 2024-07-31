import type { ComponentPropsWithoutRef, ElementType } from "react"

import clsx from "clsx"

import s from "./typography.module.scss"

type TypographyVariant =
  | "bold_text_14"
  | "bold_text_16"
  | "error"
  | "h1"
  | "h2"
  | "h3"
  | "large"
  | "medium_text_14"
  | "regular_link"
  | "regular_text_14"
  | "regular_text_16"
  | "semi-bold_small_text"
  | "small_link"
  | "small_text"

type Props<T extends ElementType = "p"> = {
  as?: T
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = "p">({
  as,
  children,
  className,
  variant = "regular_text_16",
  ...restProps
}: Props<T>) => {
  const Component = getComponent(variant, as)

  return (
    <Component className={clsx(s.typography, s[variant], className)} {...restProps}>
      {children}
    </Component>
  )
}

const getComponent = <T extends ElementType>(variant: TypographyVariant, as?: T) => {
  if (as) {
    return as
  }

  switch (variant) {
    case "large":
      return "h1"
    case "h1":
      return "h2"
    case "h2":
      return "h3"
    case "h3":
      return "h4"
    default:
      return "p"
  }
}
