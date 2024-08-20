import type { Meta, StoryObj } from "@storybook/react"

import React from "react"

import { Typography } from "../typography"
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
  name: "Disabled checkbox with text",
  render: () => (
    <Checkbox
      disabled
      id={"checkbox1"}
      labelText={
        <Typography as={"span"} variant={"regular_text_14"}>
          Checkbox 1
        </Typography>
      }
      name={"checkbox1"}
    />
  )
}

export const MultipleCheckboxes: Story = {
  name: "Checkbox multiple selections",
  render: () => (
    <div
      style={{
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "230px"
      }}
    >
      <Checkbox
        id={"checkbox1"}
        labelText={
          <Typography as={"span"} variant={"regular_text_14"}>
            Checkbox type 1
          </Typography>
        }
        name={"checkbox1"}
      />
      <Checkbox
        id={"checkbox2"}
        labelText={
          <Typography as={"span"} variant={"regular_text_14"}>
            heckbox type 2
          </Typography>
        }
        name={"checkbox2"}
      />

      <Checkbox
        id={"checkbox6"}
        labelText={
          <Typography as={"span"} variant={"regular_text_14"}>
            I agree to the{" "}
            <Typography as={"a"} target={"_blank"} variant={"regular_link"}>
              Terms of Service
            </Typography>{" "}
            and{" "}
            <Typography as={"a"} target={"_blank"} variant={"regular_link"}>
              Privacy Policy
            </Typography>
          </Typography>
        }
        name={"checkbox6"}
      />
    </div>
  )
}

export const DisabledMultipleCheckboxesInOneStory: Story = {
  name: "Disabled Checkbox multiple selections",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <Checkbox
        disabled
        id={"checkbox1"}
        labelText={
          <Typography as={"span"} variant={"regular_text_14"}>
            checkbox 1
          </Typography>
        }
        name={"checkbox1"}
      />
      <Checkbox
        disabled
        id={"checkbox2"}
        labelText={
          <Typography as={"span"} variant={"regular_text_14"}>
            checkbox 2
          </Typography>
        }
        name={"checkbox2"}
      />
      <Checkbox
        disabled
        id={"checkbox3"}
        labelText={
          <Typography as={"span"} variant={"regular_text_14"}>
            checkbox 3
          </Typography>
        }
        name={"checkbox3"}
      />
    </div>
  )
}
