import type { ComponentPropsWithoutRef, ReactNode } from "react"

import * as Dialog from "@radix-ui/react-dialog"

import s from "./modal.module.scss"

import { Close } from "../../assets/icons/components"
import { Typography } from "../typography"
type Props = {
  children: ReactNode
  className?: string
  title?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof Dialog.Root>
export const Modal = (props: Props) => {
  const { children, className, title, trigger, ...restProps } = props

  return (
    <Dialog.Root {...restProps}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.dialogOverlay} />
        <Dialog.Content className={s.dialogContent}>
          {title && (
            <>
              <Dialog.Title className={s.title}>
                <Typography variant={"h1"}>{title}</Typography>
                {
                  <Dialog.Close className={s.closeButton}>
                    <Close />
                  </Dialog.Close>
                }
              </Dialog.Title>
            </>
          )}
          <Dialog.Description className={className}>{children}</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
