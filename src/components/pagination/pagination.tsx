import React, { type ComponentPropsWithoutRef } from "react"

import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"

import s from "./pagination.module.scss"

import { Button } from "../button"
import { Icon } from "../icon"
import { type Options, Select } from "../select"
import { Typography } from "../typography"
import { usePagination } from "./usePagination"

type Props = {
  className?: string
  currentPage: number
  defaultValue?: string
  onPageChange: (value: number) => void
  onPageSize: (value: number) => void
  pageSize: number
  paginationOptions: Options[]
  siblingCount?: number
  totalCount: number
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>

export const Pagination = (props: Props) => {
  const {
    className,
    currentPage,
    defaultValue,
    onPageChange,
    onPageSize,
    pageSize,
    paginationOptions,
    siblingCount,
    totalCount,
    ...restProps
  } = props

  const nextPage = () => {
    onPageChange(currentPage + 1)
  }
  const prevPage = () => {
    onPageChange(currentPage - 1)
  }
  const paginationRange = usePagination({ currentPage, pageSize, siblingCount, totalCount })

  return (
    <div className={s.pagination}>
      <Button
        className={s.button}
        disabled={currentPage === 1}
        onClick={prevPage}
        title={"Previous page"}
        variant={"text"}
      >
        <Icon iconId={"arrow-ios-back"} />
      </Button>
      <ol className={s.pagination__links}>
        {paginationRange.map((page, index) => {
          if (page === "...") {
            return <li key={index}>&#8230;</li>
          }

          return (
            <li key={index}>
              <Button
                className={clsx(s.link, currentPage === page && s.active)}
                onClick={() => onPageChange(+page)}
                variant={"text"}
              >
                {page}
              </Button>
            </li>
          )
        })}
      </ol>
      <Button
        className={s.button}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={nextPage}
        title={"Next page"}
        variant={"text"}
      >
        <Icon iconId={"arrow-ios-forward"} />
      </Button>
      <Typography as={"div"} className={s.selectContainer} variant={"regular_text_14"}>
        Show
        <Select
          name={"select"}
          onValueChange={page => onPageSize(+page)}
          options={paginationOptions}
          value={pageSize.toString()}
          {...restProps}
        />
        on page
      </Typography>
    </div>
  )
}
