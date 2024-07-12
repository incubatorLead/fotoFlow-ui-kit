import {
  type ComponentPropsWithoutRef,
  type ReactElement,
  forwardRef,
  useId,
  useState
} from "react"

import clsx from "clsx"

import s from "./input.module.scss"

import eyeIcon from "../../assets/icons/eye.svg"

type Props = {
  error?: string
  labelText?: ReactElement
  type?: "email" | "password" | "search" | "text"
} & ComponentPropsWithoutRef<"input">

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, error, id, labelText, type = "text", ...restProps } = props

  const generatedId = useId()
  const inputId = id ?? generatedId
  const isInputPassword = type === "password"
  const isInputSearch = type === "search"

  const [isPasswordHidden, setPasswordHidden] = useState(isInputPassword)
  const toggleHidePassword = () => setPasswordHidden(!isPasswordHidden)
  const hidePasswordTitle = isPasswordHidden ? "Показать пароль" : "Скрыть пароль"

  let inputType

  if (isInputPassword) {
    inputType = isPasswordHidden ? "password" : "text"
  } else {
    inputType = type
  }

  return (
    <div className={clsx(s.inputContainer, className)}>
      <div className={s.inputWrapper}>
        <input
          className={clsx(
            s.input,
            isInputPassword && s.inputPassword,
            isInputPassword && isPasswordHidden && s.hidePassword,
            isInputSearch && s.inputSearch,
            error && s.inputError
          )}
          id={inputId}
          ref={ref}
          type={inputType}
          {...restProps}
        />
        <label className={s.label} htmlFor={inputId}>
          {labelText}
        </label>
        {isInputPassword && (
          <img
            alt={hidePasswordTitle}
            className={s.hidePasswordIcon}
            onClick={toggleHidePassword}
            src={eyeIcon}
            title={hidePasswordTitle}
          />
        )}
      </div>
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
})
