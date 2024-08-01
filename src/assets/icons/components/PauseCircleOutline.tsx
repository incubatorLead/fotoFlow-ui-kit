import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPauseCircleOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20"
    />
    <path
      fill="currentColor"
      d="M15 8a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1M9 8a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPauseCircleOutline)
const Memo = memo(ForwardRef)
export default Memo
