import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react"

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { clsx } from "clsx"

import s from "./dropdown.module.scss"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({ className, ...restProps }, ref) => {
  return (
    <DropdownMenuPrimitive.Trigger
      asChild
      className={clsx(s.trigger, className)}
      ref={ref}
      {...restProps}
    />
  )
})

const DropdownPortal = DropdownMenuPrimitive.Portal

const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  { isArrow?: boolean } & ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ align = "end", children, className, isArrow = true, sideOffset = 8, ...restProps }, ref) => (
  <DropdownPortal>
    <DropdownMenuPrimitive.Content
      align={align}
      className={clsx(s.content, className)}
      ref={ref}
      sideOffset={sideOffset}
      {...restProps}
    >
      {isArrow && <DropdownMenuPrimitive.Arrow className={s.arrow} />}
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownPortal>
))

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...restProps }, ref) => (
  <DropdownMenuPrimitive.Item className={clsx(s.item, className)} ref={ref} {...restProps} />
))

DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...restProps }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={clsx(s.separator, className)}
    ref={ref}
    {...restProps}
  />
))

DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuLabel = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Label>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...restProps }, ref) => (
  <DropdownMenuPrimitive.Label className={clsx(s.label, className)} ref={ref} {...restProps} />
))

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
}
