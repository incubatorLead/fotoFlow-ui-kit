import { Toaster as Sonner } from "sonner"

import "./toaster.scss"

export const Toaster = () => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          cancelButton: "btnReset close",
          icon: "emptyIcon",
          title: "text",
          toast: "toast"
        },
        unstyled: true
      }}
    />
  )
}
