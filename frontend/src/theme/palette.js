import tinycolor from 'tinycolor2'

const primary = '#2c5fcb'
const secondary = '#b90101'
const warning = '#fa8100'
const success = '#4CAF50'
const danger = '#FF5722'
const info = '#03A9F4'

const lightenRate = 7.5
const darkenRate = 15

const palette = {
  primary: {
    main: primary,
    light: tinycolor(primary).lighten(lightenRate).toHexString(),
    dark: tinycolor(primary).darken(darkenRate).toHexString(),
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: secondary,
    light: tinycolor(secondary).lighten(lightenRate).toHexString(),
    dark: tinycolor(secondary).darken(darkenRate).toHexString(),
    contrastText: '#FFFFFF',
  },
  warning: {
    main: warning,
    light: tinycolor(warning).lighten(lightenRate).toHexString(),
    dark: tinycolor(warning).darken(darkenRate).toHexString(),
  },
  success: {
    main: success,
    light: tinycolor(success).lighten(lightenRate).toHexString(),
    dark: tinycolor(success).darken(darkenRate).toHexString(),
  },
  danger: {
    main: danger,
    light: tinycolor(danger).lighten(lightenRate).toHexString(),
    dark: tinycolor(danger).darken(darkenRate).toHexString(),
  },
  info: {
    main: info,
    light: tinycolor(info).lighten(lightenRate).toHexString(),
    dark: tinycolor(info).darken(darkenRate).toHexString(),
  },
}

export default palette
