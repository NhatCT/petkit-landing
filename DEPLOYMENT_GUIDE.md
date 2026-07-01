# Hướng Dẫn Deploy Landing Page

## 📋 Tổng Quan
Landing page đã được xây dựng thành công với đầy đủ tính năng yêu cầu. Dưới đây là hướng dẫn để deploy lên GitHub và Vercel.

## 🚀 Các Bước Tiếp Theo

### 1. Setup GitHub Repository

```bash
# Di chuyển đến thư mục project
cd petkit-landing

# Kiểm tra branch hiện tại
git branch
# Bạn đang ở branch 'develop'

# Merge develop vào main
git checkout main
git merge develop

# Tạo repository mới trên GitHub:
# 1. Vào https://github.com/new
# 2. Tạo repository mới (ví dụ: petkit-landing)
# 3. KHÔNG tích vào "Initialize this repository with a README"
# 4. Click "Create repository"

# Thêm remote và push
git remote add origin https://github.com/USERNAME/petkit-landing.git
git branch -M main
git push -u origin main
```

### 2. Deploy lên Vercel

#### Cách 1: Qua Vercel Dashboard (Khuyên dùng)

1. **Đăng ký/Login Vercel**
   - Vào https://vercel.com
   - Đăng ký bằng GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Chọn repository `petkit-landing` từ GitHub
   - Vercel sẽ tự động detect settings từ `vercel.json`

3. **Cấu hình (nếu cần)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Chờ 1-2 phút để Vercel build và deploy
   - Bạn sẽ nhận được URL: `https://petkit-landing.vercel.app`

#### Cách 2: Qua Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy từ thư mục project
cd petkit-landing
vercel

# Follow the prompts
# - Link to existing project? No
# - Project name: petkit-landing
# - Directory: ./
# - Settings: Use default
```

### 3. Cấu hình Domain Tùy Chỉnh (Tùy chọn)

```bash
# Thêm custom domain
vercel domains add petkit.yourdomain.com
```

Hoặc qua Vercel Dashboard:
1. Vào Project Settings → Domains
2. Add domain
3. Cấu hình DNS records theo hướng dẫn

## 🧪 Testing Sau Deploy

### Kiểm tra Functionality
- [ ] Trang load thành công
- [ ] Dark mode toggle hoạt động
- [ ] Form validation hoạt động
- [ ] Scroll animations hiển thị
- [ ] Responsive trên mobile

### Kiểm tra Performance
1. **Google PageSpeed Insights**
   - Vào https://pagespeed.web.dev/
   - Nhập URL của Vercel deploy
   - Kiểm tra điểm số (target: 85+ Mobile)

2. **Lighthouse**
   - Mở Chrome DevTools (F12)
   - Tab Lighthouse
   - Run audit
   - Kiểm tra Performance, SEO, Best Practices

### Kiểm tra SEO
- [ ] Meta tags hiển thị đúng
- [ ] Open Graph tags hoạt động (test với Facebook debugger)
- [ ] Twitter Cards hiển thị đúng

## 🔄 CI/CD Workflow

### Git Branch Strategy
```
main (production)
  ↑
develop (staging)
  ↑
feature/* (feature branches)
```

### Deploy Workflow
1. **Feature Development**
   ```bash
   git checkout -b feature/new-feature
   # Make changes
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

2. **Pull Request to Develop**
   - Tạo PR trên GitHub
   - Review và merge vào develop

3. **Deploy to Staging**
   - Merged PR sẽ trigger deploy (nếu setup)
   - Test trên staging environment

4. **Release to Production**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   # Trigger production deploy
   ```

## 📊 Performance Optimization Tips

### Đã thực hiện:
- ✅ Code splitting (Vite tự động)
- ✅ Tree shaking (Vite tự động)
- ✅ Minification (Vite tự động)
- ✅ Gzip compression (Vercel tự động)
- ✅ Lazy loading components
- ✅ Optimized images

### Có thể cải thiện thêm:
- Thêm WebP images
- Implement Service Worker cho PWA
- Add preloading cho critical resources
- Optimize font loading

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache và rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy Errors
```bash
# Check Vercel logs
vercel logs

# Redeploy
vercel --prod
```

### Responsive Issues
- Test trên nhiều devices
- Sử dụng Chrome DevTools Device Mode
- Check actual mobile devices

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com
- **React Docs**: https://react.dev

## ✅ Checklist Trước Nộp Bài

- [ ] Deploy thành công lên Vercel/Netlify
- [ ] URL hoạt động và có thể truy cập
- [ ] Responsive trên Desktop và Mobile
- [ ] PageSpeed score 85+ (Mobile)
- [ ] SEO meta tags hoàn chỉnh
- [ ] Dark mode hoạt động
- [ ] Form validation hoạt động
- [ ] Animations mượt mà
- [ ] Git repository được setup đúng
- [ ] Commit messages rõ ràng

---

**Chúc bạn thành công với bài thi! 🎉**
