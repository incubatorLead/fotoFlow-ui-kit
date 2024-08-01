import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMoreHorizontal)
const Memo = memo(ForwardRef)
export default Memo
