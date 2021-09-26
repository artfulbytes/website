import Typography from 'typography'
import githubTheme from 'typography-theme-github'

githubTheme.baseFontSize = `18px`
githubTheme.headerFontFamily = [`Helvetica`, `sans-serif`]
githubTheme.bodyFontFamily = [`Helvetica`, `sans-serif`]
githubTheme.headerColor = `#333438`

githubTheme.overrideThemeStyles = () => ({
  a: {
    color: `#333438`,
    textDecoration: 'underline',
  },

  'a:hover': {
    textDecoration: 'none'
  },

  'h1,h2,h3,h4,h5,h6': {
    border: `none`,
    marginTop: `0.3rem`,
    marginBottom: `0.75rem`,
    paddingBottom: `0.0rem`
  },

  'h2': {
    paddingTop: `0.5rem`,
  },

  'h3': {
    fontWeight: `normal`
  },

  'p': {
    marginBottom: `1.5rem`
  },

})

const typography = new Typography(githubTheme)

if (process.env.NODE_ENV !== "production") {
  typography.injectStyles()
}

export default typography
