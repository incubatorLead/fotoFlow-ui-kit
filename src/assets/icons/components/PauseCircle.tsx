import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgPauseCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={"24"}
    ref={ref}
    viewBox={"0 0 24 24"}
    width={"24"}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <path
      d={
        "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-2 13a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0z"
      }
      fill={"currentColor"}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPauseCircle)
const Memo = memo(ForwardRef)

export default Memo
