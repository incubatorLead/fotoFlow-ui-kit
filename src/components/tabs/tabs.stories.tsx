import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../button"
import { TabContent, Tabs } from "./tabs"

const meta = {
  args: {
    children: (
      <>
        <TabContent value={"uploaded_files"}>Uploaded files</TabContent>
        <TabContent value={"payments"}>
          <Button variant={"outlined"}>Payment</Button>
        </TabContent>
        <TabContent value={"followers"}>Followers</TabContent>
      </>
    ),
    defaultValue: "payments",
    tabs: [
      { title: "Uploaded files", value: "uploaded_files" },
      { title: "Payments", value: "payments" },
      { title: "Followers", value: "followers" }
    ]
  },
  component: Tabs,
  parameters: {
    layout: "default"
  },
  tags: ["autodocs"],
  title: "02. Components/Tabs"
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTabs: Story = {}

export const PrimaryWithDisabledTab = {
  args: {
    tabs: [
      { title: "Uploaded files", value: "uploaded_files" },
      { title: "Payments", value: "payments" },
      { disabled: true, title: "Followers", value: "followers" }
    ]
  }
}
