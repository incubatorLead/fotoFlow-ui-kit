import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={"24"}
    ref={ref}
    viewBox={"0 0 24 24"}
    width={"24"}
    xmlns={"http://www.w3.org/2000/svg"}
    {...props}
  >
    <path d={"M12 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"} fill={"currentColor"} />
    <path
      d={
        "M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2m0 11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
      }
      fill={"currentColor"}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPin)
const Memo = memo(ForwardRef)

export default Memo
