import type { Meta, StoryObj } from "@storybook/react"

import { IconRussiaFlag, IconUnitedKingdomFlag } from "../../assets/icons/components"
import { Select } from "./select"

const meta = {
  component: Select,
  tags: ["autodocs"],
  title: "02. Components/Select"
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  options: [
    { text: "10", value: "10" },
    { text: "50", value: "50" },
    { text: "100", value: "100" }
  ],
  placeholder: "Select-box"
}

export const Default: Story = {
  args: {
    ...defaultArgs
  }
}

export const WithLabel: Story = {
  args: {
    ...defaultArgs,
    labelText: "Select",
    name: "select"
  }
}

export const WithIcons: Story = {
  args: {
    labelText: "Country",
    name: "select",
    options: [
      { icon: <IconUnitedKingdomFlag />, text: "UK", value: "uk" },
      { icon: <IconRussiaFlag />, text: "RU", value: "ru" }
    ],
    placeholder: "Select-box"
  }
}

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    labelText: "Disabled",
    name: "select",
    options: [],
    placeholder: "Select disabled with label"
  }
}
