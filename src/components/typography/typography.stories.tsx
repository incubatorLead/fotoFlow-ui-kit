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
        "small_text"
      ]
    }
  },
  component: Typography,
  tags: ["autodocs"],
  title: "Components/Typography"
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "large"
  }
}

export const H1: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h1"
  }
}

export const H1AsTagH1: Story = {
  args: {
    as: "h1",
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h1"
  }
}

export const H2: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h2"
  }
}

export const H3: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "h3"
  }
}

export const RegularText16: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "regular_text_16"
  }
}

export const RegularText14: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "regular_text_14"
  }
}

export const BoldText16: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "bold_text_16"
  }
}

export const BoldText14: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "bold_text_14"
  }
}

export const MediumText14: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "medium_text_14"
  }
}

export const SmallText: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "small_text"
  }
}

export const SemiBoldSmallText: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "semi-bold_small_text"
  }
}

export const RegularLink: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "regular_link"
  }
}

export const SmallLink: Story = {
  args: {
    children: "Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH",
    variant: "small_link"
  }
}
