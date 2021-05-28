const isProduction = process.env.NODE_ENV === "production" ? true : false;
const defaultTheme = require("tailwindcss/defaultTheme");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

module.exports = {
  purge: {
    content: ["./src/**/*.vue", "./src/**/*.html"],
    whitelist: [
      "body",
      "html",
      "img",
      "a",
      "g-image",
      "g-image--lazy",
      "g-image--loaded",
    ],
    extractors: [
      {
        extractor: (content) => content.match(/[A-z0-9-:\\/]+/g),
        extensions: ["vue", "js", "jsx", "md", "html", "pug"],
      },
    ],
  },
  theme: {
    fontFamily: {
      sans: [
        "ToyotaType",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#58595b",
            a: {
              color: "#cd1c1a",
              "&:hover": {
                color: "#cd1c1a",
                textDecoration: "none",
              },
              "&:visited": {
                color: "#ab1616",
              },
            },
            h1: {
              margintop: "3em",
              marginBottom: "1em",
              fontSize: em(24, 16),
            },
            h2: {
              marginBottom: "1em",
              fontSize: em(21, 16),
            },
          },
        },
        sm: {
          css: {
            h2: {
              marginBottom: "0.875em",
            },
          },
        },
        md: {
          css: {
            h2: {
              marginBottom: "0.75em",
            },
          },
        },
        lg: {
          css: {
            h2: {
              marginBottom: "0.5em",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  purge: {
    enabled: isProduction,
    content: ["./src/**/*.vue"],
  },
};
