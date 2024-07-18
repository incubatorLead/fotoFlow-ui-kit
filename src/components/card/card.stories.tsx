import type { Meta, StoryObj } from "@storybook/react"

import { Card } from "./card"

const meta = {
  argTypes: {
    as: {
      control: { type: "radio" },
      options: ["div", "main", "article", "section"]
    },
    children: {
      control: { type: "text" }
    },
    style: {
      control: { type: "object" }
    }
  },
  component: Card,
  tags: ["autodocs"],
  title: "02. Components/Card"
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const EmptyCardWithPadding: Story = {
  args: {
    style: { padding: "12px" }
  },
  name: "Empty card with padding"
}

export const CardWithShortText: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  name: "Card with short text"
}

export const CardWithLongText: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper lectus risus, vel iaculis arcu tincidunt hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam tincidunt, magna et congue sodales, nibh erat dapibus augue, quis rutrum diam tortor at metus. Aliquam iaculis malesuada diam nec accumsan. Duis accumsan placerat ligula, sed fringilla tellus sodales rhoncus. Duis pulvinar libero eu porta aliquet. Aliquam erat volutpat. Nam cursus pretium risus a rhoncus. Morbi purus quam, fringilla non ante sed, gravida commodo ligula. Vivamus commodo ex in tortor pharetra varius. Curabitur consequat tellus tortor, at consequat ligula rhoncus a. Mauris convallis pretium dui at interdum.\n\nMaecenas semper tortor at mauris rutrum, et faucibus dui euismod. Nulla dapibus quam nec condimentum scelerisque. Maecenas libero odio, consectetur at metus sit amet, dapibus placerat tellus. Curabitur nec urna sit amet nunc viverra bibendum. Morbi accumsan eros libero, nec fermentum neque posuere in. Suspendisse potenti. Aenean et est orci. Morbi quis ultrices metus, in pulvinar nunc. Nunc vulputate sem lacus, ac accumsan sapien luctus vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras nec lobortis odio. Phasellus gravida velit in bibendum auctor. Nulla sit amet lectus ut turpis vestibulum commodo sit amet sit amet sem."
  },
  name: "Card with long text"
}
