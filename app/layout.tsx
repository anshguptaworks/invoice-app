import '../styles/globals.css'
import { League_Spartan } from 'next/font/google'

const spartan = League_Spartan({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spartan.className}>{children}</body>
    </html>
  )
}
