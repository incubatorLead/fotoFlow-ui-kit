import type { Meta, StoryObj } from "@storybook/react"

import React from "react"

import { Icon, Props } from "./icon"

const meta = {
  component: Icon,
  tags: ["autodocs"],
  title: "Components/Icon"
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof Icon>

const IconsItems = [
  {
    iconId: "home-outline"
  },
  {
    iconId: "home"
  },
  {
    iconId: "plus-square-outline"
  },
  {
    iconId: "plus-square"
  },
  {
    iconId: "person-outline"
  },
  {
    iconId: "person"
  },
  {
    iconId: "trending-up"
  },
  {
    iconId: "bookmark-outline"
  },
  {
    iconId: "bookmark"
  },
  {
    iconId: "log-out"
  },
  {
    iconId: "calendar-outline"
  },
  {
    iconId: "calendar"
  },
  {
    iconId: "arrow-down"
  },
  {
    iconId: "arrow-up"
  },
  {
    iconId: "radio-button-unchecked"
  },
  {
    iconId: "radio-button-checked"
  },
  {
    iconId: "pause-circle-outline"
  },
  {
    iconId: "pause-circle"
  },
  {
    iconId: "play-circle-outline"
  },
  {
    iconId: "play-circle"
  },
  {
    iconId: "arrow-back-outline"
  },
  {
    iconId: "arrow-forward-outline"
  },
  {
    iconId: "checkmark"
  },
  {
    iconId: "done-all"
  },
  {
    iconId: "arrow-ios-back"
  },
  {
    iconId: "arrow-ios-forward"
  },
  {
    iconId: "expand"
  },
  {
    iconId: "close"
  },
  {
    iconId: "plus-circle-outline"
  },
  {
    iconId: "plus-circle"
  },
  {
    iconId: "image-outline"
  },
  {
    iconId: "image"
  },
  {
    iconId: "search-outline"
  },
  {
    iconId: "block"
  },
  {
    iconId: "menu-outline"
  },
  {
    iconId: "settings-outline"
  },
  {
    iconId: "settings"
  },
  {
    iconId: "bell-outline"
  },
  {
    iconId: "bell-fill"
  },
  {
    iconId: "color-palette-outline"
  },
  {
    iconId: "layers-outline"
  },
  {
    iconId: "layers"
  },
  {
    iconId: "eye-off-outline"
  },
  {
    iconId: "eye-off"
  },
  {
    iconId: "eye-outline"
  },
  {
    iconId: "eye"
  },
  {
    iconId: "paper-plane"
  },
  {
    iconId: "more-horizontal"
  },
  {
    iconId: "massage-circle-outline"
  },
  {
    iconId: "massage-circle"
  },
  {
    iconId: "person-remove-outline"
  },
  {
    iconId: "person-remove"
  },
  {
    iconId: "person-add-outline"
  },
  {
    iconId: "person-add"
  },
  {
    iconId: "mic-outline"
  },
  {
    iconId: "mic"
  },
  {
    iconId: "copy-outline"
  },
  {
    iconId: "copy"
  },
  {
    iconId: "pin-outline"
  },
  {
    iconId: "pin"
  },
  {
    iconId: "heart-outline"
  },
  {
    iconId: "heart"
  },
  {
    iconId: "email-outline"
  },
  {
    iconId: "email"
  },
  {
    iconId: "trash-outline"
  },
  {
    iconId: "trash"
  },
  {
    iconId: "maximize-outline"
  },
  {
    iconId: "maximize"
  },
  {
    iconId: "edit-outline"
  },
  {
    iconId: "edit"
  },
  {
    iconId: "credit-card-outline"
  },
  {
    iconId: "credit-card"
  },
  {
    iconId: "github"
  },
  {
    iconId: "recaptcha"
  },
  {
    iconId: "facebook"
  },
  {
    iconId: "google"
  },
  {
    iconId: "paypal"
  },
  {
    iconId: "stripe"
  },
  {
    iconId: "paid"
  }
]

export const BaseStory = (args: Props) => (
  <>
    {IconsItems.map(i => {
      return <Icon key={i.iconId} {...args} />
    })}
  </>
)
