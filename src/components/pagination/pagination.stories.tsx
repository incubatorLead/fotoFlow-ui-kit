import type { Meta, StoryObj } from "@storybook/react"

import React, { type ComponentProps, useState } from "react"

import { Pagination } from "./pagination"

const meta = {
  component: Pagination,
  tags: ["autodocs"],
  title: "02. Components/Pagination"
} satisfies Meta<typeof Pagination>
const paginationOptions = [10, 20, 30, 50, 100]

const defaultArgs = {
  currentPage: 1,
  onPageChange: () => {},
  onPageSize: () => {},
  pageSize: 10,
  paginationOptions,
  totalCount: 100
}

export default meta

type Story = StoryObj<typeof meta>

export const Control: Story = {
  args: {
    currentPage: 1,
    onPageChange: () => {},
    onPageSize: () => {},
    pageSize: 100,
    paginationOptions,
    siblingCount: 1,
    totalCount: 1001
  },
  render: (args: ComponentProps<typeof Pagination>) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    const [pageSize, setPageSize] = useState(args.pageSize)

    const onPageSize = (e: number) => {
      setPageSize(e)
    }
    const onPageChange = (e: number) => {
      setCurrentPage(e)
    }

    return (
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        onPageSize={onPageSize}
        pageSize={pageSize}
        paginationOptions={args.paginationOptions}
        totalCount={args.totalCount}
      />
    )
  }
}

export const FirstPage: Story = {
  args: {
    ...defaultArgs
  }
}
export const CenterPage: Story = {
  args: {
    ...defaultArgs,
    currentPage: 5
  }
}
export const LastPage: Story = {
  args: {
    ...defaultArgs,
    currentPage: 10
  }
}
