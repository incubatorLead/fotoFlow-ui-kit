import type { Meta, StoryObj } from "@storybook/react"

import React from "react"

import { copyTextToClipboard } from "../../utils"
import { Icon, type IconId } from "./icon"

const meta = {
  component: Icon,
  tags: ["autodocs"],
  title: "01. Design System/Icons"
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

const iconsItems: { iconId: IconId }[] = [
  { iconId: "home-outline" },
  { iconId: "home" },
  { iconId: "plus-square-outline" },
  { iconId: "plus-square" },
  { iconId: "person-outline" },
  { iconId: "person" },
  { iconId: "trending-up" },
  { iconId: "bookmark-outline" },
  { iconId: "bookmark" },
  { iconId: "log-out" },
  { iconId: "calendar-outline" },
  { iconId: "calendar" },
  { iconId: "arrow-down" },
  { iconId: "arrow-up" },
  { iconId: "pause-circle-outline" },
  { iconId: "pause-circle" },
  { iconId: "play-circle-outline" },
  { iconId: "play-circle" },
  { iconId: "arrow-back-outline" },
  { iconId: "arrow-forward-outline" },
  { iconId: "checkmark" },
  { iconId: "done-all" },
  { iconId: "arrow-ios-back" },
  { iconId: "arrow-ios-forward" },
  { iconId: "expand" },
  { iconId: "close" },
  { iconId: "plus-circle-outline" },
  { iconId: "plus-circle" },
  { iconId: "image-outline" },
  { iconId: "image" },
  { iconId: "search" },
  { iconId: "block" },
  { iconId: "menu-outline" },
  { iconId: "settings-outline" },
  { iconId: "settings" },
  { iconId: "bell-outline" },
  { iconId: "bell-fill" },
  { iconId: "color-palette-outline" },
  { iconId: "layers-outline" },
  { iconId: "layers" },
  { iconId: "eye-off-outline" },
  { iconId: "eye-off" },
  { iconId: "eye-outline" },
  { iconId: "eye" },
  { iconId: "paper-plane" },
  { iconId: "more-horizontal" },
  { iconId: "massage-circle-outline" },
  { iconId: "massage-circle" },
  { iconId: "person-remove-outline" },
  { iconId: "person-remove" },
  { iconId: "person-add-outline" },
  { iconId: "person-add" },
  { iconId: "mic-outline" },
  { iconId: "mic" },
  { iconId: "copy-outline" },
  { iconId: "copy" },
  { iconId: "pin-outline" },
  { iconId: "pin" },
  { iconId: "heart-outline" },
  { iconId: "heart" },
  { iconId: "email-outline" },
  { iconId: "email" },
  { iconId: "trash-outline" },
  { iconId: "trash" },
  { iconId: "maximize-outline" },
  { iconId: "maximize" },
  { iconId: "edit-outline" },
  { iconId: "edit" },
  { iconId: "credit-card-outline" },
  { iconId: "credit-card" },
  { iconId: "github" },
  { iconId: "recaptcha" },
  { iconId: "facebook" },
  { iconId: "google" },
  { iconId: "paypal" },
  { iconId: "stripe" },
  { iconId: "paid" },
  { iconId: "united-kingdom-flag" },
  { iconId: "russia-flag" }
]

export const Default: Story = {
  render: () => (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "space-around",
        margin: "auto",
        padding: "10%",
        width: "50%"
      }}
    >
      {iconsItems.map(i => {
        return (
          <div
            key={i.iconId}
            onClick={() => copyTextToClipboard(i.iconId)}
            style={{
              alignItems: "center",
              border: "1px solid gray",
              borderRadius: "5px",
              cursor: "copy",
              display: "flex",
              height: "32px",
              justifyContent: "space-around",
              width: "32px"
            }}
            title={"Copy icon id"}
          >
            <Icon iconId={i.iconId} />
          </div>
        )
      })}
    </div>
  )
}
