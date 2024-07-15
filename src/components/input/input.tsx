import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
  useId,
  useState
} from "react"

import clsx from "clsx"

import s from "./input.module.scss"

const DEFAULT_TYPE = "input"

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
  as?: T
  error?: string
  labelText?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Input = forwardRef(
  <T extends ElementType = typeof DEFAULT_TYPE>(
    props: Props<T>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const {
      as: Component = DEFAULT_TYPE,
      className,
      disabled,
      error,
      id,
      labelText,
      required,
      type = "text",
      ...restProps
    } = props

    const generatedId = useId()
    const inputId = id ?? generatedId
    const isInputPassword = type === "password"
    const isInputSearch = type === "search"
    const isTextarea = Component === "textarea"

    const [isPasswordHidden, setPasswordHidden] = useState(isInputPassword)
    const toggleHidePassword = () => setPasswordHidden(!isPasswordHidden)

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
              <svg
                className={s.inputSearchIcon}
                fill={"currentColor"}
                height={"20"}
                viewBox={"0 0 20 20"}
                width={"20"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <g clipPath={"url(#clip0_316_7910)"}>
                  <path
                    d={
                      "M17.2583 16.075L14.425 13.25C15.3392 12.0854 15.8352 10.6472 15.8333 9.16667C15.8333 7.84813 15.4423 6.5592 14.7098 5.46287C13.9773 4.36654 12.9361 3.51206 11.7179 3.00747C10.4997 2.50289 9.15927 2.37087 7.86607 2.6281C6.57286 2.88534 5.38497 3.52027 4.45262 4.45262C3.52027 5.38497 2.88534 6.57286 2.6281 7.86607C2.37087 9.15927 2.50289 10.4997 3.00747 11.7179C3.51206 12.9361 4.36654 13.9773 5.46287 14.7098C6.5592 15.4423 7.84813 15.8333 9.16667 15.8333C10.6472 15.8352 12.0854 15.3392 13.25 14.425L16.075 17.2583C16.1525 17.3364 16.2446 17.3984 16.3462 17.4407C16.4477 17.4831 16.5567 17.5048 16.6667 17.5048C16.7767 17.5048 16.8856 17.4831 16.9871 17.4407C17.0887 17.3984 17.1809 17.3364 17.2583 17.2583C17.3364 17.1809 17.3984 17.0887 17.4407 16.9871C17.4831 16.8856 17.5048 16.7767 17.5048 16.6667C17.5048 16.5567 17.4831 16.4477 17.4407 16.3462C17.3984 16.2446 17.3364 16.1525 17.2583 16.075ZM4.16667 9.16667C4.16667 8.17776 4.45991 7.21106 5.00932 6.38882C5.55873 5.56657 6.33962 4.92571 7.25325 4.54727C8.16688 4.16883 9.17222 4.06982 10.1421 4.26274C11.112 4.45567 12.0029 4.93187 12.7022 5.63114C13.4015 6.3304 13.8777 7.22131 14.0706 8.19122C14.2635 9.16112 14.1645 10.1665 13.7861 11.0801C13.4076 11.9937 12.7668 12.7746 11.9445 13.324C11.1223 13.8734 10.1556 14.1667 9.16667 14.1667C7.84059 14.1667 6.56882 13.6399 5.63114 12.7022C4.69345 11.7645 4.16667 10.4928 4.16667 9.16667Z"
                    }
                  />
                </g>
                <defs>
                  <clipPath id={"clip0_316_7910"}>
                    <rect height={"20"} width={"20"} />
                  </clipPath>
                </defs>
              </svg>
            )}
            <Component
              className={classNames.input}
              disabled={disabled}
              id={inputId}
              ref={ref}
              type={inputType}
              {...restProps}
            />
            {isInputPassword && (
              <svg
                className={classNames.inputPassword}
                fill={"currentColor"}
                height={"24"}
                onClick={toggleHidePassword}
                viewBox={"0 0 24 24"}
                width={"24"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <g clipPath={"url(#clip0_303_3487)"}>
                  <path
                    d={
                      "M21.8699 11.5C21.2299 10.39 17.7099 4.81999 11.7299 4.99999C6.19995 5.13999 2.99995 9.99999 2.12995 11.5C2.04218 11.652 1.99597 11.8245 1.99597 12C1.99597 12.1755 2.04218 12.348 2.12995 12.5C2.75995 13.59 6.12995 19 12.0199 19H12.2699C17.7999 18.86 21.0099 14 21.8699 12.5C21.9577 12.348 22.0039 12.1755 22.0039 12C22.0039 11.8245 21.9577 11.652 21.8699 11.5ZM12.2199 17C7.90995 17.1 5.09995 13.41 4.21995 12C5.21995 10.39 7.82995 7.09999 11.8299 6.99999C16.1199 6.88999 18.9399 10.59 19.8299 12C18.7999 13.61 16.2199 16.9 12.2199 17Z"
                    }
                  />
                  <path
                    d={
                      "M12 8.5C11.3078 8.5 10.6311 8.70527 10.0555 9.08986C9.47993 9.47444 9.03133 10.0211 8.76642 10.6606C8.50152 11.3001 8.4322 12.0039 8.56725 12.6828C8.7023 13.3618 9.03564 13.9854 9.52513 14.4749C10.0146 14.9644 10.6383 15.2977 11.3172 15.4327C11.9961 15.5678 12.6999 15.4985 13.3394 15.2336C13.9789 14.9687 14.5256 14.5201 14.9101 13.9445C15.2947 13.3689 15.5 12.6922 15.5 12C15.5 11.0717 15.1313 10.1815 14.4749 9.52513C13.8185 8.86875 12.9283 8.5 12 8.5ZM12 13.5C11.7033 13.5 11.4133 13.412 11.1666 13.2472C10.92 13.0824 10.7277 12.8481 10.6142 12.574C10.5007 12.2999 10.4709 11.9983 10.5288 11.7074C10.5867 11.4164 10.7296 11.1491 10.9393 10.9393C11.1491 10.7296 11.4164 10.5867 11.7074 10.5288C11.9983 10.4709 12.2999 10.5006 12.574 10.6142C12.8481 10.7277 13.0824 10.92 13.2472 11.1666C13.412 11.4133 13.5 11.7033 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5Z"
                    }
                  />
                </g>
                <defs>
                  <clipPath id={"clip0_303_3487"}>
                    <rect height={"24"} width={"24"} />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>
        </div>
        {error && <span className={s.error}>{error}</span>}
      </div>
    )
  }
)
