import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
  forwardRef,
  memo,
  useMemo
} from "react"

import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"

import s from "./select.module.scss"

import { IconArrowDown } from "../../assets/icons/components"
import { useGenerateId } from "../../hooks/useGenerateId"
import { Typography } from "../typography"

export type Option = {
  icon?: ReactNode
  text: string
  value: string
}

export type SelectProps = {
  className?: string
  id?: string
  labelText?: ReactNode
  options: Option[]
  placeholder?: string
} & Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, "children">

const SelectRaw = forwardRef<ElementRef<typeof SelectPrimitive.Root>, SelectProps>((props, ref) => {
  const { className, id, labelText, options, placeholder, ...restProps } = props

  // Generate unique ID if it is not provided
  const selectId = useGenerateId(props.name, id)

  const items = useMemo(
    () =>
      options?.map(option => {
        return (
          <SelectPrimitive.Item className={s.item} key={option.value} value={option.value}>
            <SelectPrimitive.ItemText>
              {option.icon}
              <span>{option.text}</span>
            </SelectPrimitive.ItemText>
          </SelectPrimitive.Item>
        )
      }),
    [options]
  )

  return (
    <SelectPrimitive.Root {...restProps}>
      <Typography as={"label"} className={s.label} htmlFor={selectId} variant={"regular_text_14"}>
        {labelText}
        <SelectPrimitive.Trigger className={clsx(s.trigger, className)} id={selectId} ref={ref}>
          <SelectPrimitive.Value placeholder={placeholder} />
          <SelectPrimitive.Icon className={s.icon}>
            <IconArrowDown />
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
})

SelectRaw.displayName = "Select"

const Select = memo(SelectRaw)

Select.displayName = "SelectMemo"

export { Select }
