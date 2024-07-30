import type { DateRange, DayPickerRangeProps } from "react-day-picker"

import * as React from "react"
import { type ReactNode, useState } from "react"

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import clsx from "clsx"
import { type Locale, format } from "date-fns"
import { enUS } from "date-fns/locale"

import s from "./datePicker.module.scss"

import { useGenerateId } from "../../hooks/useGenerateId"
import { Icon } from "../icon"
import { Typography } from "../typography"
import { Calendar } from "./calendar/calendar"

export enum WEEKDAYS {
  MONDAY = 1,
  SUNDAY = 0
}

// ToDo: Capitalize month name
const formatDate = (date: Date, locale: Locale) =>
  format(date, locale.code === "en-US" ? "MM/dd/yyyy" : "dd/MM/yyyy")

export type DatePickerProps = {
  date?: DateRange
  disabled?: boolean
  error?: ReactNode
  labelText?: ReactNode
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
  initialFocus = true,
  labelText,
  locale = enUS,
  onSelect,
  showOutsideDays = true,
  weekStartsOn,
  ...rest
}: DatePickerProps) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const calendarId = useGenerateId(id)
  const calendarIcon = isCalendarOpen ? "calendar" : "calendar-outline"

  let formattedDate

  if (date?.from) {
    formattedDate = date.to
      ? `${formatDate(date.from, locale)} - ${formatDate(date.to, locale)}`
      : formatDate(date.from, locale)
  } else {
    formattedDate = locale?.code === "en-US" ? "Pick a date" : "Выберите дату"
  }

  //  ToDo: Add button with forwardRef or date input after merge.
  return (
    <div className={className}>
      <label className={clsx(s.label, disabled && s.disabled)} htmlFor={calendarId}>
        {labelText}
      </label>
      <Popover onOpenChange={setCalendarOpen} open={isCalendarOpen}>
        <PopoverTrigger
          className={clsx("btnReset", s.button, error && s.error)}
          disabled={disabled}
          id={calendarId}
        >
          {formattedDate}
          <Icon iconId={calendarIcon} />
        </PopoverTrigger>
        <PopoverContent align={"start"}>
          <Calendar
            className={className}
            classNames={classNames}
            defaultMonth={date?.from}
            disabled={disabled}
            id={calendarId}
            initialFocus={initialFocus}
            locale={locale}
            mode={"range"}
            onSelect={onSelect}
            selected={date}
            showOutsideDays={showOutsideDays}
            weekStartsOn={weekStartsOn}
            {...rest}
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
