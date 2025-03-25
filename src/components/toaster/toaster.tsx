import { Toaster as Sonner } from "sonner"

import s from "./toaster.module.scss"

export const Toaster = () => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          cancelButton: s.close,
          icon: s.emptyIcon,
          title: s.text,
          toast: s.toast
        },
        unstyled: true
      }}
    />
  )
}
