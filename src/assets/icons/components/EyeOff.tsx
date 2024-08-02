import { type Ref, type SVGProps, forwardRef, memo } from "react"
const SvgEyeOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        "M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m3.29 4.62L14 16.78l-.07-.07-1.27-1.27A3.5 3.5 0 0 1 8.5 12q.008-.308.06-.61l-2-2L5 7.87a15.9 15.9 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.5 9.5 0 0 0 3.23-.67zM8.59 5.76l2.8 2.8A4 4 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 4 4 0 0 1-.06.61l2.68 2.68.84.84a15.9 15.9 0 0 0 2.91-3.63 1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.5 9.5 0 0 0-3.23.67z"
      }
      fill={"currentColor"}
    />
    <path
      d={
        "M20.71 19.29 19.41 18l-2-2-9.52-9.53L6.42 5 4.71 3.29a1.004 1.004 0 1 0-1.42 1.42L5.53 7l1.75 1.7 7.31 7.3.07.07L16 17.41l.59.59 2.7 2.71a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095"
      }
      fill={"currentColor"}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgEyeOff)
const Memo = memo(ForwardRef)

export default Memo
