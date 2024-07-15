import React, {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactElement,
  forwardRef,
  useId
} from "react"

import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"

import s from "./select.module.scss"

import { Typography } from "../typography"

type Options = {
  icon?: string
  text: string
  value: string
}

type Props = {
  className?: string
  id?: string
  labelText?: ReactElement
  name: string
  onValueChange?: (items: string) => void
  options: Options[]
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Root>, Props>((props, ref) => {
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
  const generatedId = useId()
  const selectId = id ?? generatedId

  const items = options?.map(option => {
    return (
      <SelectPrimitive.Item className={s.item} key={option.value} value={option.value}>
        <SelectPrimitive.ItemText>
          {option.icon && <img alt={option.text} src={option.icon} />}
          {option.text}
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
            <svg
              fill={"none"}
              height={"24"}
              viewBox={"0 0 24 24"}
              width={"24"}
              xmlns={"http://www.w3.org/2000/svg"}
            >
              <path
                d={
                  "M5.5141 9.45842C5.51364 9.22477 5.59502 8.99834 5.7441 8.81842C5.82805 8.71717 5.93115 8.63346 6.04749 8.57211C6.16384 8.51076 6.29115 8.47296 6.42212 8.46089C6.5531 8.44881 6.68517 8.46269 6.81078 8.50174C6.93638 8.54078 7.05305 8.60422 7.1541 8.68842L12.5141 13.1684L17.8841 8.84843C17.9864 8.76536 18.1041 8.70333 18.2304 8.6659C18.3568 8.62846 18.4893 8.61637 18.6203 8.63031C18.7513 8.64425 18.8783 8.68395 18.9939 8.74712C19.1096 8.81029 19.2116 8.8957 19.2941 8.99843C19.3851 9.10189 19.4538 9.22306 19.4958 9.35432C19.5378 9.48558 19.5522 9.62411 19.5381 9.7612C19.524 9.89829 19.4817 10.031 19.4139 10.151C19.3461 10.271 19.2543 10.3756 19.1441 10.4584L13.1441 15.2884C12.9652 15.4355 12.7407 15.5159 12.5091 15.5159C12.2775 15.5159 12.053 15.4355 11.8741 15.2884L5.8741 10.2884C5.75308 10.1881 5.65742 10.0607 5.59487 9.91646C5.53232 9.77225 5.50465 9.61533 5.5141 9.45842Z"
                }
                fill={"white"}
              />
            </svg>
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
