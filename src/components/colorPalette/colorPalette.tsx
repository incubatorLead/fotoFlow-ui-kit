import React from "react"

import clsx from "clsx"

import s from "./colorPalette.module.scss"

import { copyTextToClipboard } from "../../utils"

type Color = {
  color: string
  name: string
}

export type ColorGroup = {
  group: string
  groupColors: Color[]
  id: number
}

type Props = {
  palette: ColorGroup[]
}

export const ColorPalette = ({ palette }: Props) => {
  return (
    <div className={s.palette}>
      {palette.map(group => (
        <div className={s.group} key={group.id}>
          <div className={s.title}>
            {group.id}. {group.group}
          </div>
          <div className={s.colors}>
            {group.groupColors.map(item => (
              <div className={s.color} key={item.name}>
                <div className={s.tile} style={{ backgroundColor: item.color }}></div>
                <div className={s.info}>
                  <div className={s.name}>{item.name}</div>
                  <button
                    className={clsx(s.colorHex, "btnReset")}
                    onClick={() => copyTextToClipboard(item.color)}
                    title={"copy hex color"}
                    type={"button"}
                  >
                    {item.color}
                    <svg
                      height={"16px"}
                      viewBox={"0 0 24 24"}
                      width={"16px"}
                      xmlns={"http://www.w3.org/2000/svg"}
                    >
                      <path
                        d={
                          "M20.242 3.43h-1.488a.305.305 0 0 0-.086.015V1.883c0-1.04-.867-1.883-1.93-1.883H3.832C2.77 0 1.906.844 1.906 1.883v17.566c0 1.04.864 1.883 1.926 1.883h2.262v.852c0 1 .832 1.816 1.855 1.816h12.293c1.024 0 1.856-.816 1.856-1.816V5.246c0-1.004-.832-1.816-1.856-1.816ZM2.668 19.45V1.882c0-.617.52-1.121 1.164-1.121h12.906c.645 0 1.168.504 1.168 1.12V19.45c0 .617-.523 1.121-1.168 1.121H3.832c-.644 0-1.164-.504-1.164-1.12Zm18.664 2.734c0 .582-.488 1.054-1.09 1.054H7.95c-.601 0-1.094-.472-1.094-1.054v-.852h9.883c1.063 0 1.93-.844 1.93-1.883V4.172c.027.008.055.02.086.02h1.488c.602 0 1.09.472 1.09 1.054Zm0 0"
                        }
                        fill={"currentColor"}
                      />
                      <path
                        d={
                          "M14.477 4.953H6.094a.38.38 0 0 0-.38.379c0 .211.173.383.38.383h8.383a.38.38 0 1 0 0-.762Zm0 3.047H6.094a.382.382 0 0 0 0 .762h8.383c.21 0 .382-.172.382-.38A.383.383 0 0 0 14.477 8Zm0 3.047H6.094a.383.383 0 0 0-.38.383c0 .21.173.379.38.379h8.383a.38.38 0 1 0 0-.762Zm-3.809 3.047H6.094a.383.383 0 0 0-.38.383c0 .21.173.378.38.378h4.574a.38.38 0 0 0 .379-.378.383.383 0 0 0-.379-.383Zm0 0"
                        }
                        fill={"currentColor"}
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
