import { Button } from "./button"
import type { ComponentPropsWithoutRef } from "react"

export const Test = () => {
  return (
    <div>
      <Button as={MyLink} to={"https://google.com"} target={"_blank"}>
        Click me
      </Button>
    </div>
  )
}

export const MyLink = ({
  to,
  ...rest
}: { to: string } & Omit<ComponentPropsWithoutRef<"a">, "href">) => {
  return <a href={to} {...rest} />
}
