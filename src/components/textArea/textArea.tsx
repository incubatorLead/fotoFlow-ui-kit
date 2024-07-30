import { type ComponentPropsWithoutRef, type ReactNode, forwardRef } from "react"

import clsx from "clsx"

import inputStyles from "../input/input.module.scss"
import textAreaStyles from "./textArea.module.scss"

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
    input: clsx(inputStyles.input, textAreaStyles.textarea, error && inputStyles.inputError),
    inputContainer: clsx(inputStyles.inputContainer, className),
    label: clsx(
      inputStyles.label,
      required && inputStyles.labelRequired,
      disabled && inputStyles.disabled
    )
  }

  return (
    <div className={classNames.inputContainer}>
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
