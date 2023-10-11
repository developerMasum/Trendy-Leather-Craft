import Navbar from '@/components/Shared/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trendy Leather Craft',
  description: 'Trendy Leather Craft',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <AuthProvider>
      <body className={inter.className} >
        <Navbar />
       {children} 
        
        
        </body>
        </AuthProvider>
    </html>
  )
}
