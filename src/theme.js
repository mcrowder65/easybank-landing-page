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
  breakpoints: (size, dimension = "width") => {
    const sizes = {
      xs: `@media (max-${dimension}: 480px)`,
      sm: `@media (max-${dimension}: 600px)`,
      md: `@media (max-${dimension}: 960px)`,
      lg: `@media (max-${dimension}: 1280px)`,
    }
    return sizes[size] ?? sizes.md
  },
}

export default theme
