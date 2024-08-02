import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgPlusSquare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        "M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3m-3 10h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2"
      }
      fill={"currentColor"}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPlusSquare)
const Memo = memo(ForwardRef)

export default Memo
