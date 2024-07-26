import * as React from "react"
import { DayPicker, type DayPickerRangeProps } from "react-day-picker"

import clsx from "clsx"

import s from "./calendar.module.scss"

import { Icon } from "../../icon"

// ToDo: mode hardcoded props.mode === "range" ?
export const Calendar = ({ className, classNames, ...props }: DayPickerRangeProps) => (
  <DayPicker
    className={clsx(s.calendar, className)}
    classNames={{
      caption: s.caption,
      caption_label: s.captionLabel,
      cell: clsx(s.cell, props.mode === "range" ? s.cellRange : s.cellSingle),
      day: s.day,
      day_outside: s.dayOutside,
      day_range_end: s.dayRangeEnd,
      day_range_middle: s.dayRangeMiddle,
      day_range_start: s.dayRangeStart,
      day_selected: s.daySelected,
      day_today: s.dayToday,
      head_cell: s.headCell,
      head_row: s.headRow,
      nav: s.nav,
      nav_button: s.navButtons,
      nav_button_next: s.navButton,
      nav_button_previous: s.navButton,
      table: s.table,
      ...classNames
    }}
    components={{
      IconLeft: () => <Icon iconId={"arrow-ios-back"} />,
      IconRight: () => <Icon iconId={"arrow-ios-forward"} />
    }}
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

Calendar.displayName = "Calendar"
