import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91A1 1 0 0 0 5 18M15.27 4 18 6.73l-2 1.95L13.32 6z"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEdit)
const Memo = memo(ForwardRef)
export default Memo
