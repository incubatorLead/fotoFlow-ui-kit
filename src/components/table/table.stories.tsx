import type { Meta, StoryObj } from "@storybook/react"

import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeadCell, TableRow } from "./"

const meta = {
  component: Table,
  tags: ["autodocs"],
  title: "02. Components/Table"
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    dateOfPayment: "2024-07-20T17:32:53.140Z",
    endDateOfSubscription: "2024-07-20T17:32:53.140Z",
    id: "01",
    paymentType: "STRIPE",
    price: "150$",
    subscriptionType: "MONTHLY",
    type: "Читать"
  },
  {
    dateOfPayment: "2024-07-20T17:32:53.140Z",
    endDateOfSubscription: "2024-07-20T17:32:53.140Z",
    id: "02",
    paymentType: "STRIPE",
    price: "50$",
    subscriptionType: "MONTHLY",
    type: "Читать"
  },
  {
    dateOfPayment: "2024-07-20T17:32:53.140Z",
    endDateOfSubscription: "2024-07-20T17:32:53.140Z",
    id: "03",
    paymentType: "STRIPE",
    price: "100$",
    subscriptionType: "MONTHLY",
    type: "Читать"
  }
]

export const TableWithMapMethod: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Date of Payment</TableHeadCell>
            <TableHeadCell>End date of subscription</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Subscription Type</TableHeadCell>
            <TableHeadCell>Payment Type</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{new Date(item.dateOfPayment).toLocaleDateString("en-EN")}</TableCell>
              <TableCell>
                {new Date(item.endDateOfSubscription).toLocaleDateString("en-EN")}
              </TableCell>
              <TableCell align={"right"}>{item.price}</TableCell>
              <TableCell>{item.subscriptionType}</TableCell>
              <TableCell>{item.paymentType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    )
  }
}

export const EmptyTable = {
  render: () => <TableEmpty />
}
