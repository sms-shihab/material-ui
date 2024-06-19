import { Components } from '@mui/material';
import { Theme, alpha } from '@mui/material/styles';
import { gray, red, brand, green } from '../themePrimitives';

/* eslint-disable import/prefer-default-export */
export const otherComponentsCustomizations: Components<Theme> = {
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: brand[600],
        fontWeight: 500,
        position: 'relative',
        textDecoration: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 0,
          height: '1px',
          bottom: 0,
          left: 0,
          backgroundColor: brand[200],
          opacity: 0.7,
          transition: 'width 0.3s ease, opacity 0.3s ease',
        },
        '&:hover::before': {
          width: '100%',
          opacity: 1,
        },
        '&:focus-visible': {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          outlineOffset: '4px',
          borderRadius: '2px',
        },
        ...theme.applyStyles('dark', {
          color: brand[200],
        }),
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: '1px solid',
        borderRadius: '999px',
        '& .MuiChip-label': {
          padding: '0 4px',
          fontWeight: 600,
        },
        variants: [
          {
            props: {
              color: 'default',
            },
            style: {
              borderColor: gray[200],
              backgroundColor: gray[100],
              '& .MuiChip-label': {
                color: gray[500],
              },
              '& .MuiChip-icon': {
                color: gray[500],
              },
              ...theme.applyStyles('dark', {
                borderColor: gray[700],
                backgroundColor: gray[800],
                '& .MuiChip-label': {
                  color: gray[300],
                },
                '& .MuiChip-icon': {
                  color: gray[300],
                },
              }),
            },
          },
          {
            props: {
              color: 'success',
            },
            style: {
              borderColor: green[200],
              backgroundColor: green[50],
              '& .MuiChip-label': {
                color: green[500],
              },
              '& .MuiChip-icon': {
                color: green[500],
              },
              ...theme.applyStyles('dark', {
                borderColor: green[800],
                backgroundColor: green[900],
                '& .MuiChip-label': {
                  color: green[300],
                },
                '& .MuiChip-icon': {
                  color: green[300],
                },
              }),
            },
          },
          {
            props: {
              color: 'error',
            },
            style: {
              borderColor: red[100],
              backgroundColor: red[50],
              '& .MuiChip-label': {
                color: red[500],
              },
              '& .MuiChip-icon': {
                color: red[500],
              },
              ...theme.applyStyles('dark', {
                borderColor: red[800],
                backgroundColor: red[900],
                '& .MuiChip-label': {
                  color: red[200],
                },
                '& .MuiChip-icon': {
                  color: red[300],
                },
              }),
            },
          },
        ],
      }),
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 8,
        borderRadius: 8,
        backgroundColor: gray[200],
        ...theme.applyStyles('dark', {
          backgroundColor: gray[800],
        }),
      }),
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      actions: {
        display: 'flex',
        gap: 8,
        marginRight: 6,
        '& .MuiIconButton-root': { minWidth: 0, width: 36, height: 36 },
      },
    },
  },
  MuiIcon: {
    defaultProps: {
      fontSize: 'small',
    },
    styleOverrides: {
      root: {
        variants: [
          {
            props: {
              fontSize: 'small',
            },
            style: {
              fontSize: '1rem',
            },
          },
        ],
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.default,
      }),
    },
  },
};
