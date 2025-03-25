import type { Meta, StoryObj } from "@storybook/react"

import React from "react"

import { Radio } from "./radio"

const meta = {
  component: Radio,
  tags: ["autodocs"],
  title: "02. Components/Radio"
} satisfies Meta<typeof Radio>

export default meta

type Story = StoryObj<typeof meta>

export const DisabledRadioWithoutText: Story = {
  args: {
    disabled: true,
    id: "test radio",
    name: "testRadio"
  },
  name: "Disabled Radio"
}

export const DisabledRadioWithText: Story = {
  args: {
    disabled: true,
    labelText: "radio"
  },
  name: "Disabled Radio with text"
}

export const MultipleRadiosInOneStory: Story = {
  name: "Radio multiple selections",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Radio id={"testradio1"} labelText={"radio 1"} name={"radio"} />
      <Radio id={"testradio2"} labelText={"radio 2"} name={"radio"} />
      <Radio id={"testradio3"} labelText={"radio 3"} name={"radio"} />
    </div>
  )
}
