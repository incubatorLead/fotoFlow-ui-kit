import type { ComponentPropsWithoutRef, ReactNode } from "react"

import * as TabsPrimitive from "@radix-ui/react-tabs"
import clsx from "clsx"

import s from "./tabs.module.scss"

import { Typography } from "../typography"

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  children?: ReactNode
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof TabsPrimitive.Root>

export const Tabs = (props: TabsProps) => {
  const { children, className, tabs, ...restProps } = props

  return (
    <TabsPrimitive.Root className={clsx(s.tabs, className)} {...restProps}>
      <TabsPrimitive.List className={s.list}>
        {tabs.map(tab => (
          <TabsPrimitive.Trigger
            className={s.tab}
            disabled={tab.disabled}
            key={tab.value}
            value={tab.value}
          >
            <Typography as={"span"} variant={"h3"}>
              {tab.title}
            </Typography>
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {children}
    </TabsPrimitive.Root>
  )
}

export type TabContentType = {
  children: ReactNode
  value: string
}

export const TabContent = ({ children, value }: TabContentType) => {
  return <TabsPrimitive.Content value={value}>{children}</TabsPrimitive.Content>
}
