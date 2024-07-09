import type { Meta } from "@storybook/react"

import { Button } from "./button"

const meta = {
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button"
} satisfies Meta<typeof Button>

export default meta

export const Default = {
  args: {
    children: "Default button"
  }
}

export const AlertOnClick = {
  args: {
    children: "Alert!",
    onClick: () => alert("Button clicked"),
    variant: "secondary"
  },
  name: "alert",
  parameters: {
    docs: {
      description: {
        story: "test test"
      }
    }
  }
}

export const ButtonAsLink = {
  args: {
    as: "a",
    children: "This is a link",
    href: "https://google.com",
    target: "_blank",
    variant: "outlined"
  }
}
