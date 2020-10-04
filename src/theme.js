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
    padding: (top = 0, bottom = 0) => css`
      padding: ${top} 165px ${bottom} 165px;
      @media (max-width: 1280px) {
        padding: ${top} 75px ${bottom} 75px;
      }
      @media (max-width: 960px) {
        padding: ${top} 45px ${bottom} 45px;
      }
      @media (max-width: 600px) {
        padding: ${top} 24px ${bottom} 24px;
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
