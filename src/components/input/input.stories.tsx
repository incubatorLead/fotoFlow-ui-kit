import type { Meta } from "@storybook/react"

import { Input } from "./input"

const meta = {
  argTypes: {
    error: {
      control: { type: "text" }
    },
    type: {
      control: { type: "radio" },
      options: ["text", "email", "password", "search"]
    }
  },
  component: Input,
  tags: ["autodocs"],
  title: "Components/Input"
} satisfies Meta<typeof Input>

export default meta

const defaultArgs = {
  labelText: "Label",
  placeholder: "Placeholder",
  type: "text"
}

export const DefaultInput = {
  args: {
    ...defaultArgs
  },
  name: "Default input"
}

export const ActiveInput = {
  args: {
    ...defaultArgs
  },
  name: "Active input",
  parameters: {
    pseudo: { focus: true }
  }
}

export const InputWithError = {
  args: {
    ...defaultArgs,
    error: "Error text"
  },
  name: "Input with error",
  parameters: {
    pseudo: { invalid: true }
  }
}

export const HoveredInput = {
  args: {
    ...defaultArgs
  },
  name: "Hovered input",
  parameters: {
    pseudo: { hover: true }
  }
}

export const FocusedInput = {
  args: {
    ...defaultArgs
  },
  name: "Focused input",
  parameters: {
    pseudo: { focusVisible: true }
  }
}

export const DisabledInput = {
  args: {
    ...defaultArgs,
    disabled: true
  },
  name: "Disabled input"
}

export const SearchInput = {
  args: {
    ...defaultArgs,
    type: "search"
  },
  name: "Search input"
}

export const EmailInput = {
  args: {
    ...defaultArgs,
    placeholder: "Example@mail.com",
    type: "email"
  },
  name: "Email input"
}

export const PasswordInput = {
  args: {
    ...defaultArgs,
    type: "password",
    value: "Entered password, which is very long and strong"
  },
  name: "Password input"
}
