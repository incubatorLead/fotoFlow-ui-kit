import type { Locale } from "date-fns"
import type { DateRange, DayPickerProps, PropsRange } from "react-day-picker"

import * as React from "react"
import { type ReactNode, useState } from "react"

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import clsx from "clsx"
import { enUS } from "date-fns/locale"

import s from "./datePicker.module.scss"

import { IconCalendar, IconCalendarOutline } from "../../assets/icons/components"
import { useGenerateId } from "../../hooks/useGenerateId"
import { Typography } from "../typography"
import { Calendar } from "./calendar/calendar"
import { formatDate } from "./datePicker"

export type DatePickerRangeProps = {
  date?: DateRange
  disabled?: boolean
  error?: ReactNode
  labelText?: ReactNode
  onSelect: (date: DateRange | undefined) => void
} & Omit<DayPickerProps, "mode"> &
  Omit<PropsRange, "disabled" | "mode">

export const DatePickerRange = ({
  autoFocus = true,
  className,
  classNames,
  date,
  disabled,
  error,
  id,
  labelText,
  locale = enUS,
  onSelect,
  showOutsideDays = true,
  weekStartsOn,
  ...rest
}: DatePickerRangeProps) => {
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const calendarId = useGenerateId(id)
  const calendarIcon = isCalendarOpen ? <IconCalendar /> : <IconCalendarOutline />

  let formattedDate

  if (date?.from) {
    formattedDate = date.to
      ? `${formatDate(date.from, locale as Required<Locale>)} - ${formatDate(date.to, locale as Required<Locale>)}`
      : formatDate(date.from, locale as Required<Locale>)
  } else {
    formattedDate = locale?.code === "en-US" ? "Pick a date" : "Выберите дату"
  }

  return (
    <div className={className}>
      <label className={clsx(s.label, disabled && s.disabled)} htmlFor={calendarId}>
        {labelText}
      </label>
      <Popover onOpenChange={setCalendarOpen} open={isCalendarOpen}>
        <PopoverTrigger
          className={clsx(s.button, error && s.error)}
          disabled={disabled}
          id={calendarId}
        >
          {formattedDate}
          {calendarIcon}
        </PopoverTrigger>
        <PopoverContent align={"start"}>
          <Calendar
            autoFocus={autoFocus}
            className={className}
            classNames={classNames}
            defaultMonth={date?.from}
            disabled={disabled}
            id={calendarId}
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

DatePickerRange.displayName = "DatePickerRange"
