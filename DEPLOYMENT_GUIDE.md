# 🚀 Deploying CipherPolice to cipherpolice.com

## Overview

You have several hosting options. Here are the best choices for your React + Vite application:

---

## 🥇 **Option 1: Vercel (RECOMMENDED - Easiest)**

### Why Vercel?
- ✅ Free tier available
- ✅ Auto-deploys from GitHub
- ✅ Custom domain support
- ✅ Fast global CDN
- ✅ Perfect for Vite projects
- ✅ Environment variables built-in

### Step-by-Step Setup

#### 1. Push to GitHub
```bash
cd /workspaces/cipherpolice

# Stage and commit all changes
git add .
git commit -m "feat: Complete CipherPolice with AI chatbot and compliance guide"
git push origin main
```

#### 2. Create Vercel Account
- Go to https://vercel.com
- Click "Sign Up"
- Choose "GitHub" for authentication
- Authorize Vercel to access your GitHub repositories

#### 3. Import Project
- Click "New Project"
- Select your `cipherpolice` repository
- Vercel auto-detects Vite configuration
- Click "Import"

#### 4. Configure Environment Variables
In Vercel Dashboard:
- Go to Settings → Environment Variables
- Add: `VITE_GEMINI_API_KEY` = your_api_key
- Click Save

#### 5. Connect Domain
- Go to Settings → Domains
- Add your domain: `cipherpolice.com`
- Follow DNS setup instructions for your domain registrar

#### 6. Deploy
- Click "Deploy"
- Wait for build to complete
- Your site goes live at `https://cipherpolice.com`

### DNS Setup for cipherpolice.com
Update your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Using Vercel Nameservers (Easiest)**
```
Replace existing nameservers with:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

**Option B: Using CNAME (If keeping current registrar)**
```
Create CNAME record:
Name: www
Value: cname.vercel-dns.com

Or for root domain:
Add A record pointing to Vercel's IP
```

---

## 🥈 **Option 2: Netlify**

### Setup Steps

#### 1. Build Project
```bash
npm run build
```

#### 2. Create Netlify Account
- Go to https://netlify.com
- Sign up with GitHub

#### 3. Connect Repository
- Click "New site from Git"
- Select GitHub
- Choose `cipherpolice` repository

#### 4. Configure Build Settings
- Build command: `npm run build`
- Publish directory: `dist`

#### 5. Set Environment Variables
- Go to Site Settings → Environment Variables
- Add: `VITE_GEMINI_API_KEY` = your_api_key

#### 6. Add Custom Domain
- Domain Settings → Custom Domain
- Add `cipherpolice.com`
- Update DNS records

---

## 🥉 **Option 3: GitHub Pages + Custom Domain**

### Setup Steps

#### 1. Update vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // For custom domain
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
```

#### 2. Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build project
        run: npm run build
        env:
          VITE_GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### 3. Update GitHub Settings
- Go to repository Settings → Pages
- Source: Deploy from a branch
- Branch: `gh-pages` / `/ (root)`

#### 4. Add Custom Domain
- Go to Settings → Pages
- Custom domain: `cipherpolice.com`
- Check "Enforce HTTPS"

#### 5. Update DNS Records
Add CNAME record in your domain registrar:
```
Name: @
Value: yourusername.github.io
```

---

## 📋 **Recommended: Vercel Setup Complete Guide**

### Pre-Deployment Checklist

```bash
# 1. Verify everything works locally
npm run dev

# 2. Build and test production build
npm run build
npm run preview

# 3. Type check
npm run typecheck

# 4. Lint check
npm run lint

# 5. Commit and push
git add .
git commit -m "feat: Production-ready CipherPolice"
git push origin main
```

### Step-by-Step Vercel Deployment

**Step 1: GitHub Preparation**
```bash
cd /workspaces/cipherpolice

# Make sure everything is committed
git status

# Push to GitHub
git push origin main
```

**Step 2: Vercel Setup**
```
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Select GitHub account
4. Click "cipherpolice" repository
5. Click "Import"
```

**Step 3: Build Configuration**
```
Vercel auto-detects Vite:
- Framework: Vite
- Build Command: npm run build
- Output Directory: dist
- Install Command: npm install (or pnpm install)
```

**Step 4: Environment Variables**
```
In Vercel Dashboard:
Settings → Environment Variables

Add:
Name: VITE_GEMINI_API_KEY
Value: YOUR_GEMINI_API_KEY_HERE
Environment: Production, Preview, Development

Click "Save and Deploy"
```

**Step 5: Domain Configuration**

In Vercel Dashboard:
```
Settings → Domains
Add Domain: cipherpolice.com

Copy the nameservers provided:
ns1.vercel-dns.com
ns2.vercel-dns.com
```

In your Domain Registrar (GoDaddy, Namecheap, etc.):
```
1. Go to DNS Settings
2. Update Nameservers to:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
3. Save changes (may take 24-48 hours)
```

**Step 6: Deploy!**
```
Click "Deploy" button in Vercel
Wait for build to complete
Your site is live at https://cipherpolice.com
```

---

## 🔄 **Continuous Deployment (Auto-Updates)**

Once set up, every time you push to GitHub:
```bash
git add .
git commit -m "Update CipherPolice"
git push origin main
```

**Vercel automatically:**
- ✅ Pulls latest code
- ✅ Builds the project
- ✅ Deploys to production
- ✅ Updates cipherpolice.com

---

## 🔐 **Environment Variables for Production**

### Create `.env.production.local`
```
VITE_GEMINI_API_KEY=your_production_api_key
```

### On Vercel Dashboard
1. Settings → Environment Variables
2. Add all `.env.*` variables
3. Select environments: Production, Preview, Development

---

## ✅ **Post-Deployment Checklist**

- [ ] Website loads at https://cipherpolice.com
- [ ] Chat button visible
- [ ] Navigation links work
- [ ] Compliance guide displays
- [ ] Scanner functionality works
- [ ] All pages responsive
- [ ] HTTPS enabled
- [ ] No console errors
- [ ] API key working (ask chatbot a question)

---

## 📊 **Deployment Comparison**

| Feature | Vercel | Netlify | GitHub Pages |
|---------|--------|---------|--------------|
| **Free Tier** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Custom Domain** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Auto Deploy** | ✅ Git push | ✅ Git push | ✅ Git push |
| **Env Variables** | ✅ Easy | ✅ Easy | ⚠️ Limited |
| **Performance** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Setup Time** | 5 min | 5 min | 10 min |
| **Recommended** | ✅ BEST | ✅ Good | ✅ Basic |

---

## 🚨 **Troubleshooting**

### Domain Not Connecting
```
1. Check DNS propagation: https://dnschecker.org
2. Wait 24-48 hours for DNS update
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try different browser/device
```

### Build Fails
```
1. Check build locally: npm run build
2. Verify all dependencies installed
3. Check for TypeScript errors: npm run typecheck
4. Review Vercel build logs
```

### API Key Not Working
```
1. Verify API key in environment variables
2. Check key is valid: https://aistudio.google.com/app/apikey
3. Ensure key has API access enabled
4. Restart deployment after updating key
```

### HTTPS Issues
```
1. Vercel auto-generates SSL certificate
2. May take 5-10 minutes
3. Force HTTPS in Settings → Domains
4. Wait for certificate generation
```

---

## 🎯 **Final Steps**

### 1. Deploy Now
```bash
# Commit and push
git push origin main

# Go to Vercel and deploy
```

### 2. Configure Domain
```
Update DNS at your registrar
Add Vercel nameservers
```

### 3. Wait for DNS
```
May take 24-48 hours
Check status at: https://dnschecker.org
```

### 4. Visit Your Site
```
https://cipherpolice.com
🎉 Live on your domain!
```

---

## 📚 **Helpful Resources**

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **GitHub Pages:** https://pages.github.com
- **DNS Checker:** https://dnschecker.org
- **SSL Check:** https://www.ssllabs.com/ssltest

---

## 💡 **Quick Decision Guide**

**Choose Vercel if:**
- You want the easiest setup
- You want best performance
- You want auto-scaling
- You want Vite optimization

**Choose Netlify if:**
- You prefer Netlify's interface
- You want serverless functions
- You want form handling

**Choose GitHub Pages if:**
- You want everything free
- You want to keep it simple
- You don't need many features

---

**Recommended: Use Vercel! 🚀**

It's the easiest, fastest, and most reliable option for your project.

Questions? Check Vercel docs or ask in their community!
