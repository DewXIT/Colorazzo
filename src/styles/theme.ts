import { alpha, createTheme } from '@mui/material/styles'

const primary = {
  main: '#a78bfa', // purple-400
  light: '#c4b5fd',
  dark: '#7c5dfa',
  contrastText: '#0b0f14',
}

const secondary = {
  main: '#22d3ee', // cyan-400
  light: '#67e8f9',
  dark: '#06b6d4',
  contrastText: '#0b0f14',
}

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0a0a0a', paper: '#0a0a0a' },
    text: { primary: '#e5e7eb', secondary: '#cbd5e1' },
    primary,
    secondary,
    divider: 'rgba(255,255,255,0.12)',
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'].join(','),
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#e5e7eb',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontFamily: 'inherit',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
          color: '#0b0f14',
          '&:hover': {
            background: 'linear-gradient(135deg, #9a7cf5 0%, #ec5fa9 100%)',
          },
        },
        outlined: {
          borderColor: alpha('#ffffff', 0.2),
          color: '#e5e7eb',
          '&:hover': {
            backgroundColor: alpha('#ffffff', 0.06),
            borderColor: alpha('#ffffff', 0.3),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
          border: '1px solid rgba(255,255,255,0.08)',
          backgroundColor: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(6px)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(167,139,250,0.6)',
        },
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(167,139,250,0.8)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#a78bfa',
            boxShadow: '0 0 0 4px rgba(167,139,250,0.15)',
          },
          fontFamily: 'inherit',
        },
        input: {
          color: '#e5e7eb',
          fontFamily: 'inherit',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: '#e5e7eb',
          paddingTop: 10,
          paddingBottom: 10,
          fontFamily: 'inherit',
        },
        icon: { color: '#e5e7eb' },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0b0f14',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 12,
          fontFamily: 'inherit',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#e5e7eb',
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.06)' },
          fontFamily: 'inherit',
        },
      },
    },
  },
})

export default theme
