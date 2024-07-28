import React, { type ComponentPropsWithoutRef, type ReactNode } from "react"

import * as ScrollArea from "@radix-ui/react-scroll-area"
import { clsx } from "clsx"

import s from "./scrollbar.module.scss"

type Props = {
  children: ReactNode
  className?: string
  maxHeight?: number | string
  maxWidth?: number | string
  type?: ScrollArea.ScrollAreaProps["type"]
} & ComponentPropsWithoutRef<"div">

export const Scrollbar = ({
  children,
  className,
  maxHeight = "100%",
  maxWidth = "100%",
  type = "auto",
  ...restProps
}: Props) => {
  const maxHeightConverted = typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
  const maxWidthConverted = typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth

  const viewportStyles = { maxHeight: maxHeightConverted, maxWidth: maxWidthConverted }

  return (
    <ScrollArea.Root className={s.scrollableContainer} type={type}>
      <ScrollArea.Viewport
        className={clsx(s.viewport, className)}
        style={viewportStyles}
        {...restProps}
      >
        {children}
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className={s.scrollbar} orientation={"vertical"}>
        <ScrollArea.Thumb className={s.thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar className={s.scrollbar} orientation={"horizontal"}>
        <ScrollArea.Thumb className={s.thumb} />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}
