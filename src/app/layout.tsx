import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PETKIT Purobot Ultra | Máy Dọn Phân Mèo Tự Động Camera AI',
  description:
    'PETKIT Purobot Ultra - Máy dọn phân mèo tự động có Camera AI xoay 180°, đàm thoại 2 chiều, 20 cảm biến an toàn và tự động niêm phong túi rác. Giá 19.800.000đ.',
  keywords: [
    'PETKIT',
    'Purobot Ultra',
    'máy dọn phân mèo tự động',
    'camera AI mèo',
    'thiết bị thông minh thú cưng',
  ],
  openGraph: {
    title: 'PETKIT Purobot Ultra | Máy Dọn Phân Mèo Tự Động Camera AI',
    description:
      'Camera AI xoay 180°, đàm thoại 2 chiều, 20 cảm biến an toàn. Tự động niêm phong túi rác, khử mùi N60.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'PETKIT Vietnam',
    url: 'https://petkit-landing.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PETKIT Purobot Ultra | AI Camera Self-Cleaning Litter Box',
    description:
      'AI Camera 180°, 2-way audio, 20 safety sensors, auto-sealing trash bags.',
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
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
