import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react"

import clsx from "clsx"

import s from "./textArea.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Typography } from "../typography"

export type TextAreaProps = {
  error?: ReactNode
  labelText?: ReactNode
} & ComponentPropsWithoutRef<"textarea">

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { className, disabled, error, id, labelText, name, required, ...restProps } = props

  const textAreaId = useGenerateId(name, id)

  const classNames = {
    fieldContainer: clsx(s.fieldContainer, className),
    input: clsx(s.formControl, s.textarea, error && s.inputError),
    label: clsx(s.label, required && s.labelRequired, disabled && s.disabled)
  }

  return (
    <div className={classNames.fieldContainer}>
      <label className={classNames.label} htmlFor={textAreaId}>
        {labelText}
      </label>
      <textarea
        className={classNames.input}
        disabled={disabled}
        id={textAreaId}
        name={name}
        ref={ref}
        {...restProps}
      />
      {error && (
        <Typography as={"p"} variant={"error"}>
          {error}
        </Typography>
      )}
    </div>
  )
})
