# PETKIT Landing Page - Image Update Verification

## What Changed
Replaced placeholder "PK" text icons with real product images from petkitvietnam.com CDN (bizweb.dktcdn.net).

## Environment
- **URL**: https://out-hwuhaybh.devinapps.com (after redeploy)
- **Fallback**: local serve of `out/` directory

---

## Test 1: Hero Section Product Image Loads

**Steps**:
1. Navigate to landing page root
2. Observe the right side of the Hero section

**Pass criteria**:
- An actual product photo of PURA MAX 2 (white round litter box device) is visible — NOT a blue circle with "PK" text
- Image fills the container without being cut off or distorted
- No broken image icon visible

---

## Test 2: Products Section - All 4 Product Images Load

**Steps**:
1. Scroll to Products section (#products)
2. Observe all 4 product cards

**Pass criteria**:
- Card 1 (PURA MAX 2): Shows white round litter box device photo — NOT "PK" placeholder
- Card 2 (PURA X): Shows white rectangular litter box device photo — NOT "PK" placeholder
- Card 3 (Fresh Element): Shows white food dispenser device photo — NOT "PK" placeholder
- Card 4 (Eversweet 3 Pro): Shows white water fountain device photo — NOT "PK" placeholder
- All images are properly contained within cards (no overflow, no distortion)
- Badge overlays ("Best Seller", "Popular", "New") remain visible on top of images

---

## Test 3: Cart Still Works With New Image Data

**Steps**:
1. Click "Thêm vào giỏ" on PURA MAX 2 card
2. Click cart icon in navbar
3. Observe cart panel

**Pass criteria**:
- Cart badge shows "1" (or incremented from previous state)
- Cart panel opens showing "PETKIT PURA MAX 2" with price "12.990.000đ"
- Product still functional despite image URL change in data
