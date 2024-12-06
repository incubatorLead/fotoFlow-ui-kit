import * as React from "react"
import { DayPicker, type DayPickerProps } from "react-day-picker"

import clsx from "clsx"

// import "react-day-picker/style.css"

import s from "./calendar.module.scss"

export const Calendar = ({ className, classNames, ...props }: DayPickerProps) => {
  return (
    <DayPicker
      captionLayout={"dropdown"}
      className={clsx(s.calendar, className)}
      classNames={{
        button_next: clsx(s.navButtons, s.navButton),
        button_previous: clsx(s.navButtons, s.navButton),
        caption_label: s.captionLabel,
        chevron: s.chevron,
        day: clsx(s.cell, s.day, props.mode === "range" ? s.cellRange : s.cellSingle),
        dropdown: s.dropdownContainer,
        dropdowns: s.dropdowns,
        month_caption: s.caption,
        months: s.months,
        nav: s.nav,
        outside: s.dayOutside,
        range_end: s.dayRangeEnd,
        range_middle: s.dayRangeMiddle,
        range_start: s.dayRangeStart,
        selected: s.daySelected,
        table: s.table,
        today: s.dayToday,
        weekday: s.headCell,
        weekdays: s.headRow,
        ...classNames
      }}
      locale={props.locale}
      modifiers={{
        saturday: { dayOfWeek: [6] },
        sunday: { dayOfWeek: [0] }
      }}
      modifiersClassNames={{
        saturday: s.weekend || "",
        sunday: s.weekend || ""
      }}
      {...props}
    />
  )
}

Calendar.displayName = "Calendar"
