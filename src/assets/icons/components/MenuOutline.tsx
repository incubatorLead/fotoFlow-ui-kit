import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgMenuOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        "M20.05 11H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95M20.05 16H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95M20.05 6H3.95a.95.95 0 0 0-.95.95v.1c0 .525.425.95.95.95h16.1a.95.95 0 0 0 .95-.95v-.1a.95.95 0 0 0-.95-.95"
      }
      fill={"currentColor"}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMenuOutline)
const Memo = memo(ForwardRef)

export default Memo
