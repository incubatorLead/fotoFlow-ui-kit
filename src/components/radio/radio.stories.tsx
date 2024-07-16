import type { Meta } from "@storybook/react"

import React from "react"

import { Radio } from "./radio"

const meta = {
  component: Radio,
  tags: ["autodocs"],
  title: "02. Components/Radio"
} satisfies Meta<typeof Radio>

export default meta

export const DisabledRadioWithoutText = {
  args: {
    disabled: true,
    id: "test radio",
    name: "testRadio"
  },
  name: "Disabled Radio"
}

export const DisabledRadioWithText = {
  args: {
    disabled: true,
    labelText: "radio"
  },
  name: "Disabled Radio with text"
}

export const MultipleRadiosInOneStory = (args: any) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <Radio {...args.radio1} />
    <Radio {...args.radio2} />
    <Radio {...args.radio3} />
  </div>
)

MultipleRadiosInOneStory.storyName = "Radio multiple selections"

MultipleRadiosInOneStory.args = {
  radio1: {
    id: "testradio1",
    labelText: "radio 1",
    name: "radio"
  },
  radio2: {
    id: "testradio2",
    labelText: "radio 2",
    name: "radio"
  },
  radio3: {
    id: "testradio3",
    labelText: "radio 3",
    name: "radio"
  }
}
