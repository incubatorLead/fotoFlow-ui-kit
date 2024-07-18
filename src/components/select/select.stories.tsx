import type { Meta } from "@storybook/react"

import { Select } from "./select"

const meta = {
  component: Select,
  tags: ["autodocs"],
  title: "Components/Select"
} satisfies Meta<typeof Select>

export default meta

const defaultArgs = {
  options: [
    { text: "10", value: "10" },
    { text: "50", value: "50" },
    { text: "100", value: "100" }
  ],
  placeholder: "Select-box"
}

export const Default = {
  args: {
    ...defaultArgs
  }
}

export const Open = {
  args: {
    ...defaultArgs,
    name: "select",
    open: true
  }
}
export const withLabel = {
  args: {
    ...defaultArgs,
    labelText: "Select",
    name: "select"
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

export const disabledWithLabel = {
  args: {
    disabled: true,
    labelText: "Disabled",
    name: "select",
    placeholder: "Select disabled with label"
  }
}
