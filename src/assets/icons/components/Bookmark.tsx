import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M6 21a1 1 0 0 1-.863-.496A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-1.5.86l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgBookmark)
const Memo = memo(ForwardRef)
export default Memo
