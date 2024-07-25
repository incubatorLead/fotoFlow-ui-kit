import type { Meta, StoryObj } from "@storybook/react"
import type { DateRange } from "react-day-picker"

import { type ComponentProps, useState } from "react"

import { DatePicker } from "./datePicker"

const meta = {
  argTypes: {
    weekStartsOn: {
      control: {
        type: "radio"
      },
      options: [0, 1]
    }
  },
  component: DatePicker,
  tags: ["autodocs"],
  title: "02. Components/DatePicker"
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof DatePicker>

const defaultArgs = {
  date: {
    from: new Date()
  },
  disabled: false,
  error: "",
  label: "Label",
  showOutsideDays: true
}

export const DefaultDatePicker: Story = {
  args: {
    ...defaultArgs
  },
  name: "Default date picker"
}

export const DatePickerWithError: Story = {
  args: {
    ...defaultArgs,
    error: "Incorrect date"
  },
  name: "Date picker with error"
}

export const DisabledDatePicker: Story = {
  args: {
    ...defaultArgs,
    disabled: true
  },
  name: "Disabled date picker"
}

export const ControlledDatePicker: Story = {
  args: {
    ...defaultArgs
  },
  name: "Controlled date picker",
  render: function Render(args: ComponentProps<typeof DatePicker>) {
    const [date, setDate] = useState<DateRange | undefined>(args.date)

    const onSelect = (date: DateRange | undefined) => setDate(date)

    return <DatePicker {...args} date={date} onSelect={onSelect} />
  }
}
