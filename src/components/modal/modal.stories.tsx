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
            "https://images.pexels.com/photos/17603742/pexels-photo-17603742/free-photo-of-college-student-chatgpt-for-studying.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    hiddenTitle: true,
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
        hiddenTitle={args.hiddenTitle}
        onOpenChange={setIsOpen}
        open={isOpen}
        title={args.title}
        trigger={<Button variant={"outlined"}>Click me</Button>}
      >
        <img
          alt={""}
          src={
            "https://images.pexels.com/photos/17603742/pexels-photo-17603742/free-photo-of-college-student-chatgpt-for-studying.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
