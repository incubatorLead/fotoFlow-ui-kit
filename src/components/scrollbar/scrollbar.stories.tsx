import type { Meta, StoryObj } from "@storybook/react"

import React from "react"

import { Scrollbar } from "./scrollbar"

const meta = {
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["auto", "always", "scroll", "hover"]
    }
  },
  component: Scrollbar,
  tags: ["autodocs"],
  title: "02. Components/Scrollbar"
} satisfies Meta<typeof Scrollbar>

export default meta

type Story = StoryObj<typeof meta>

export const VerticalScrollbar: Story = {
  args: {
    children: (
      <p style={{ padding: "10px", width: "200px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laborum officiis, soluta
        maxime voluptatem incidunt odit non sequi vitae fuga inventore natus? Incidunt dolores
        magnam sint accusamus esse excepturi quis. Ratione, dolores. Dolor modi, esse illo
        temporibus odio nam rem a dolores officia obcaecati cupiditate architecto libero voluptas,
        debitis sequi dolorum, incidunt non consectetur. Possimus animi cum porro eveniet sequi!
        Mollitia eius officia, quos eveniet provident quisquam voluptatum perspiciatis accusantium
        atque nihil eligendi vel quis repudiandae tempore ducimus animi quas excepturi autem unde
        impedit, libero alias totam natus! Nulla, ratione! Repudiandae provident a impedit vero.
        Libero impedit tenetur amet nisi eveniet aut voluptatum, fuga nulla, magni ipsum vel vero
        facere velit nemo esse eum totam veritatis et perferendis eligendi delectus. Deserunt
        provident at adipisci repudiandae impedit esse iure suscipit voluptatum libero amet alias
        explicabo labore quis distinctio non aliquam sint autem ducimus, quibusdam, molestiae
        officiis ipsam eum debitis? Quia, inventore. Voluptate tempore, quae molestiae adipisci ea
        eaque laboriosam qui quis ab porro modi officiis voluptates iusto placeat deserunt
        blanditiis, a eos iste? Obcaecati aliquid qui placeat consectetur at dignissimos? Saepe!
      </p>
    ),
    style: {
      border: "1px solid gray",
      borderRadius: "5px",
      height: "300px",
      padding: "10px",
      width: "fit-content"
    }
  }
}

export const HorizontalScrollbar: Story = {
  args: {
    children: (
      <p style={{ padding: "10px", width: "600px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laborum officiis, soluta
        maxime voluptatem incidunt odit non sequi vitae fuga inventore natus? Incidunt dolores
        magnam sint accusamus esse excepturi quis. Ratione, dolores. Dolor modi, esse illo
        temporibus odio nam rem a dolores officia obcaecati cupiditate architecto libero voluptas,
        debitis sequi dolorum, incidunt non consectetur. Possimus animi cum porro eveniet sequi!
        Mollitia eius officia, quos eveniet provident quisquam voluptatum perspiciatis accusantium
        atque nihil eligendi vel quis repudiandae tempore ducimus animi quas excepturi autem unde
        impedit, libero alias totam natus! Nulla, ratione! Repudiandae provident a impedit vero.
        Libero impedit tenetur amet nisi eveniet aut voluptatum, fuga nulla, magni ipsum vel vero
        facere velit nemo esse eum totam veritatis et perferendis eligendi delectus. Deserunt
        provident at adipisci repudiandae impedit esse iure suscipit voluptatum libero amet alias
        explicabo labore quis distinctio non aliquam sint autem ducimus, quibusdam, molestiae
        officiis ipsam eum debitis? Quia, inventore. Voluptate tempore, quae molestiae adipisci ea
        eaque laboriosam qui quis ab porro modi officiis voluptates iusto placeat deserunt
        blanditiis, a eos iste? Obcaecati aliquid qui placeat consectetur at dignissimos? Saepe!
      </p>
    ),
    style: { border: "1px solid gray", borderRadius: "5px", width: "200px" }
  }
}
