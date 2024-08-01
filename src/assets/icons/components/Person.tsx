import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgPerson = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M18 21a1 1 0 0 0 1-1 7 7 0 1 0-14 0 1 1 0 0 0 1 1z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgPerson)
const Memo = memo(ForwardRef)
export default Memo
