import type { Meta, StoryObj } from "@storybook/react"

import { useForm } from "react-hook-form"

import { Button } from "../components/button"
import { FormCheckbox } from "./form-checkbox"
import { FormInput } from "./form-input"
import { FormRadio } from "./form-radio"
import { FormSelect } from "./form-select"

const meta = {
  //TODO formSelect
  component: FormSelect,
  tags: ["autodocs"],
  title: "03. Features/Form"
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
        <Button>Submit</Button>
      </form>
    )
  }
}
