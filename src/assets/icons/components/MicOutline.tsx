import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgMicOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M12 15a4 4 0 0 0 4-4V6a4 4 0 1 0-8 0v5a4 4 0 0 0 4 4m-2-9a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0z"
    />
    <path
      fill="currentColor"
      d="M19 11a1 1 0 0 0-2 0 5 5 0 1 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V20H8.89a.89.89 0 0 0-.89.89v.22a.89.89 0 0 0 .89.89h6.22a.89.89 0 0 0 .89-.89v-.22a.89.89 0 0 0-.89-.89H13v-2.08A7 7 0 0 0 19 11"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgMicOutline)
const Memo = memo(ForwardRef)
export default Memo
