import type { DayPickerSingleProps } from "react-day-picker"

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

export const formatDate = (date: Date, locale: Locale) =>
  format(date, locale.code === "en-US" ? "MM/dd/yyyy" : "dd/MM/yyyy")

export type DatePickerProps = {
  date?: Date
  disabled?: boolean
  error?: ReactNode
  labelText?: ReactNode
  onSelect: (date: Date | undefined) => void
} & Omit<DayPickerSingleProps, "disabled" | "mode">
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
  const pickDate = locale?.code === "en-US" ? "Pick a date" : "Выберите дату"
  const formattedDate = date ? formatDate(date, locale) : pickDate

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
            defaultMonth={date}
            disabled={disabled}
            id={calendarId}
            initialFocus={initialFocus}
            locale={locale}
            mode={"single"}
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
