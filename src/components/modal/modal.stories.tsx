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
    title: "Control",
    trigger: ""
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
    }

    return (
      <Modal
        onOpenChange={setIsOpen}
        open={isOpen}
        title={args.title}
        trigger={<Button variant={"outlined"}>Click me</Button>}
      >
        <img
          alt={""}
          src={
            "https://media.gettyimages.com/id/1414393912/photo/smiling-helping-and-working-customer-support-service-worker-with-a-headset-and-office.jpg?s=1024x1024&w=gi&k=20&c=MOnj236Hu9HhmYVAqk7nQy0OuMWIFMjYdmopcIMYSSg="
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

export const ModalWithHiddenTitle: Story = {
  args: {
    children: "",
    isTitleHidden: true,
    title: "Hidden Title",
    trigger: ""
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
      setIsOpen(false)
    }

    return (
      <Modal
        isTitleHidden={args.isTitleHidden}
        onOpenChange={setIsOpen}
        open={isOpen}
        title={args.title}
        trigger={<Button variant={"outlined"}>Click me</Button>}
      >
        <img
          alt={""}
          src={
            "https://media.gettyimages.com/id/1414393912/photo/smiling-helping-and-working-customer-support-service-worker-with-a-headset-and-office.jpg?s=1024x1024&w=gi&k=20&c=MOnj236Hu9HhmYVAqk7nQy0OuMWIFMjYdmopcIMYSSg="
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
