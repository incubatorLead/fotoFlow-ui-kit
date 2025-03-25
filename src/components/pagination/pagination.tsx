import React, { type ComponentPropsWithoutRef, useMemo } from "react"

import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"

import s from "./pagination.module.scss"

import { IconArrowIosBack, IconArrowIosForward } from "../../assets/icons/components"
import { Button } from "../button"
import { type Option, Select } from "../select"
import { Typography } from "../typography"
import { usePagination } from "./usePagination"

type Props = {
  className?: string
  currentPage: number
  defaultValue?: string
  onPageChange: (value: number) => void
  onPageSize: (value: number) => void
  pageSize: number
  paginationOptions?: number[]
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
    paginationOptions = [5, 10, 15],
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

  const optionsForSelect: Option[] = useMemo(() => {
    return paginationOptions.map(option => {
      return { text: option.toString(), value: option.toString() }
    })
  }, [paginationOptions])

  return (
    <div className={s.pagination}>
      <Button
        className={s.button}
        disabled={currentPage === 1}
        onClick={prevPage}
        title={"Previous page"}
      >
        <IconArrowIosBack />
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
              >
                {page}
              </Button>
            </li>
          )
        })}
      </ol>
      <Button
        className={s.button}
        disabled={currentPage === paginationRange.at(-1)}
        onClick={nextPage}
        title={"Next page"}
      >
        <IconArrowIosForward />
      </Button>
      <Typography as={"div"} className={s.selectContainer} variant={"regular_text_14"}>
        Show
        <Select
          onValueChange={page => onPageSize(Number.parseInt(page, 10))}
          options={optionsForSelect}
          value={pageSize.toString()}
          {...restProps}
        />
        on page
      </Typography>
    </div>
  )
}
