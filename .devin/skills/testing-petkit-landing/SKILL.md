---
name: testing-petkit-landing
description: Test the PETKIT landing page end-to-end. Use when verifying UI features, form validation, cart functionality, chatbot, dark mode, or responsive design.
---

# Testing PETKIT Landing Page

## Deployed URL
- Production: https://out-hwuhaybh.devinapps.com
- Local fallback: Build with `npm run build` then serve `out/` directory

## Key Test Areas

### 1. Page Load & Core Sections
Navigate to the root URL and verify:
- Hero section: title "PETKIT PURA MAX 2", CTA button with price "12.990.000d", stats (99%, 76dB, 15+)
- Features section (#features): 6 feature cards
- Specs section (#specs): 76L capacity, dimensions grid
- Products section (#products): 4 product cards with prices and "Them vao gio" buttons
- Contact section (#contact): form with name, email, phone, message fields
- Footer: multi-column layout with links

### 2. Dark Mode Toggle
- Toggle button is in the navbar (Moon/Sun icon)
- Click Moon -> adds `dark` class to html, background goes dark, text goes light
- Click Sun -> removes `dark` class, reverts to light mode
- State persists via localStorage key `theme`

### 3. Mini E-commerce (Cart)
- Click "Them vao gio" on any product card
- Cart badge number appears on the ShoppingCart icon in navbar
- Click ShoppingCart icon to open slide-out panel
- Panel shows: product name, price, quantity controls (+/-), remove button, total
- Quantity math: total = unit_price x quantity
- State managed by Zustand store (`src/store/useStore.ts`)

### 4. Contact Form Validation
- Required fields: "Ho va ten" (name), "Email"
- Submit empty -> shows Vietnamese error messages under fields
- Invalid email format -> "Email khong hop le"
- Valid submit -> shows success: "Dang ky thanh cong! Cam on ban."
- Form resets after successful submission
- No backend API (static export) - uses client-side simulation with console.log

### 5. AI Chatbot
- Floating blue button at bottom-right corner
- Click opens chat window with header "PETKIT Assistant"
- Initial bot message: welcome greeting mentioning "tro ly AI cua PETKIT"
- Keyword matching (case-insensitive, checks if message contains keyword):
  - "gia" -> responds with price 12.990.000d
  - "bao hanh" -> 24 months warranty info
  - "meo" -> weight range 1.5-8kg
  - "giao hang" -> free shipping 2-5 days
  - "cat" -> compatible litter size 1-4mm
- Close button (X) in header closes the window

### 6. Responsive Design
- Breakpoint for mobile nav: around 768px (md breakpoint in Tailwind)
- At 375px width: hamburger menu (Menu icon) replaces nav links
- Click hamburger -> dropdown shows: Tinh nang, Thong so, San pham, Lien he
- Product cards stack to single column on mobile
- No horizontal overflow at any viewport

## Tech Stack Notes
- Next.js with static export (`output: 'export'` in next.config.ts)
- Tailwind CSS v4 with CSS variables for theming
- Framer Motion for animations (AnimatePresence for cart panel, chat window)
- Zustand for state management (cart, favorites, dark mode)
- All components are client-side ('use client' directive)

## Common Issues
- Vercel CI may fail because project was previously configured for Vite; this is a Vercel dashboard config issue, not a code bug
- The static export has no API routes - form submission is simulated client-side
- Animations might not trigger if intersection observer hasn't fired yet - scroll to section first
- Cart badge might show stale count if Zustand hydration hasn't completed - wait a moment after page load

## Testing Tips
- Use browser DevTools device toolbar (Ctrl+Shift+M) for responsive testing
- For chatbot testing, type Vietnamese keywords without diacritics might not work - use exact Vietnamese with diacritics (e.g. "gia" works because the code normalizes)
- Dark mode toggle is the Moon/Sun icon button, not a text link
- Cart panel slides from the right - look for the overlay/backdrop to confirm it opened
