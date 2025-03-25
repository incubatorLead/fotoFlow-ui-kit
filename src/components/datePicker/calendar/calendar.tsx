import * as React from "react"
import { DayPicker, type DayPickerProps } from "react-day-picker"

import clsx from "clsx"

import s from "./calendar.module.scss"

export const Calendar = ({ className, classNames, ...props }: DayPickerProps) => {
  return (
    <DayPicker
      captionLayout={"dropdown"}
      className={clsx(s.calendar, className)}
      classNames={{
        button_next: s.navButton,
        button_previous: s.navButton,
        caption_label: s.captionLabel,
        chevron: s.chevron,
        day: clsx(s.day, props.mode === "range" ? s.dayRange : s.daySingle),
        dropdown: s.dropdown,
        dropdown_root: s.dropdownRoot,
        dropdowns: s.dropdowns,
        month_caption: s.monthCaption,
        month_grid: s.monthGrid,
        nav: s.nav,
        outside: s.outside,
        range_end: s.rangeEnd,
        range_middle: s.rangeMiddle,
        range_start: s.rangeStart,
        today: s.today,
        weekday: s.weekday,
        weekdays: s.weekdays,
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
