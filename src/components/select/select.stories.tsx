import type { Meta, StoryObj } from "@storybook/react"

import { Icon } from "../icon"
import { Select } from "./select"

const meta = {
  component: Select,
  tags: ["autodocs"],
  title: "02. Components/Select"
} satisfies Meta<typeof Select>

export default meta

// ToDo: Component type instead of meta.
type Story = StoryObj<typeof Select>

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

// ToDo: body data-scroll-locked=1
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
      { icon: <Icon iconId={"united-kingdom-flag"} />, text: "UK", value: "uk" },
      { icon: <Icon iconId={"russia-flag"} />, text: "RU", value: "ru" }
    ],
    placeholder: "Select-box"
  }
}

export const DisabledWithLabel: Story = {
  args: {
    disabled: true,
    labelText: "Disabled",
    name: "select",
    placeholder: "Select disabled with label"
  }
}
