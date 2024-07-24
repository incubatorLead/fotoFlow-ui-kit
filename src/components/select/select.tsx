import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
  forwardRef
} from "react"

import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"

import s from "./select.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Icon } from "../icon"
import { Typography } from "../typography"

export type Options = {
  icon?: ReactNode
  text: string
  value: string
}

export type SelectProps = {
  className?: string
  id?: string
  labelText?: ReactNode
  name: string
  onValueChange?: (items: string) => void
  options: Options[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>(
  (props, ref) => {
    const {
      children,
      className,
      disabled,
      id,
      labelText,
      name,
      onValueChange,
      options,
      placeholder,
      ...restProps
    } = props

    // Generate unique ID if it is not provided
    const selectId = useGenerateId(name, id)

    const items = options?.map(option => {
      return (
        <SelectPrimitive.Item className={s.item} key={option.value} value={option.value}>
          <SelectPrimitive.ItemText>
            {option.icon}
            <span>{option.text}</span>
          </SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
      )
    })

    return (
      <SelectPrimitive.Root
        disabled={disabled}
        name={name}
        onValueChange={onValueChange}
        {...restProps}
      >
        <Typography as={"label"} className={s.label} htmlFor={selectId} variant={"regular_text_14"}>
          {labelText}
          <SelectPrimitive.Trigger
            className={clsx(s.trigger, className)}
            id={selectId}
            name={name}
            ref={ref}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon className={s.icon}>
              <Icon iconId={"arrow-down"} />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
        </Typography>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={s.content} position={"popper"}>
            <SelectPrimitive.Viewport className={s.viewport}>{items}</SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)
