import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./input"

const meta = {
  argTypes: {
    as: {
      control: { type: "radio" },
      options: ["input", "textarea"]
    },
    disabled: {
      control: { type: "boolean" }
    },
    error: {
      control: { type: "text" }
    },
    required: {
      control: { type: "boolean" }
    },
    type: {
      control: { type: "radio" },
      options: ["text", "email", "password", "search"]
    }
  },
  component: Input,
  tags: ["autodocs"],
  title: "02. Components/Input"
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  disabled: false,
  error: "",
  labelText: "Label",
  placeholder: "Placeholder",
  required: false,
  type: "text"
}

export const DefaultInput: Story = {
  args: {
    ...defaultArgs
  },
  name: "Default input"
}

export const RequiredInput: Story = {
  args: {
    ...defaultArgs,
    required: true
  },
  name: "Required input"
}

export const ActiveInput: Story = {
  args: {
    ...defaultArgs
  },
  name: "Active input",
  parameters: {
    pseudo: { focus: true }
  }
}

export const InputWithError: Story = {
  args: {
    ...defaultArgs,
    error: "Error text"
  },
  name: "Input with error",
  parameters: {
    pseudo: { invalid: true }
  }
}

export const HoveredInput: Story = {
  args: {
    ...defaultArgs
  },
  name: "Hovered input",
  parameters: {
    pseudo: { hover: true }
  }
}

export const FocusedInput: Story = {
  args: {
    ...defaultArgs
  },
  name: "Focused input",
  parameters: {
    pseudo: { focusVisible: true }
  }
}

export const DisabledInput: Story = {
  args: {
    ...defaultArgs,
    disabled: true
  },
  name: "Disabled input"
}

export const SearchInput: Story = {
  args: {
    ...defaultArgs,
    type: "search"
  },
  name: "Search input"
}

export const EmailInput: Story = {
  args: {
    ...defaultArgs,
    placeholder: "Example@mail.com",
    type: "email"
  },
  name: "Email input"
}

export const PasswordInput: Story = {
  args: {
    ...defaultArgs,
    type: "password",
    value: "Entered password, which is very long and strong"
  },
  name: "Password input"
}

export const DisabledPasswordInput: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    type: "password",
    value: "Disabled password"
  },
  name: "Disabled password input"
}

export const Textarea: Story = {
  args: {
    ...defaultArgs,
    as: "textarea"
  }
}
