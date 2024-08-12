import type { Meta, StoryObj } from "@storybook/react"

import { Typography } from "./typography"

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "bold_text_14",
        "bold_text_16",
        "h1",
        "h2",
        "h3",
        "large",
        "link2",
        "medium_text_14",
        "regular_link",
        "regular_text_14",
        "regular_text_16",
        "semi-bold_small_text",
        "small_text",
        "error"
      ]
    }
  },
  component: Typography,
  tags: ["autodocs"],
  title: "02. Components/Typography"
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "large"
  },
  name: "Large"
}

export const H1: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h1"
  },
  name: "H1"
}

export const H1AsTagH1: Story = {
  args: {
    as: "h1",
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h1"
  },
  name: "H1 as tag h1"
}

export const H2: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h2"
  },
  name: "H2"
}

export const H3: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h3"
  },
  name: "H3"
}

export const RegularText16: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "regular_text_16"
  },
  name: "Regular text 16"
}

export const RegularText14: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "regular_text_14"
  },
  name: "Regular text 14"
}

export const BoldText16: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "bold_text_16"
  },
  name: "Bold text 16"
}

export const BoldText14: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "bold_text_14"
  },
  name: "Bold text 14"
}

export const MediumText14: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "medium_text_14"
  },
  name: "Medium text 14"
}

export const SmallText: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "small_text"
  },
  name: "Small text"
}

export const SemiBoldSmallText: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "semi-bold_small_text"
  },
  name: "Small bold small text"
}

export const RegularLink: Story = {
  args: {
    as: "a",
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    href: "#",
    variant: "regular_link"
  },
  name: "Regular link"
}

export const SmallLink: Story = {
  args: {
    as: "a",
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    href: "#",
    variant: "small_link"
  },
  name: "Small link"
}

export const Error: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "error"
  },
  name: "Error"
}
