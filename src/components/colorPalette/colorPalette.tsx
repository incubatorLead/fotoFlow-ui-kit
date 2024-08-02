import React from "react"

import clsx from "clsx"

import s from "./colorPalette.module.scss"

import { Copy } from "../../assets/icons/components"
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
                    onClick={() => copyTextToClipboard(`--color-${item.name}`)}
                    title={"copy hex color"}
                    type={"button"}
                  >
                    {item.color}
                    <Copy height={18} width={18} />
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
