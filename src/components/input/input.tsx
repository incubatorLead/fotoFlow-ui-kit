import { type ComponentPropsWithoutRef, type ReactNode, forwardRef, useState } from "react"

import clsx from "clsx"

import s from "./input.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Typography } from "../typography"

export type InputProps = {
  error?: ReactNode
  labelText?: ReactNode
} & ComponentPropsWithoutRef<"input">
import { IconEyeOffOutline, IconEyeOutline, IconSearch } from "../../assets/icons/components"
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

  const passwordIcon = isPasswordHidden ? <IconEyeOffOutline /> : <IconEyeOutline />

  let inputType

  if (isInputPassword) {
    inputType = isPasswordHidden ? "password" : "text"
  } else {
    inputType = type
  }

  const classNames = {
    buttonPassword: s.hidePasswordIcon,
    fieldContainer: clsx(s.fieldContainer, className),
    input: clsx(
      s.formControl,
      isInputPassword && s.inputPassword,
      isInputPassword && isPasswordHidden && s.hidePassword,
      error && s.inputError
    ),
    label: clsx(s.label, required && s.labelRequired, disabled && s.disabled)
  }

  return (
    <div className={classNames.fieldContainer}>
      <label className={classNames.label} htmlFor={inputId}>
        {labelText}
      </label>
      <div className={s.inputIconWrapper}>
        <input
          className={classNames.input}
          disabled={disabled}
          id={inputId}
          name={name}
          ref={ref}
          type={inputType}
          {...restProps}
        />
        {isInputSearch && (
          <span className={s.inputSearchIcon}>
            <IconSearch />
          </span>
        )}
        {isInputPassword && (
          <button
            className={classNames.buttonPassword}
            onClick={toggleHidePassword}
            type={"button"}
          >
            {passwordIcon}
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
