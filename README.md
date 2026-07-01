# PETKIT Landing Page - Máy Dọn Phân Mèo Thông Minh

Landing page hiện đại cho sản phẩm máy dọn phân mèo thông minh PETKIT Pura X, được xây dựng với React + Vite + Tailwind CSS.

## 🚀 Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - CSS Framework
- **Framer Motion** - Animation Library
- **React Hook Form** - Form Validation
- **Lucide React** - Icon Library

## ✨ Tính Năng

- ✅ Hero Section với animation mượt mà
- ✅ Features Section với 6 tính năng nổi bật
- ✅ Technical Specifications Section
- ✅ Newsletter Signup Form với validation
- ✅ Dark Mode toggle
- ✅ Scroll Animations và micro-interactions
- ✅ Responsive Design (Desktop & Mobile)
- ✅ SEO Meta Tags hoàn chỉnh
- ✅ Performance Optimization

## 📦 Cài Đặt

```bash
# Clone repository
git clone <your-repo-url>
cd petkit-landing

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project vào [Vercel](https://vercel.com)
3. Vercel sẽ tự động detect và deploy

### Manual Deployment

```bash
npm run build
# Upload folder 'dist' lên hosting
```

## 📁 Cấu Trúc Project

```
petkit-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero Section
│   │   ├── Features.jsx      # Features Section
│   │   ├── Specifications.jsx # Technical Specs
│   │   ├── Newsletter.jsx    # Newsletter Form
│   │   ├── Footer.jsx        # Footer
│   │   └── DarkModeToggle.jsx # Dark Mode Toggle
│   ├── App.jsx               # Main App Component
│   ├── main.jsx              # Entry Point
│   └── index.css             # Global Styles
├── public/                   # Static Assets
├── index.html                # HTML Template
├── tailwind.config.js        # Tailwind Config
├── vercel.json              # Vercel Config
└── package.json             # Dependencies
```

## 🎨 Design System

- **Primary Color**: Blue (#0ea5e9)
- **Secondary Color**: Indigo (#6366f1)
- **Font**: System UI (Inter/Roboto)
- **Style**: Minimalist Clean
- **Dark Mode**: Supported

## 📝 SEO Optimization

- Meta tags hoàn chỉnh (Title, Description, Keywords)
- Open Graph tags cho Facebook
- Twitter Card tags
- Canonical URL
- Semantic HTML structure

## ⚡ Performance

- Lazy loading components
- Code splitting
- Optimized images
- Minified CSS/JS
- Target: PageSpeed 85+ (Mobile)

## 🔧 Git Workflow

```bash
# Create develop branch
git checkout -b develop

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to develop
git push origin develop

# Merge to main when ready
git checkout main
git merge develop
git push origin main
```

## 📄 License

© 2025 PETKIT Việt Nam by HeLiCorp. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
