import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "OP Systems - Construction Operations Consulting",
  description: "Transform operational chaos into intelligent systems. More boots on the ground, less admin in chairs. ISO compliance, digital transformation, and process automation for growing construction businesses.",
  keywords: "construction consulting, operational efficiency, ISO compliance, digital transformation, process automation, construction systems",
  icons: {
    icon: '/ops-logo-colour.svg',
    shortcut: '/ops-logo-colour.svg',
    apple: '/ops-logo-colour.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 