# 🌐 Deploy CipherPolice to cipherpolice.com in 5 Minutes

## 📋 Quick Summary

You have your domain: `cipherpolice.com`
We recommend: **Vercel** (fastest, easiest, best for Vite)

---

## ⚡ **5-Minute Deployment (Vercel)**

### Step 1: Prepare Code (1 min)
```bash
cd /workspaces/cipherpolice

# Ensure everything is committed
git status

# Push to GitHub
git push origin main
```

### Step 2: Create Vercel Account (1 min)
- Go to https://vercel.com
- Click "Sign Up"
- Choose "GitHub"
- Authorize GitHub access

### Step 3: Deploy Project (2 min)
- Click "New Project"
- Select `cipherpolice` repository
- Click "Import"
- Wait for build to complete (~1 min)

### Step 4: Add Environment Variable (30 sec)
In Vercel Dashboard:
- Settings → Environment Variables
- Name: `VITE_GEMINI_API_KEY`
- Value: Your Gemini API key (get from https://aistudio.google.com/app/apikey)
- Click "Save and Deploy"

### Step 5: Connect Your Domain (30 sec)
- Settings → Domains
- Add: `cipherpolice.com`
- Copy Vercel nameservers
- Go to your domain registrar
- Update nameservers to Vercel's
- Done! (DNS updates in 24-48 hours)

---

## ✅ Done! 

Your site will be live at:
### 🎉 https://cipherpolice.com

---

## 📝 Domain Registrar Instructions

### For GoDaddy:
1. Login to GoDaddy
2. My Products → Domains
3. Click your domain
4. Nameservers → Change
5. Add Vercel nameservers
6. Save

### For Namecheap:
1. Login to Namecheap
2. Domain List
3. Manage → Nameservers
4. Choose "Custom DNS"
5. Add Vercel nameservers
6. Save

### For Other Registrars:
- Look for "DNS Settings" or "Nameservers"
- Update to Vercel's nameservers
- Save changes

---

## 🔑 Getting Your Gemini API Key

1. Go to https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key
4. Paste in Vercel environment variables
5. Done! Chatbot will work

---

## ⏱️ Timeline

- **0-1 min**: Deploy to Vercel ✅
- **1-5 min**: Add environment variable ✅
- **5 min**: Connect domain to Vercel ✅
- **5 min - 48 hours**: DNS propagation ⏳
- **After DNS updates**: Site live on cipherpolice.com 🎉

---

## 🆘 Troubleshooting

### Site Not Loading?
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours for DNS
- Clear browser cache

### Chatbot Not Working?
- Verify API key in Vercel environment variables
- Check key is valid at https://aistudio.google.com
- Restart deployment

### HTTPS Issues?
- Vercel auto-generates certificates (5-10 min)
- Check Settings → Domains → SSL/TLS
- Force HTTPS if available

---

## 📚 For More Details

See `DEPLOYMENT_GUIDE.md` for:
- ✅ Other hosting options (Netlify, GitHub Pages)
- ✅ Advanced configuration
- ✅ Continuous deployment setup
- ✅ Complete troubleshooting guide

---

## 🚀 You're Ready to Deploy!

```bash
# Make final commit
git add .
git commit -m "Ready for production deployment"
git push origin main

# Then follow the 5 steps above
```

**Good luck! Your AI Legal Compliance Platform goes live today! 🎉**
