import type { Meta, StoryObj } from "@storybook/react"

import { useState } from "react"

import { Pagination } from "./pagination"

const meta = {
  component: Pagination,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  title: "Components/Pagination"
} satisfies Meta<typeof Pagination>
const paginationOptions = [
  { text: "10", value: "10" },
  { text: "20", value: "20" },
  { text: "30", value: "30" },
  { text: "50", value: "50" },
  { text: "100", value: "100" }
]
const defaultArgs = {
  currentPage: 1,
  pageSize: 10,
  paginationOptions,
  totalCount: 100
}

export default meta
type Story = StoryObj<typeof meta>

export const Control = {
  args: {
    currentPage: 1,
    pageSize: 100,
    paginationOptions,
    siblingCount: 1,
    totalCount: 1001
  },
  render: function Render(args: any) {
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

export const firstPage = {
  args: {
    ...defaultArgs
  }
}
export const centerPage = {
  args: {
    ...defaultArgs,
    currentPage: 5
  }
}
export const lastPage = {
  args: {
    ...defaultArgs,
    currentPage: 10
  }
}
