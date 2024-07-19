import type { Meta, StoryObj } from "@storybook/react"

import { type ComponentProps, useState } from "react"

import { Pagination } from "./pagination"

const meta = {
  component: Pagination,
  tags: ["autodocs"],
  title: "02. Components/Pagination"
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

// ToDo: Component type instead of meta.
type Story = StoryObj<typeof Pagination>

export const Control: Story = {
  args: {
    currentPage: 1,
    pageSize: 100,
    paginationOptions,
    siblingCount: 1,
    totalCount: 1001
  },
  render: function Render(args: ComponentProps<typeof Pagination>) {
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
