const Theme = {
  colors: {
    main1: "hsl(207,70%,59%)",
    main2: "hsl(207,70%,94%)",
    dark1: "hsl(227,2%,12%)",
    dark2: "hsl(227,2%,26%)",
    dark3: "hsl(227,2%,64%)",
    light1: "hsl(0,0%,97%)",
    light2: "hsl(0,0%,99%)",
    border: "hsla(0,0%,0%,0.2)"
  },
  breakpoints: {
    mobile: "only screen and (max-width: 800px)",
    tablet: "only screen and (max-width: 1024px)",
    sitewidth: "only screen and (max-width: 1200px)"
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem"
  },
  animations: {
    button: "box-shadow 0.3s ease",
    link: "color 0.2s ease"
  },
  shadows: {
    shadow1: "0px 5px 20px rgba(30, 30, 31, 0.05)"
  }
}

export default Theme
