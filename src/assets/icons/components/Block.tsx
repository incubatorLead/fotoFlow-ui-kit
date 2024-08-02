import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={"24"}
    ref={ref}
    viewBox={"0 0 24 24"}
    width={"24"}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <path
      d={"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16.001A8 8 0 0 1 12 20"}
      fill={"currentColor"}
    />
    <path d={"m7.043 19.362 10-15"} stroke={"currentColor"} strokeWidth={2.3} />
  </svg>
)
const ForwardRef = forwardRef(SvgBlock)
const Memo = memo(ForwardRef)

export default Memo
