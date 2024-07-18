import { useId } from "react"

export const useGenerateId = (name?: string, id?: string) => {
  const generatedId = useId()

  if (id) {
    return id
  }

  if (name) {
    return name + generatedId
  }

  return generatedId
}
