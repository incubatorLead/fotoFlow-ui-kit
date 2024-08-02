import type { Meta, StoryObj } from "@storybook/react"

import React, { Fragment } from "react"

import { toast } from "sonner"

import { IconClose } from "../../assets/icons/components"
import { Button } from "../button"
import { Toaster } from "./toaster"
const meta = {
  component: Toaster,
  tags: ["autodocs"],
  title: "02. Components/Toast"
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof meta>

export const ToastsWithControl: Story = {
  name: "Toasts",
  render: () => (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          onClick={() =>
            toast.success("Your settings are saved", {
              cancel: {
                label: <IconClose />,
                onClick: () => {}
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
                label: <IconClose />,
                onClick: () => {}
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
