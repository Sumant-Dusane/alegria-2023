import Navbar from '@/components/Navbar/Navbar';
import '../assets/style/style.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='universe1'>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
