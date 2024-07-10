import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      grid: {
        disable: true,
      },
      default: 'dark',
      values: [
        { name: "dark", value: "#000" },
        { name: "light", value: "#fff" }
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
