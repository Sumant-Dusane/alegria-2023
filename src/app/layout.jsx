"use client"

import Navbar from '@/components/Navbar/Navbar';
import '../assets/style/style.scss';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [currentPlanet, setCurrentPlanet] = useState('planet1');
  return (
    <html lang="en">
      <body>
        <Navbar currentPlanet={currentPlanet} setCurrentPlanet={setCurrentPlanet} />
        {children}
        </body>
    </html>
  )
}
