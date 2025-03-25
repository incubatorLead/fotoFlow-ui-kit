import {
  type ChangeEvent,
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useState
} from "react"

import clsx from "clsx"

import s from "./input.module.scss"

import {
  IconClose,
  IconEyeOffOutline,
  IconEyeOutline,
  IconSearch
} from "../../assets/icons/components"
import { useGenerateId } from "../../hooks/useGenerateId"
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
    onChange,
    required,
    type = "text",
    ...restProps
  } = props

  const inputId = useGenerateId(name, id)

  const isInputPassword = type === "password"
  const isInputSearch = type === "search"

  const [value, setValue] = useState("")
  const [isPasswordHidden, setPasswordHidden] = useState(isInputPassword)
  const toggleHidePassword = () => setPasswordHidden(!isPasswordHidden)

  const passwordIcon = isPasswordHidden ? <IconEyeOffOutline /> : <IconEyeOutline />

  let inputType

  if (isInputPassword) {
    inputType = isPasswordHidden ? "password" : "text"
  } else {
    inputType = type
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    setValue(e.currentTarget.value)
  }

  const clearInputHandler = () => {
    setValue("")
  }

  const classNames = {
    buttonClear: s.clearInputIcon,
    buttonPassword: s.hidePasswordIcon,
    fieldContainer: clsx(s.fieldContainer, className),
    input: clsx(
      s.formControl,
      isInputPassword && s.inputPassword,
      isInputPassword && isPasswordHidden && s.hidePassword,
      isInputSearch && s.inputSearch,
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
          onChange={changeHandler}
          ref={ref}
          type={inputType}
          value={value}
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
        {isInputSearch && !!value && (
          <button
            className={s.clearInputIcon}
            disabled={disabled}
            onClick={clearInputHandler}
            type={"button"}
          >
            <IconClose />
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
