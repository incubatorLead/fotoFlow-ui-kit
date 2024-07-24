import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
  useState
} from "react"

import clsx from "clsx"

import s from "./input.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Icon } from "../icon"
import { Typography } from "../typography"

const DEFAULT_TYPE = "input"

export type InputProps<T extends ElementType = typeof DEFAULT_TYPE> = {
  as?: T
  error?: string
  labelText?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Input = forwardRef(
  <T extends ElementType = typeof DEFAULT_TYPE>(
    props: InputProps<T>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const {
      as: Component = DEFAULT_TYPE,
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

    // Generate unique ID if it is not provided
    const inputId = useGenerateId(name, id)

    const isInputPassword = type === "password"
    const isInputSearch = type === "search"
    const isTextarea = Component === "textarea"

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
        error && s.inputError,
        isTextarea && s.textarea
      ),
      inputContainer: clsx(s.inputContainer, className),
      inputPassword: clsx(s.hidePasswordIcon, disabled && s.disabledPasswordIcon),
      label: clsx(s.label, required && s.labelRequired, disabled && s.disabled)
    }

    return (
      <div className={classNames.inputContainer}>
        <div className={s.inputLabelWrapper}>
          <label className={classNames.label} htmlFor={inputId}>
            {labelText}
          </label>
          <div className={s.inputIconWrapper}>
            {isInputSearch && (
              <span className={s.inputSearchIcon}>
                <Icon iconId={"search"} />
              </span>
            )}
            <Component
              className={classNames.input}
              disabled={disabled}
              id={inputId}
              name={name}
              ref={ref}
              type={inputType}
              {...restProps}
            />
            {isInputPassword && (
              <button
                className={classNames.inputPassword}
                onClick={toggleHidePassword}
                type={"button"}
              >
                <Icon iconId={iconId} />
              </button>
            )}
          </div>
        </div>
        {error && (
          <Typography as={"p"} variant={"error"}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
