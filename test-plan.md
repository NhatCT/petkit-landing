# PETKIT Landing Page - Test Plan

## Environment
- **URL**: https://out-hwuhaybh.devinapps.com (deployed static site)
- **Fallback**: http://localhost:3000 (local serve of `out/` directory)

## CI Note
Vercel CI fails because the project was previously configured for Vite; now it's Next.js. This is a Vercel project settings issue, not a code issue. The static export deployed via devinapps works correctly.

---

## Test 1: Page Load & Core Sections Render

**Goal**: Verify all required sections are present and rendered correctly.

**Steps**:
1. Navigate to the landing page URL
2. Verify Hero section is visible with:
   - Title contains "PETKIT" and "PURA MAX 2"
   - CTA button "Mua ngay - 12.990.000đ" is visible
   - Stats showing "99%", "76dB", "15+"
3. Scroll down to Features section (#features)
   - Verify 6 feature cards are present with titles: "AI Nhận Diện Mèo", "Khử Mùi xOdor", "Điều Khiển Từ Xa", "An Toàn Tuyệt Đối", "Siêu Tiết Kiệm", "Kết Nối IoT"
4. Scroll to Specs section (#specs)
   - Verify "76L" dung tích is displayed prominently
   - Verify spec grid shows values like "532 x 507 x 644mm", "12.5 kg"
5. Scroll to Products section (#products)
   - Verify 4 product cards are visible
6. Scroll to Contact form (#contact)
   - Verify form fields: Họ và tên, Email, Số điện thoại, Lời nhắn
7. Verify Footer is visible with copyright text

**Pass criteria**: All sections render with correct content, no blank/broken areas.

---

## Test 2: Dark Mode Toggle

**Goal**: Verify dark mode toggles the UI theme visibly.

**Steps**:
1. On page load, verify background is light (white/light gray)
2. Click the Moon icon in the navbar (dark mode toggle)
3. Verify:
   - Background changes to dark (slate/navy)
   - Text becomes light-colored
   - The icon changes from Moon to Sun
4. Click Sun icon to toggle back
5. Verify page returns to light theme

**Pass criteria**: 
- After clicking Moon: `<html>` has class `dark`, background visibly dark
- After clicking Sun: `<html>` no longer has `dark` class, background visibly light

---

## Test 3: Mini E-commerce - Add to Cart

**Goal**: Verify cart functionality works end-to-end.

**Steps**:
1. Scroll to Products section
2. Click "Thêm vào giỏ" button on "PETKIT PURA MAX 2" product (first card)
3. Verify cart badge on navbar ShoppingCart icon shows "1"
4. Click the ShoppingCart icon in navbar
5. Verify cart panel slides out showing:
   - Product name "PETKIT PURA MAX 2"
   - Price "12.990.000đ"
   - Quantity "1"
   - Total "12.990.000đ"
6. Click "+" button to increase quantity
7. Verify quantity becomes "2" and total becomes "25.980.000đ"
8. Click X to close cart panel

**Pass criteria**: Cart badge count updates, panel shows correct items/prices, quantity math is correct.

---

## Test 4: Contact Form Validation

**Goal**: Verify form validation catches invalid input.

**Steps**:
1. Scroll to Contact form
2. Click "Đăng ký ngay" button without filling any field
3. Verify error messages appear:
   - "Vui lòng nhập họ tên" under name field
   - "Vui lòng nhập email" under email field
4. Type "invalid-email" in email field, submit
5. Verify error: "Email không hợp lệ"
6. Fill valid data: name="Test User", email="test@example.com"
7. Click submit
8. Verify success message: "Đăng ký thành công! Cảm ơn bạn."

**Pass criteria**: Validation errors appear with exact Vietnamese text, valid submission shows success.

---

## Test 5: AI Chatbot Interaction

**Goal**: Verify chatbot opens and responds to keywords.

**Steps**:
1. Verify floating chat button (blue circle) is visible at bottom-right
2. Click the chat button
3. Verify chat window opens with:
   - Header "PETKIT Assistant"
   - Initial message mentioning "trợ lý AI của PETKIT"
4. Type "giá" and press Enter
5. Verify bot responds with message containing "12.990.000đ"
6. Click X to close chat window
7. Verify chat window closes and floating button reappears

**Pass criteria**: Chat opens/closes correctly, keyword "giá" triggers response mentioning price.

---

## Test 6: Responsive Design (Mobile)

**Goal**: Verify page doesn't break on mobile viewport.

**Steps**:
1. Open DevTools and set viewport to mobile (375x667 - iPhone SE)
2. Verify:
   - Hamburger menu icon visible (Menu icon replaces nav links)
   - Hero text stacks vertically (not side-by-side)
   - Product cards stack in single column
   - No horizontal overflow/scroll
3. Click hamburger menu
4. Verify mobile nav opens with links: Tính năng, Thông số, Sản phẩm, Liên hệ

**Pass criteria**: No layout overflow, mobile nav works, content stacks correctly.
