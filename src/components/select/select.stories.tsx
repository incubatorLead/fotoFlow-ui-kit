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
    name: "select",
    open: true,
    options: [
      { text: "10", value: "10" },
      { text: "50", value: "50" },
      { text: "100", value: "100" }
    ],
    placeholder: "Select-box"
  }
}
export const withLabel = {
  args: {
    labelText: "Select",
    name: "select",
    options: [
      { text: "10", value: "10" },
      { text: "50", value: "50" },
      { text: "100", value: "100" }
    ],
    placeholder: "Select-box"
  }
}
export const withIcons = {
  args: {
    defaultValue: "canada",
    labelText: "Country",
    name: "select",
    options: [
      { icon: "https://flagicons.lipis.dev/flags/4x3/ca.svg", text: "Canada", value: "canada" },
      { icon: "https://flagicons.lipis.dev/flags/4x3/cn.svg", text: "China", value: "china" },
      { icon: "https://flagicons.lipis.dev/flags/4x3/hn.svg", text: "Honduras", value: "honduras" }
    ],
    placeholder: "Select-box"
  }
}
export const withMinWidth = {
  args: {
    defaultValue: "canada",
    labelText: "Min-Width",
    minWidth: 163,
    name: "select",
    options: [
      { icon: "https://flagicons.lipis.dev/flags/4x3/ca.svg", text: "Canada", value: "canada" },
      { icon: "https://flagicons.lipis.dev/flags/4x3/cn.svg", text: "China", value: "china" },
      { icon: "https://flagicons.lipis.dev/flags/4x3/hn.svg", text: "Honduras", value: "honduras" }
    ]
  }
}
export const Disabled = {
  args: {
    disabled: true,
    name: "select",
    placeholder: "Select disabled"
  }
}
export const disabledWithLabel = {
  args: {
    disabled: true,
    labelText: "Disabled",
    name: "select",
    placeholder: "Select disabled with label"
  }
}
