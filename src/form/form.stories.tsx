import type { Meta, StoryObj } from "@storybook/react"

import { useForm } from "react-hook-form"

import { FormCheckbox } from "./form-checkbox"
import { FormInput } from "./form-input"
import { FormRadio } from "./form-radio"
import { FormSelect } from "./form-select"

const meta = {
  //TODO formSelect
  component: FormSelect,
  tags: ["autodocs"],
  title: "Form"
} satisfies Meta<typeof FormSelect>

export default meta

type Story = StoryObj<typeof FormSelect>
const defaultArgsSelect = {
  options: [
    { text: "10", value: "10" },
    { text: "50", value: "50" },
    { text: "100", value: "100" }
  ],
  placeholder: "Select-box"
}

export const Form: Story = {
  render: function Render() {
    const {
      control,
      formState: { errors },
      handleSubmit
    } = useForm()

    const onSubmit = handleSubmit(data => {
      console.log(data)
    })

    return (
      <form onSubmit={onSubmit}>
        <FormInput control={control} name={"name"} />
        <FormInput control={control} name={"password"} />
        <FormSelect control={control} name={"select"} {...defaultArgsSelect} />
        <FormCheckbox control={control} labelText={"Remember me"} name={"rememberMe"} />
        <FormCheckbox control={control} labelText={"Some"} name={"some"} />
        <FormRadio control={control} labelText={"Man"} name={"gender"} value={"man"} />
        <FormRadio control={control} labelText={"Women"} name={"gender"} value={"women"} />
        <FormInput as={"textarea"} control={control} name={"message"} />
        <button type={"submit"}>Submit</button>
      </form>
    )
  }
}
