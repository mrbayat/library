import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import palette from './palette'

const theme = createTheme({
  palette,
  direction: 'rtl',
  spacing: 2,
  typography: {
    allVariants: {
      fontFamily: 'IRANSans',
    },
    h6: {
      fontSize: 16,
      fontWeight: 400
    },

    button: {
      fontSize: 16,
      marginTop: 10,
    },
  },
})

export default responsiveFontSizes(theme)
