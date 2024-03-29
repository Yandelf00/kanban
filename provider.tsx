"use client"
import { ThemeProvider } from 'next-themes'

function Provider({children} : {children : React.ReactNode}) {
  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Provider