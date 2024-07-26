import type { DateRange, DayPickerRangeProps } from "react-day-picker"

import * as React from "react"
import { type ReactNode, useState } from "react"

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import clsx from "clsx"
import { format } from "date-fns"
import { enUS } from "date-fns/locale"

import s from "./datePicker.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Icon } from "../icon"
import { Typography } from "../typography"
import { Calendar } from "./calendar/calendar"

const SUNDAY = 0
const MONDAY = 1

// ToDo: Local date format + capitalize month name
const formatDate = (date: Date) => format(date, "dd/MM/yyyy")

type Props = {
  date?: DateRange
  disabled?: boolean
  error?: string
  label?: ReactNode
  onSelect: (date: DateRange | undefined) => void
} & Omit<DayPickerRangeProps, "disabled" | "mode">
// ToDo: aria-label = presentation change to grid-cell + date, types for day picker mode.

export const DatePicker = ({
  className,
  classNames,
  date,
  disabled,
  error,
  id,
  label,
  locale = enUS,
  onSelect,
  showOutsideDays = true,
  weekStartsOn = locale?.code === "en-US" ? SUNDAY : MONDAY
}: Props) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const calendarId = useGenerateId(id)
  const calendarIcon = isCalendarOpen ? "calendar" : "calendar-outline"

  let formattedDate

  if (date?.from) {
    formattedDate = date.to
      ? `${formatDate(date.from)} - ${formatDate(date.to)}`
      : formatDate(date.from)
  } else {
    formattedDate = locale?.code === "en-US" ? "Pick a date" : "Выберите дату"
  }

  //  ToDo: Add button with forwardRef or date input after merge.
  return (
    <div className={className}>
      <label className={clsx(s.label, disabled && s.disabledLabel)} htmlFor={calendarId}>
        {label}
      </label>
      <Popover onOpenChange={setCalendarOpen} open={isCalendarOpen}>
        <PopoverTrigger asChild>
          <button
            className={clsx(s.button, error && s.error)}
            disabled={disabled}
            id={calendarId}
            type={"button"}
          >
            {formattedDate}
            <Icon iconId={calendarIcon} />
          </button>
        </PopoverTrigger>
        <PopoverContent align={"start"}>
          <Calendar
            className={className}
            classNames={classNames}
            defaultMonth={date?.from}
            disabled={disabled}
            id={calendarId}
            initialFocus
            locale={locale}
            mode={"range"}
            onSelect={onSelect}
            selected={date}
            showOutsideDays={showOutsideDays}
            weekStartsOn={weekStartsOn}
          />
        </PopoverContent>
      </Popover>
      {error && (
        <Typography as={"p"} variant={"error"}>
          {error}
        </Typography>
      )}
    </div>
  )
}

DatePicker.displayName = "DatePicker"
