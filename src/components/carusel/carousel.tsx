import type { EmblaOptionsType } from "embla-carousel"

import React, { type ReactNode } from "react"

import clsx from "clsx"
import useEmblaCarousel from "embla-carousel-react"

import s from "./carousel.module.scss"

import { Button } from "../button"
import { Icon } from "../icon"
import { useDotButton } from "./useDotButton"
import { usePrevNextButtons } from "./usePrevNextButtons"

type PropType = {
  children: ReactNode
  options?: EmblaOptionsType
}

export const Carousel: React.FC<PropType> = props => {
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
      <Button
        className={s.prevButton}
        disabled={prevBtnDisabled}
        onClick={onPrevButtonClick}
        variant={"text"}
      >
        <Icon iconId={"arrow-ios-back"} />
      </Button>
      <Button
        className={s.nextButton}
        disabled={nextBtnDisabled}
        onClick={onNextButtonClick}
        variant={"text"}
      >
        <Icon iconId={"arrow-ios-forward"} />
      </Button>
      <div className={s.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            className={clsx(s.dot, index === selectedIndex && s.selected)}
            key={index}
            onClick={() => onDotButtonClick(index)}
            type={"button"}
          ></button>
        ))}
      </div>
    </div>
  )
}
