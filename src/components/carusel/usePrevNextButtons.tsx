import type { EmblaCarouselType } from "embla-carousel"

import { useCallback, useEffect, useState } from "react"

type UsePrevNextButtonsType = {
  nextBtnDisabled: boolean
  onNextButtonClick: () => void
  onPrevButtonClick: () => void
  prevBtnDisabled: boolean
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) {
      return
    }
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) {
      return
    }
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    nextBtnDisabled,
    onNextButtonClick,
    onPrevButtonClick,
    prevBtnDisabled
  }
}
