import React from "react"

import { ColorPalette } from "./colorPalette"

export default {
  component: ColorPalette,
  title: "01. Design System/Colors"
}

const Template = args => <ColorPalette {...args} />

export const Default = Template.bind({})
Default.args = {
  palette: [
    {
      group: "accent",
      groupColors: [
        { color: "#73a5ff", name: "accent-100" },
        { color: "#4c8dff", name: "accent-300" },
        { color: "#397df6", name: "accent-500" },
        { color: "#2f68cc", name: "accent-700" },
        { color: "#234e99", name: "accent-900" }
      ],
      id: 1
    },
    {
      group: "success",
      groupColors: [
        { color: "#80ffbf", name: "success-100" },
        { color: "#22e584", name: "success-300" },
        { color: "#14cc70", name: "success-500" },
        { color: "#0f9954", name: "success-700" },
        { color: "#0a6638", name: "success-900" }
      ],
      id: 2
    },
    {
      group: "danger",
      groupColors: [
        { color: "#ff8099", name: "danger-100" },
        { color: "#f23d61", name: "danger-300" },
        { color: "#cc1439", name: "danger-500" },
        { color: "#990f2b", name: "danger-700" },
        { color: "#660a1d", name: "danger-900" }
      ],
      id: 3
    },
    {
      group: "warning",
      groupColors: [
        { color: "#ffd073", name: "warning-100" },
        { color: "#e5ac39", name: "warning-300" },
        { color: "#d99000", name: "warning-500" },
        { color: "#996600", name: "warning-700" },
        { color: "#664400", name: "warning-900" }
      ],
      id: 4
    },
    {
      group: "dark",
      groupColors: [
        { color: "#4c4c4c", name: "dark-100" },
        { color: "#333333", name: "dark-300" },
        { color: "#171717", name: "dark-500" },
        { color: "#0d0d0d", name: "dark-700" },
        { color: "#000000", name: "dark-900" }
      ],
      id: 5
    },
    {
      group: "light",
      groupColors: [
        { color: "#ffffff", name: "light-100" },
        { color: "#f7fbff", name: "light-300" },
        { color: "#edf3fa", name: "light-500" },
        { color: "#d5dae0", name: "light-700" },
        { color: "#8d9094", name: "light-900" }
      ],
      id: 6
    }
  ]
}
