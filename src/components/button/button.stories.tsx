import type { Meta, StoryObj } from "@storybook/react"

import { IconRussiaFlag, IconUnitedKingdomFlag } from "../../assets/icons/components"
import { Button } from "./"

const meta = {
  component: Button,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  title: "02. Components/Button"
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary Button"
  }
}

export const PrimaryDisabled: Story = {
  args: {
    children: "Primary Button Disabled",
    disabled: true,
    variant: "primary"
  }
}

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary"
  }
}

export const SecondaryDisabled: Story = {
  args: {
    children: "Secondary Button Disabled",
    disabled: true,
    variant: "secondary"
  }
}

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined"
  }
}

export const OutlinedDisabled: Story = {
  args: {
    children: "Outlined Button Disabled",
    disabled: true,
    variant: "outlined"
  }
}

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text"
  }
}

export const TextDisabled: Story = {
  args: {
    children: "Text Button Disabled",
    disabled: true,
    variant: "text"
  }
}

export const AsLink: Story = {
  args: {
    as: "a",
    children: "Link that looks like a button"
  }
}

export const FullWidth: Story = {
  args: {
    children: "Full width button",
    fullWidth: true
  }
}

export const WithIcon: Story = {
  args: {
    children: <IconRussiaFlag />,
    fullWidth: true,
    variant: "text"
  }
}

export const WithIconAndText: Story = {
  args: {
    children: (
      <>
        <IconUnitedKingdomFlag /> UK
      </>
    ),
    fullWidth: true,
    variant: "text"
  }
}
