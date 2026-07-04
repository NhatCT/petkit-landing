# PETKIT PURA MAX 2 - Landing Page

Landing page giới thiệu sản phẩm **PETKIT PURA MAX 2** - Nhà vệ sinh tự động thông minh cho mèo.

## Demo

- **Live**: [petkit-landing.vercel.app](https://petkit-landing.vercel.app) *(hoặc link deploy)*
- **Repo**: [github.com/NhatCT/petkit-landing](https://github.com/NhatCT/petkit-landing)

## Tính năng

### Giao diện
- Hero Section với parallax scroll effect và floating animation
- Features Section - 6 công nghệ nổi bật với hover effects
- Technical Specs - thông số kỹ thuật chi tiết
- Products Section - hệ sinh thái sản phẩm PETKIT
- Contact Form - đăng ký nhận tin với validation
- Responsive hoàn toàn (Desktop + Tablet + Mobile)
- Dark Mode toggle với localStorage persistence

### Hiệu năng & SEO
- Static Site Generation (SSG) cho tốc độ tối ưu
- Tailwind CSS 4 - utility-first, tree-shaking CSS
- Framer Motion - hardware-accelerated animations
- SEO đầy đủ: Title, Description, Open Graph, Twitter Card
- Google Fonts với `display=swap`
- Lighthouse Performance Score ≥ 85

### Điểm cộng
- **Dark Mode**: Toggle sáng/tối, lưu preference
- **Scroll Animations**: Intersection Observer + Framer Motion
- **Micro-interactions**: Hover effects, scale transitions, float animations
- **Parallax Scrolling**: Hero section với depth layers
- **Scroll Progress**: Thanh tiến trình cuộn trang
- **User Behavior Tracking**: Track scroll milestones + click events
- **Mini E-commerce**: Yêu thích, giỏ hàng, sản phẩm đã xem (Zustand)
- **AI Chatbot**: Cửa sổ chat với auto-responses tư vấn sản phẩm
- **Form Validation**: Kiểm tra tính hợp lệ real-time (email, SĐT)

## Tech Stack

### Frontend
| Công nghệ | Vai trò |
|-----------|---------|
| Next.js 16 | Framework React SSG |
| React 19 | UI Library |
| TypeScript | Type safety |
| Tailwind CSS 4 | Styling |
| Framer Motion | Animations |
| Zustand | State management |
| Lucide React | Icons |
| react-intersection-observer | Scroll detection |

### Backend
| Công nghệ | Vai trò |
|-----------|---------|
| Next.js API Routes | RESTful API |
| JSON File Storage | Database (cart, wishlist, contact) |

## Cài đặt & Chạy

```bash
# Clone
git clone https://github.com/NhatCT/petkit-landing.git
cd petkit-landing

# Install
npm install

# Dev
npm run dev

# Build
npm run build

# Start production
npm run start

# Preview static export
npx serve out
```

## Cấu trúc dự án

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page composition
│   ├── globals.css         # Global styles + CSS vars
│   └── api/                # Backend API Routes
│       ├── contact/
│       │   └── route.ts    # Contact form API
│       ├── cart/
│       │   └── route.ts    # Cart management API
│       └── wishlist/
│           └── route.ts    # Wishlist management API
├── components/
│   ├── Navbar.tsx          # Navigation + Dark mode + Cart
│   ├── HeroSection.tsx     # Hero with parallax
│   ├── FeaturesSection.tsx # 6 feature cards
│   ├── SpecsSection.tsx    # Technical specifications
│   ├── ProductsSection.tsx # Product grid + e-commerce
│   ├── ContactForm.tsx     # Newsletter signup form (connected to API)
│   ├── CartDrawer.tsx      # Slide-out cart panel
│   ├── Chatbot.tsx         # AI chatbot window
│   ├── ScrollProgress.tsx  # Scroll progress bar
│   ├── ScrollTracker.tsx   # Behavior analytics
│   ├── BackToTop.tsx       # Back to top button
│   └── Footer.tsx          # Footer links
├── store/
│   └── useStore.ts         # Zustand global state
└── data/                   # JSON file storage
    ├── cart.json
    └── wishlist.json
```

## Deploy

Trang web được deploy tĩnh (static export) với Backend API, tương thích với:
- **Vercel** (Khuyến nghị - hỗ trợ Next.js API Routes)
- Netlify
- Cloudflare Pages

### Deploy trên Vercel:
1. Push code lên GitHub
2. Import project trên Vercel
3. Vercel tự động detect Next.js và deploy
4. API Routes sẽ hoạt động tự động

## Tác giả

**NhatCT** - [github.com/NhatCT](https://github.com/NhatCT)