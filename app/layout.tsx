import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Xavier Navia - Desarrollador de Software & IA',
  description: 'Portfolio profesional de Xavier Navia, estudiante de Ingeniería en Software en PUCEM. Especializado en desarrollo full-stack, inteligencia artificial y reconocimiento facial.',
  keywords: ['Xavier Navia', 'Desarrollador', 'Software', 'Inteligencia Artificial', 'PUCEM', 'Manabí', 'Portfolio'],
  authors: [{ name: 'Xavier Navia' }],
  creator: 'Xavier Navia',
  openGraph: {
    title: 'Xavier Navia - Desarrollador de Software & IA',
    description: 'Portfolio profesional de Xavier Navia, especializado en desarrollo full-stack e inteligencia artificial.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xavier Navia - Desarrollador de Software & IA',
    description: 'Portfolio profesional especializado en desarrollo full-stack e inteligencia artificial.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}