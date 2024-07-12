import type { ComponentPropsWithoutRef, ElementType } from "react"

import clsx from "clsx"

import s from "./card.module.scss"

const DEFAULT_TYPE = "div"

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = typeof DEFAULT_TYPE>({
  as,
  className,
  ...restProps
}: Props<T>) => {
  const Component = as ?? DEFAULT_TYPE

  return <Component className={clsx(s.card, className)} {...restProps} />
}
