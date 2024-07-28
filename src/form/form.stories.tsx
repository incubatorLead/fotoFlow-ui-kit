import type { Meta, StoryObj } from "@storybook/react"

import { Component } from "react"
import { useForm } from "react-hook-form"

import { Button } from "../components/"
import { FormCheckbox } from "./formCheckbox"
import { FormDatePicker } from "./formDatePicker"
import { FormInput } from "./formInput"
import { FormRadio } from "./formRadio"
import { FormSelect } from "./formSelect"

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
    } = useForm()

    const onSubmit = handleSubmit(data => {
      console.log(data)
    })

    return (
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <FormInput control={control} labelText={"Name"} name={"name"} />
        <FormInput control={control} labelText={"Password"} name={"password"} type={"password"} />
        <FormSelect
          control={control}
          labelText={"Select numbers"}
          name={"select"}
          {...defaultArgsSelect}
        />
        <FormCheckbox control={control} labelText={"Remember me"} name={"rememberMe"} />
        <FormRadio control={control} labelText={"Man"} name={"gender"} value={"man"} />
        <FormRadio control={control} labelText={"Women"} name={"gender"} value={"women"} />
        <FormInput as={"textarea"} control={control} labelText={"Message"} name={"message"} />
        <FormDatePicker control={control} labelText={"Date of birth"} name={"date"} />
        <Button>Submit</Button>
      </form>
    )
  }
}
