import type { Meta, StoryObj } from "@storybook/react"

import React, { useState } from "react"

import { Button } from "../button"
import { Modal } from "./modal"

const meta = {
  component: Modal,
  tags: ["autodocs"],
  title: "02. Components/Modal"
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalWithTitle: Story = {
  args: {
    children: (
      <div style={{ padding: "12px 24px" }}>
        Transaction failed. Please, write to support{" "}
        <Button fullWidth style={{ marginTop: "40px" }} variant={"primary"}>
          Back to payment
        </Button>
      </div>
    ),
    title: "Error",
    trigger: <Button variant={"outlined"}>Click me</Button>
  }
}

export const ModalWithControl: Story = {
  args: {
    children: "",
    trigger: ""
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
    }

    return (
      <Modal
        onOpenChange={setIsOpen}
        open={isOpen}
        trigger={<Button variant={"outlined"}>Click me</Button>}
      >
        <img
          alt={""}
          src={
            "https://vjoy.cc/wp-content/uploads/2020/06/98359-gorizont-palma-plyazh-more-komnata-1080x1920-1.jpg"
          }
          style={{ filter: "brightness(0.8)" }}
          width={360}
        />
        <Button fullWidth onClick={closeModal} variant={"primary"}>
          Send
        </Button>
      </Modal>
    )
  }
}
