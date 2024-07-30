import { type ComponentPropsWithoutRef, type ReactNode, forwardRef, useState } from "react"

import clsx from "clsx"

import s from "./input.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Icon } from "../icon"
import { Typography } from "../typography"

export type InputProps = {
  error?: ReactNode
  labelText?: ReactNode
} & ComponentPropsWithoutRef<"input">

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    error,
    id,
    labelText,
    name,
    required,
    type = "text",
    ...restProps
  } = props

  const inputId = useGenerateId(name, id)

  const isInputPassword = type === "password"
  const isInputSearch = type === "search"

  const [isPasswordHidden, setPasswordHidden] = useState(isInputPassword)
  const toggleHidePassword = () => setPasswordHidden(!isPasswordHidden)

  const iconId = isPasswordHidden ? "eye-off-outline" : "eye-outline"

  let inputType

  if (isInputPassword) {
    inputType = isPasswordHidden ? "password" : "text"
  } else {
    inputType = type
  }

  const classNames = {
    input: clsx(
      s.input,
      isInputPassword && s.inputPassword,
      isInputPassword && isPasswordHidden && s.hidePassword,
      error && s.inputError
    ),
    inputContainer: clsx(s.inputContainer, className),
    inputPassword: clsx(s.hidePasswordIcon, disabled && s.disabledPasswordIcon),
    label: clsx(s.label, required && s.labelRequired, disabled && s.disabled)
  }

  return (
    <div className={classNames.inputContainer}>
      <label className={classNames.label} htmlFor={inputId}>
        {labelText}
      </label>
      <div className={s.inputIconWrapper}>
        {isInputSearch && (
          <span className={s.inputSearchIcon}>
            <Icon iconId={"search"} />
          </span>
        )}
        <input
          className={classNames.input}
          disabled={disabled}
          id={inputId}
          name={name}
          ref={ref}
          type={inputType}
          {...restProps}
        />
        {isInputPassword && (
          <button className={classNames.inputPassword} onClick={toggleHidePassword} type={"button"}>
            <Icon iconId={iconId} />
          </button>
        )}
      </div>
      {error && (
        <Typography as={"p"} variant={"error"}>
          {error}
        </Typography>
      )}
    </div>
  )
})
