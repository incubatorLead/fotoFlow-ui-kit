import type { SVGProps } from "react"
import { Ref, forwardRef, memo } from "react"
const SvgArrowIosBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}>
    <path
      fill="currentColor"
      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgArrowIosBack)
const Memo = memo(ForwardRef)
export default Memo
