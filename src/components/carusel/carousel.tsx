import type { EmblaOptionsType } from "embla-carousel"

import React, { type ReactNode } from "react"

import clsx from "clsx"
import useEmblaCarousel from "embla-carousel-react"

import s from "./carousel.module.scss"

import { IconArrowIosBack, IconArrowIosForward } from "../../assets/icons/components"
import { Button } from "../button"
import { useDotButton } from "./useDotButton"
import { usePrevNextButtons } from "./usePrevNextButtons"
type PropType = {
  children: ReactNode
  options?: EmblaOptionsType
}

export const Carousel = (props: PropType) => {
  const { children, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { onDotButtonClick, scrollSnaps, selectedIndex } = useDotButton(emblaApi)

  const { nextBtnDisabled, onNextButtonClick, onPrevButtonClick, prevBtnDisabled } =
    usePrevNextButtons(emblaApi)

  return (
    <div className={s.carousel}>
      <div className={s.viewport} ref={emblaRef}>
        <div className={s.container}>{children}</div>
      </div>
      <Button className={s.prevButton} disabled={prevBtnDisabled} onClick={onPrevButtonClick}>
        <IconArrowIosBack height={48} width={48} />
      </Button>
      <Button className={s.nextButton} disabled={nextBtnDisabled} onClick={onNextButtonClick}>
        <IconArrowIosForward height={48} width={48} />
      </Button>
      <div className={s.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            className={clsx("btnReset", s.dot, index === selectedIndex && s.selected)}
            key={index}
            onClick={() => onDotButtonClick(index)}
            type={"button"}
          ></button>
        ))}
      </div>
    </div>
  )
}
