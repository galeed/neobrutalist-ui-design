'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider attribute="class" themes={["light", "dark", "gamer", "oxford"]} defaultTheme="light" enableSystem={false} {...props}>{children}</NextThemesProvider>
}
