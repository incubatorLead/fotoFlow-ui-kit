import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef
} from "react"

import { clsx } from "clsx"

import s from "./table.module.scss"

import { Typography } from "../typography"

export const Table = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<"table">>(
  ({ className, ...rest }, ref) => {
    return <table className={clsx(className, s.table)} {...rest} ref={ref} />
  }
)
export const TableHead = forwardRef<ElementRef<"thead">, ComponentPropsWithoutRef<"thead">>(
  ({ ...rest }, ref) => {
    return <thead {...rest} ref={ref} />
  }
)

export const TableBody = forwardRef<ElementRef<"tbody">, ComponentPropsWithoutRef<"tbody">>(
  ({ ...rest }, ref) => {
    return <tbody {...rest} ref={ref} />
  }
)

export const TableRow = forwardRef<ElementRef<"tr">, ComponentPropsWithoutRef<"tr">>(
  ({ ...rest }, ref) => {
    return <tr {...rest} ref={ref} />
  }
)

export const TableHeadCell = forwardRef<ElementRef<"th">, ComponentPropsWithoutRef<"th">>(
  ({ children, className, ...rest }, ref) => {
    return (
      <th className={clsx(className, s.headCell)} {...rest} ref={ref}>
        {children}
      </th>
    )
  }
)
export const TableCell = forwardRef<ElementRef<"td">, ComponentPropsWithoutRef<"td">>(
  ({ className, ...rest }, ref) => {
    return <td className={clsx(className, s.tableCell)} {...rest} ref={ref} />
  }
)

type TableEmptyProps = {
  labelText?: string
  mb?: string
  mt?: string
} & ComponentProps<"div">

export const TableEmpty = ({ className, labelText, mb, mt = "90px" }: TableEmptyProps) => {
  return (
    <Typography
      className={clsx(className, s.empty)}
      style={{ marginBottom: mb, marginTop: mt }}
      variant={"h2"}
    >
      {labelText ? labelText : "No data :("}
    </Typography>
  )
}
