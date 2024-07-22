import type { Meta } from "@storybook/react"

import React from "react"

import { Carousel } from "./carousel"

const meta: Meta<typeof Carousel> = {
  component: Carousel,
  tags: ["autodocs"],
  title: "02. Components/Carousel"
} satisfies Meta<typeof Carousel>

export default meta

const slides = [
  {
    src: "https://images.pexels.com/photos/7031696/pexels-photo-7031696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    src: "https://images.pexels.com/photos/3314294/pexels-photo-3314294.jpeg?cs=srgb&dl=pexels-diimejii-3314294.jpg&fm=jpg"
  },
  {
    src: "https://images.pexels.com/photos/9071737/pexels-photo-9071737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    src: "https://images.pexels.com/photos/3747129/pexels-photo-3747129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    src: "https://images.pexels.com/photos/6963585/pexels-photo-6963585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
]

export const CarouselDefault = () => (
  <div style={{ width: "490px" }}>
    <Carousel>
      {slides.map(s => (
        <img alt={s.src} key={s.src} src={s.src} />
      ))}
    </Carousel>
  </div>
)
export const CarouselLoop = () => (
  <div style={{ width: "360px" }}>
    <Carousel options={{ loop: true }}>
      {slides.map(s => (
        <img alt={s.src} key={s.src} src={s.src} />
      ))}
    </Carousel>
  </div>
)
