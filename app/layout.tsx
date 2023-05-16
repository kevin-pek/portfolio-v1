export const metadata = {
  title: 'Kevin Pek',
  description: 'Portfolio of Kevin Pek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}
