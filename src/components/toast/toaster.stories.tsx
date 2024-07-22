import type { Meta, StoryObj } from "@storybook/react"

import React, { Fragment } from "react"

import { toast } from "sonner"

import { Button } from "../button"
import { Icon } from "../icon"
import { Toaster } from "./toaster"

const meta = {
  component: Toaster,
  tags: ["autodocs"],
  title: "02. Components/Toast"
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof Toaster>

export const ToastsWithControl: Story = {
  render: function Render() {
    return (
      <>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            onClick={() =>
              toast.success("Your settings are saved", {
                cancel: {
                  label: <Icon iconId={"close"} />,
                  // TODO is it possible to remove onClick
                  onClick: () => console.log("Cancel!")
                },
                duration: 5000,
                position: "bottom-left"
              })
            }
            style={{ backgroundColor: "#0a6638" }}
          >
            Show Success Toast
          </Button>
          <Button
            onClick={() =>
              toast.error("Error! Server is not available", {
                cancel: {
                  label: <Icon iconId={"close"} />,
                  // TODO is it possible to remove onClick
                  onClick: () => console.log("Cancel!")
                },
                duration: 5000,
                position: "bottom-left"
              })
            }
            style={{ backgroundColor: "#660a1d" }}
          >
            Show Error Toast
          </Button>
        </div>
        <Toaster />
      </>
    )
  }
}
