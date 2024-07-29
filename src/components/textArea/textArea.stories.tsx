import type { Meta, StoryObj } from "@storybook/react"

import { TextArea } from "./textArea"

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" }
    },
    error: {
      control: { type: "text" }
    },
    required: {
      control: { type: "boolean" }
    }
  },
  component: TextArea,
  tags: ["autodocs"],
  title: "02. Components/TextArea"
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  disabled: false,
  error: "",
  labelText: "Label",
  placeholder: "Placeholder",
  required: false
}

export const DefaultTextArea: Story = {
  args: {
    ...defaultArgs
  },
  name: "Default textarea"
}

export const RequiredTextArea: Story = {
  args: {
    ...defaultArgs,
    required: true
  },
  name: "Required textarea"
}

export const ActiveTextArea: Story = {
  args: {
    ...defaultArgs
  },
  name: "Active textarea",
  parameters: {
    pseudo: { focus: true }
  }
}

export const TextAreaWithError: Story = {
  args: {
    ...defaultArgs,
    error: "Error text"
  },
  name: "Textarea with error",
  parameters: {
    pseudo: { invalid: true }
  }
}

export const HoveredTextArea: Story = {
  args: {
    ...defaultArgs
  },
  name: "Hovered textarea",
  parameters: {
    pseudo: { hover: true }
  }
}

export const FocusedTextArea: Story = {
  args: {
    ...defaultArgs
  },
  name: "Focused textarea",
  parameters: {
    pseudo: { focusVisible: true }
  }
}

export const DisabledTextArea: Story = {
  args: {
    ...defaultArgs,
    disabled: true
  },
  name: "Disabled textarea"
}
