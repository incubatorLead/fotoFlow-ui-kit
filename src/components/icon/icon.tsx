import iconSprite from "../../assets/icons/icons-sprite.svg"

export type Props = {
  height?: string
  iconId: IconId
  viewBox?: string
  width?: string
}

export const Icon = ({ height, iconId, viewBox, width }: Props) => {
  return (
    <svg
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

export type IconId =
  | "arrow-back-outline"
  | "arrow-down"
  | "arrow-forward-outline"
  | "arrow-ios-back"
  | "arrow-ios-forward"
  | "arrow-up"
  | "bell-fill"
  | "bell-outline"
  | "block"
  | "bookmark"
  | "bookmark-outline"
  | "calendar"
  | "calendar-outline"
  | "checkmark"
  | "close"
  | "color-palette-outline"
  | "copy"
  | "copy-outline"
  | "credit-card"
  | "credit-card-outline"
  | "done-all"
  | "edit"
  | "edit-outline"
  | "email"
  | "email-outline"
  | "expand"
  | "eye"
  | "eye-off"
  | "eye-off-outline"
  | "eye-outline"
  | "facebook"
  | "github"
  | "google"
  | "heart"
  | "heart-outline"
  | "home"
  | "home-outline"
  | "image"
  | "image-outline"
  | "layers"
  | "layers-outline"
  | "log-out"
  | "massage-circle"
  | "massage-circle-outline"
  | "maximize"
  | "maximize-outline"
  | "menu-outline"
  | "mic"
  | "mic-outline"
  | "more-horizontal"
  | "paid"
  | "paper-plane"
  | "pause-circle"
  | "pause-circle-outline"
  | "paypal"
  | "person"
  | "person-add"
  | "person-add-outline"
  | "person-outline"
  | "person-remove"
  | "person-remove-outline"
  | "pin"
  | "pin-outline"
  | "play-circle"
  | "play-circle-outline"
  | "plus-circle"
  | "plus-circle-outline"
  | "plus-square"
  | "plus-square-outline"
  | "recaptcha"
  | "russia-flag"
  | "search"
  | "settings"
  | "settings-outline"
  | "stripe"
  | "trash"
  | "trash-outline"
  | "trending-up"
  | "united-kingdom-flag"
