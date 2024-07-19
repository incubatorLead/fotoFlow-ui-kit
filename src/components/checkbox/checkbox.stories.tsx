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
  name: "Disabled Checkbox"
}

export const DisabledCheckboxWithText: Story = {
  args: {
    disabled: true,
    labelText: "checkbox"
  },
  name: "Disabled Checkbox with text"
}

// ToDo: Fix any type!
export const MultipleCheckboxesInOneStory = (args: any) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <Checkbox {...args.checkbox1} />
    <Checkbox {...args.checkbox2} />
    <Checkbox {...args.checkbox3} />
  </div>
)

MultipleCheckboxesInOneStory.storyName = "Checkbox multiple selections"

MultipleCheckboxesInOneStory.args = {
  checkbox1: {
    id: "checkbox1",
    labelText: "checkbox 1",
    name: "checkbox1"
  },
  checkbox2: {
    id: "checkbox2",
    labelText: "checkbox 2",
    name: "checkbox2"
  },
  checkbox3: {
    id: "checkbox3",
    labelText: "checkbox 3",
    name: "checkbox3"
  }
}
