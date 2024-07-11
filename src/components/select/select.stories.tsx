import type { Meta } from "@storybook/react"

import { Select } from "./select"

const meta = {
  component: Select,
  tags: ["autodocs"],
  title: "Components/Select"
} satisfies Meta<typeof Select>

export default meta

export const Default = {
  args: {
    name: "Default",
    options: [
      { text: "10", value: "10" },
      { text: "50", value: "50" },
      { text: "100", value: "100" }
    ],
    placeholder: "Select-box"
  }
}

export const Open = {
  args: {
    open: true,
    options: [
      { text: "10", value: "10" },
      { text: "50", value: "50" },
      { text: "100", value: "100" }
    ],
    placeholder: "Select-box"
  },
  name: "Open"
}
export const Disabled = {
  args: {
    disabled: true,
    name: "Disabled",
    options: [
      { text: "10", value: "10" },
      { text: "50", value: "50" },
      { text: "100", value: "100" }
    ],
    placeholder: "Select-box"
  }
}
