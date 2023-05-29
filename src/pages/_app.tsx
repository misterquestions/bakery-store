import { NextUIProvider, createTheme } from '@nextui-org/react';
import { AppProps } from 'next/app';
import React from "react";

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#93D4CF',
      secondary: '#F7B3C2',
      error: '#FCC5D8',
    },
  }
})

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextUIProvider theme={theme}>
      <p>Custom app</p>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default CustomApp