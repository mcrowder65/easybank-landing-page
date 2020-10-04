import { css } from "@emotion/core"

const theme = {
  palette: {
    primary: "papayawhip",
  },
  padding: {
    left: "165px",
    right: "165px",
    top: "33px",
    bottom: "33px",
  },
  paddingBreakpoints: {
    padding: css`
      padding: 0 165px 0 165px;
      @media (max-width: 1280px) {
        padding: 0 75px 0 75px;
      }
      @media (max-width: 960px) {
        padding: 0 45px 0 45px;
      }
      @media (max-width: 600px) {
        padding: 0 24px 0 24px;
      }
    `,
  },
  breakpoints: (size, dimension = "width") => {
    const sizes = {
      xs: `@media (max-${dimension}: 480px)`,
      sm: `@media (max-${dimension}: 600px)`,
      md: `@media (max-${dimension}: 960px)`,
      lg: `@media (max-${dimension}: 1280px)`,
      xl: `@media (max-${dimension}: 1600px)`,
    }
    return sizes[size] ?? sizes.md
  },
}

export default theme
