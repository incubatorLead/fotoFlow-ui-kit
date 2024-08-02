import type { Meta, StoryObj } from "@storybook/react"

import React, { useState } from "react"

import {
  BellFill,
  BellOutline,
  Block,
  MoreHorizontal,
  PersonRemoveOutline
} from "../../assets/icons/components"
import { Button } from "../button"
import { Typography } from "../typography"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./dropdown"
const meta = {
  component: DropdownMenu,
  tags: ["autodocs"],
  title: "02. Components/Dropdown"
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const NotificationDropdown: Story = {
  name: "Notification dropdown",
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <DropdownMenu
        onOpenChange={open => {
          setIsOpen(open)
        }}
      >
        <DropdownMenuTrigger>
          <Button style={{ color: isOpen ? "#397DF6FF" : "#fff", padding: "0" }} variant={"text"}>
            {isOpen ? <BellFill /> : <BellOutline />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{ maxWidth: "331px" }}>
          <DropdownMenuLabel>
            <Typography as={"h3"} variant={"bold_text_14"}>
              Уведомления
            </Typography>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography as={"h4"} variant={"bold_text_14"}>
                Новое уведомление!{" "}
                <Typography as={"span"} style={{ color: "#397DF6" }} variant={"small_text"}>
                  Новое
                </Typography>
              </Typography>
              <div>
                <Typography variant={"regular_text_14"}>
                  Следующий платеж у вас спишется через 1 день
                </Typography>
                <Typography as={"span"} style={{ color: "#8D9094" }} variant={"small_text"}>
                  1 час назад
                </Typography>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography as={"h4"} variant={"bold_text_14"}>
                Новое уведомление!{" "}
                <Typography as={"span"} style={{ color: "#397DF6" }} variant={"small_text"}>
                  Новое
                </Typography>
              </Typography>
              <div>
                <Typography variant={"regular_text_14"}>
                  Ваша подписка истекает через 7 дней
                </Typography>
                <Typography as={"span"} style={{ color: "#8D9094" }} variant={"small_text"}>
                  1 день назад
                </Typography>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Typography as={"h4"} variant={"bold_text_14"}>
                Новое уведомление!{" "}
                <Typography as={"span"} style={{ color: "#397DF6" }} variant={"small_text"}>
                  Новое
                </Typography>
              </Typography>
              <div>
                <Typography variant={"regular_text_14"}>
                  Ваша подписка истекает через 7 дней
                </Typography>
                <Typography as={"span"} style={{ color: "#8D9094" }} variant={"small_text"}>
                  1 день назад
                </Typography>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
}

export const HeaderDropdown: Story = {
  name: "Header dropdown",
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button style={{ padding: "0" }} variant={"text"}>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        alignOffset={25}
        isArrow={false}
        sideOffset={0}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <DropdownMenuItem style={{ display: "flex", gap: "12px" }}>
          <PersonRemoveOutline />
          <Typography as={"span"} variant={"regular_text_14"}>
            Delete User
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuItem style={{ display: "flex", gap: "12px" }}>
          <Block />
          <Typography as={"span"} variant={"regular_text_14"}>
            Ban in the system
          </Typography>
        </DropdownMenuItem>
        <DropdownMenuItem style={{ display: "flex", gap: "12px" }}>
          <MoreHorizontal />
          <Typography as={"span"} variant={"regular_text_14"}>
            More Information
          </Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
