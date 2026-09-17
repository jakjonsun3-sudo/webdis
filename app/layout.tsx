import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Star Techn Foundation Repair | Houston Foundation Experts', description: 'Foundation repair, house leveling, drainage and concrete solutions for Houston-area homes.' }

export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }