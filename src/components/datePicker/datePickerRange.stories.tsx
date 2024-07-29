import type { Meta, StoryObj } from "@storybook/react"
import type { DateRange } from "react-day-picker"

import { type ComponentProps, useState } from "react"

import { DatePickerRange } from "./datePickerRange"

const meta = {
  argTypes: {
    weekStartsOn: {
      control: {
        type: "radio"
      },
      options: [0, 1]
    }
  },
  component: DatePickerRange,
  tags: ["autodocs"],
  title: "02. Components/DatePickerRange"
} satisfies Meta<typeof DatePickerRange>

export default meta

type Story = StoryObj<typeof meta>

const defaultArgs = {
  date: {
    from: new Date()
  },
  disabled: false,
  error: "",
  label: "Label",
  onSelect: () => {},
  showOutsideDays: true
}

export const DefaultDatePickerRange: Story = {
  args: {
    ...defaultArgs
  },
  name: "Default date picker range"
}

export const DatePickerRangeWithError: Story = {
  args: {
    ...defaultArgs,
    error: "Incorrect date"
  },
  name: "Date picker range with error"
}

export const DisabledDatePickerRange: Story = {
  args: {
    ...defaultArgs,
    disabled: true
  },
  name: "Disabled date picker range"
}

export const ControlledDatePickerRange: Story = {
  args: {
    ...defaultArgs
  },
  name: "Controlled date picker range",
  render: (args: ComponentProps<typeof DatePickerRange>) => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(args.date)

    const onSelect = (dateRange: DateRange | undefined) => setDateRange(dateRange)

    return <DatePickerRange {...args} date={dateRange} onSelect={onSelect} />
  }
}
