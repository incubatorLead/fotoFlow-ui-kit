import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

import "../src/styles/boilerplate.scss"

const preview: Preview = {
  parameters: {
    layout: "centered",
    docs: {
      theme: themes.dark
    },
    backgrounds: {
      grid: {
        disable: true
      },
      default: "dark",
      values: [
        { name: "dark", value: "#000" },
        { name: "light", value: "#fff" }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        method: "alphabetical"
      }
    }
  }
}

export default preview
