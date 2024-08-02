import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgPersonRemove = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        "M21 6h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2m-11 5a4 4 0 1 0 0-8 4 4 0 0 0 0 8m6 10a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1"
      }
      fill={"currentColor"}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPersonRemove)
const Memo = memo(ForwardRef)

export default Memo
