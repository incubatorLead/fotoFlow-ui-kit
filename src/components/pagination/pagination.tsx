import React, { type ComponentPropsWithoutRef } from "react"

import * as SelectPrimitive from "@radix-ui/react-select"
import clsx from "clsx"

import s from "./pagination.module.scss"

import { Button } from "../button"
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
        className={s.pagination__button}
        disabled={currentPage === 1}
        onClick={prevPage}
        variant={"text"}
      >
        <svg
          fill={"none"}
          height={"10"}
          viewBox={"0 0 5 10"}
          width={"5"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <path
            d={
              "M4.22003 9.66669C4.12043 9.66703 4.02202 9.64505 3.93204 9.60236C3.84205 9.55967 3.76277 9.49737 3.70003 9.42002L0.480028 5.42002C0.381973 5.30073 0.328369 5.1511 0.328369 4.99669C0.328369 4.84227 0.381973 4.69264 0.480028 4.57335L3.81336 0.573354C3.92652 0.43721 4.08913 0.351594 4.26541 0.335341C4.4417 0.319087 4.61722 0.373529 4.75336 0.486688C4.88951 0.599847 4.97512 0.762454 4.99137 0.938739C5.00763 1.11502 4.95319 1.29054 4.84003 1.42669L1.86003 5.00002L4.74003 8.57335C4.82155 8.67121 4.87333 8.79037 4.88925 8.91674C4.90517 9.0431 4.88456 9.17139 4.82986 9.2864C4.77515 9.40142 4.68865 9.49836 4.58057 9.56576C4.4725 9.63315 4.34738 9.66818 4.22003 9.66669Z"
            }
            fill={"currentColor"}
          />
        </svg>
      </Button>
      <ol className={s.pagination__links}>
        {paginationRange.map((page, index) => {
          if (page === "...") {
            return <li key={index}>&#8230;</li>
          }

          return (
            <li key={index}>
              <Button
                as={"a"}
                className={clsx(s.pagination__link, currentPage === page && s.active)}
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
        className={s.pagination__button}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={nextPage}
        variant={"text"}
      >
        <svg
          fill={"none"}
          height={"10"}
          viewBox={"0 0 5 10"}
          width={"5"}
          xmlns={"http://www.w3.org/2000/svg"}
        >
          <path
            d={
              "M0.666619 9.66679C0.510851 9.66709 0.359894 9.61284 0.239952 9.51346C0.172447 9.45749 0.116646 9.38876 0.0757444 9.31119C0.034843 9.23363 0.00964549 9.14876 0.00159491 9.06144C-0.00645566 8.97412 0.00279902 8.88607 0.0288287 8.80234C0.0548583 8.7186 0.0971511 8.64082 0.153286 8.57346L3.13995 5.00012L0.259953 1.42012C0.204576 1.35193 0.163221 1.27347 0.138267 1.18924C0.113312 1.10501 0.10525 1.01669 0.114542 0.929335C0.123835 0.841982 0.1503 0.757328 0.192416 0.680237C0.234531 0.603146 0.291468 0.535138 0.359953 0.480123C0.42893 0.419432 0.509707 0.373654 0.597215 0.345661C0.684723 0.317668 0.777074 0.308066 0.868469 0.317456C0.959864 0.326846 1.04833 0.355026 1.12832 0.400227C1.20831 0.445428 1.27809 0.506675 1.33329 0.580123L4.55329 4.58012C4.65134 4.69941 4.70494 4.84904 4.70494 5.00346C4.70494 5.15787 4.65134 5.3075 4.55329 5.42679L1.21995 9.42679C1.15307 9.50747 1.06812 9.57124 0.971979 9.61294C0.875839 9.65464 0.771223 9.67309 0.666619 9.66679Z"
            }
            fill={"currentColor"}
          />
        </svg>
      </Button>
      <Typography as={"div"} className={s.pagination__select} variant={"regular_text_14"}>
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
