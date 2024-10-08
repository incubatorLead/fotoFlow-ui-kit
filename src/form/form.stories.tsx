import type { Meta, StoryObj } from "@storybook/react"

import React, { Component } from "react"
import { useForm } from "react-hook-form"

import { Button, Typography } from "../components/"
import { FormCheckbox } from "./formCheckbox"
import { FormDatePicker } from "./formDatePicker"
import { FormInput } from "./formInput"
import { FormRadio } from "./formRadio"
import { FormSelect } from "./formSelect"
import { FormTextArea } from "./formTextArea"

const meta = {
  tags: ["autodocs"],
  title: "03. Features/Form"
} satisfies Meta<typeof Component>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgsSelect = {
  options: [
    { text: "10", value: "10" },
    { text: "50", value: "50" },
    { text: "100", value: "100" }
  ],
  placeholder: "Select-box"
}

export const Form: Story = {
  name: "Form",
  render: () => {
    const {
      control,
      formState: { errors },
      handleSubmit
    } = useForm({
      defaultValues: {
        date: "",
        gender: "",
        message: "",
        name: "",
        password: "",
        rememberMe: "",
        rememberMe2: "",
        select: ""
      }
    })

    const onSubmit = handleSubmit(data => {
      console.log(data)
    })

    return (
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px", width: "300px" }}
      >
        <FormInput control={control} labelText={"Name"} name={"name"} />
        <FormInput control={control} labelText={"Password"} name={"password"} type={"password"} />
        <FormSelect
          control={control}
          labelText={"Select numbers"}
          name={"select"}
          {...defaultArgsSelect}
        />
        <FormCheckbox
          control={control}
          labelText={
            <Typography as={"span"} variant={"regular_text_14"}>
              Remember me
            </Typography>
          }
          name={"rememberMe"}
        />
        <FormCheckbox
          control={control}
          labelText={
            <Typography as={"span"} variant={"regular_text_14"}>
              I agree to the{" "}
              <Typography as={"a"} href={"#"} target={"_blank"} variant={"regular_link"}>
                Terms of Service
              </Typography>{" "}
              and{" "}
              <Typography as={"a"} href={"#"} target={"_blank"} variant={"regular_link"}>
                Privacy Policy
              </Typography>
            </Typography>
          }
          name={"rememberMe2"}
        />
        <FormRadio
          control={control}
          labelText={
            <Typography as={"span"} variant={"regular_text_14"}>
              Man
            </Typography>
          }
          name={"gender"}
          value={"man"}
        />
        <FormRadio
          control={control}
          labelText={
            <Typography as={"span"} variant={"regular_text_14"}>
              Women
            </Typography>
          }
          name={"gender"}
          value={"women"}
        />
        <FormTextArea control={control} labelText={"Message"} name={"message"} />
        <FormDatePicker control={control} labelText={"Date of birth"} name={"date"} />
        <Typography
          as={"a"}
          href={"#"}
          style={{ alignSelf: "flex-end" }}
          variant={"regular_text_16"}
        >
          Forgot password
        </Typography>
        <Button as={"a"} href={"#"} variant={"primary"}>
          Submit
        </Button>
        <Button variant={"text"}>Reset</Button>
      </form>
    )
  }
}
