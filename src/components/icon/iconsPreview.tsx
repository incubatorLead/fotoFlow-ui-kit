import iconSprite from "../../assets/icons/icons-sprite.svg"

export type Props = {
  //color?: string
  height?: string
  href?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const IconsPreview = ({ height, iconId, viewBox, width }: Props) => {
  return (
    <svg
      //color={props.color || "none"}
      fill={"currentColor"}
      height={height || "24"}
      viewBox={viewBox || "0 0 24 24"}
      width={width || "24"}
      xmlns={"http://www.w3.org/2000/svg"}
    >
      <use xlinkHref={`${iconSprite}#${iconId}`} />
    </svg>
  )
}
