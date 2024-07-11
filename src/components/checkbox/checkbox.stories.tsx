import type { Meta } from "@storybook/react"

import { Checkbox } from "./checkbox"

const meta = {
  component: Checkbox,
  tags: ["autodocs"],
  title: "Components/Checkbox"
} satisfies Meta<typeof Checkbox>

export default meta

export const DisabledCheckboxWithoutText = {
  args: {
    disabled: true,
    id: "test checkbox",
    name: "testCheckbox"
  },
  name: "Disabled Checkbox"
}

export const DisabledCheckboxWithText = {
  args: {
    disabled: true,
    labelText: "checkbox"
  },
  name: "Disabled Checkbox with text"
}

export const CheckboxWithoutText = {
  args: {
    id: "test checkbox 2"
  },
  name: "Checkbox"
}

export const CheckboxWithText = {
  args: {
    labelText: "checkbox 2"
  },
  name: "Checkbox with text"
}
