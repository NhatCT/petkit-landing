import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PETKIT PURA MAX 2 | Nhà Vệ Sinh Tự Động Thông Minh Cho Mèo',
  description:
    'PETKIT PURA MAX 2 - Nhà vệ sinh tự động cao cấp với công nghệ AI nhận diện mèo, khử mùi xOdor, và điều khiển từ xa qua app. Giải phóng bạn khỏi việc dọn khay mỗi ngày.',
  keywords: [
    'PETKIT',
    'nhà vệ sinh mèo tự động',
    'smart litter box',
    'PURA MAX 2',
    'thiết bị thông minh thú cưng',
  ],
  openGraph: {
    title: 'PETKIT PURA MAX 2 | Nhà Vệ Sinh Tự Động Thông Minh',
    description:
      'Công nghệ AI nhận diện mèo, khử mùi xOdor, điều khiển từ xa. Giải phóng bạn khỏi việc dọn khay mỗi ngày.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'PETKIT Vietnam',
    url: 'https://petkit-landing.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PETKIT PURA MAX 2 | Smart Self-Cleaning Litter Box',
    description:
      'AI-powered cat recognition, xOdor deodorization, remote app control.',
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
