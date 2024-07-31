import type { Meta, StoryObj } from "@storybook/react"

import React from "react"

import { Checkbox } from "./checkbox"

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  title: "02. Components/Checkbox"
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const DisabledCheckboxWithoutText: Story = {
  args: {
    disabled: true,
    id: "test checkbox",
    name: "testCheckbox"
  },
  name: "Disabled checkbox"
}

export const DisabledCheckboxWithText: Story = {
  args: {
    disabled: true,
    labelText: "checkbox"
  },
  name: "Disabled checkbox with text"
}

export const MultipleCheckboxesInOneStory: Story = {
  name: "Checkbox multiple selections",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Checkbox
        {...{
          id: "checkbox1",
          labelText: "checkbox 1",
          name: "checkbox1"
        }}
      />
      <Checkbox
        {...{
          id: "checkbox2",
          labelText: "checkbox 2",
          name: "checkbox2"
        }}
      />
      <Checkbox
        {...{
          id: "checkbox3",
          labelText: "checkbox 3",
          name: "checkbox3"
        }}
      />
    </div>
  )
}
