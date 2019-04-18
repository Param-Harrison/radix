import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import merge from 'lodash.merge';
import { theme as defaultTheme } from './theme';

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
`;

export function RadixProvider({ theme = defaultTheme, children }) {
  return (
    <ThemeProvider theme={makeTheme(theme)}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
}

function makeTheme(theme) {
  return {
    ...theme,
    buttons: makeButtons(theme),
    buttonSizes: makeButtonSizes(theme),
  };
}

function makeButtons(theme) {
  return merge(
    {
      blue: {
        color: themeGet('colors.blues.5')({ theme }),
        backgroundColor: themeGet('colors.blues.0')({ theme }),
        boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.3')({ theme })}`,
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')({ theme })}`,
        },
        '&:active': {
          backgroundColor: themeGet('colors.blues.1')({ theme }),
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.blues.4')({ theme })}`,
        },
      },
      green: {
        color: themeGet('colors.greens.5')({ theme }),
        backgroundColor: themeGet('colors.greens.0')({ theme }),
        boxShadow: `inset 0 0 0 1px ${themeGet('colors.greens.3')({ theme })}`,
        '&:hover': {
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.greens.4')({
            theme,
          })}`,
        },
        '&:active': {
          backgroundColor: themeGet('colors.greens.1')({ theme }),
          boxShadow: `inset 0 0 0 1px ${themeGet('colors.greens.4')({
            theme,
          })}`,
        },
      },
      yellow: {
        color: themeGet('colors.yellows.5')({ theme }),
      },
      red: {
        color: themeGet('colors.reds.5')({ theme }),
      },
      active: {
        color: themeGet('colors.grays.5')({ theme }),
        backgroundColor: themeGet('colors.grays.1')({ theme }),
        boxShadow: `inset 0 1px 1px 0 ${themeGet('colors.blacks.4')({
          theme,
        })}, inset 0 0 0 1px ${themeGet('colors.grays.3')({ theme })}`,
        '&:hover': {
          boxShadow: `inset 0 1px 1px 0 ${themeGet('colors.blacks.4')({
            theme,
          })}, inset 0 0 0 1px ${themeGet('colors.grays.4')({ theme })}`,
        },
        '&:active': {
          backgroundColor: themeGet('colors.grays.2')({ theme }),
        },
      },
    },
    theme.buttons
  );
}

function makeButtonSizes(theme) {
  return merge(
    {
      medium: {
        fontSize: themeGet('fontSizes.3')({ theme }),
        padding: `0 ${themeGet('space.3')({ theme })}`,
        height: themeGet('space.6')({ theme }),
        minWidth: themeGet('space.6')({ theme }),
      },
    },
    theme.buttonSizes
  );
}
