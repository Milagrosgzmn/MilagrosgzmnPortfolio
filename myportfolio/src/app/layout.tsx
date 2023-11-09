import type { Metadata } from 'next';

import { Inter, Roboto } from 'next/font/google'
import './globals.css';
import NavBar from '@/components/navBar';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight:["300","400","500","700"],
  style:["normal", "italic"],
  subsets: ['latin'] 
})
export const metadata: Metadata = {
  title: 'Milagros Guzman - Porfolio',
  description: 'My personal portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar></NavBar>
        <main className='content-cont'>
          {children}
        </main>
        
        </body>
    </html>
  )
}
