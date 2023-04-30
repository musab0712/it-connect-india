import Footer from './componenets/Footer'
import Header from './componenets/Header'
import './globals.css'
import { Mulish } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap.bundle'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'IT Connect India',
  description: 'Devloped by Musab Hassan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {mulish.className}> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
