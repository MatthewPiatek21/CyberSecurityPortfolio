import './globals.css'

export const metadata = {
  title: 'Matthew Piatek',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=1920, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
