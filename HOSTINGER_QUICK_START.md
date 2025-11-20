# 🚀 Deploy to Hostinger - Quick Action Guide

## ✅ Your Build is Ready!

**Status:** Production build complete with 5 files ready to upload

```
dist/
├── index.html
├── manifest.json
├── assets/
│   ├── index-CH7VuF58.js (196 KB)
│   └── index-D8_Dk_NQ.css (21 KB)
└── ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png
```

---

## 🎯 **3 Steps to Deploy on Hostinger**

### **STEP 1: Login to Hostinger**
- Go to: https://hpanel.hostinger.com
- Login with your email/password
- Select domain: `cipherpolice.com`

### **STEP 2: Upload Your Files**

**Choose ONE method:**

#### **Method A: File Manager (Easiest - No Software Needed)**
1. Click **File Manager**
2. Navigate to `public_html/`
3. Delete everything inside (if first time)
4. Upload all files from `dist/` folder
5. Done!

#### **Method B: FTP (Using FileZilla)**
1. Download FileZilla: https://filezilla-project.org/download.php
2. Get FTP credentials from hPanel → **FTP Accounts**
3. Connect in FileZilla:
   ```
   Host: Your FTP hostname
   Username: Your FTP username  
   Password: Your FTP password
   ```
4. Go to `public_html/` folder
5. Drag all files from `dist/` into it
6. Wait for upload to complete

#### **Method C: Git Integration (Automatic Updates)**
1. In hPanel, click **Git**
2. Click **Connect Repository**
3. Select: `Ranjith1605/cipherpolice`
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**

### **STEP 3: Create .htaccess File (Important!)**

1. In File Manager, right-click in `public_html/`
2. Create new file: `.htaccess`
3. Add this code:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

4. Save the file

---

## 🔑 **Add Your Gemini API Key**

### **On Hostinger:**

1. In File Manager, create file: `.env`
2. Add:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
3. Save

**Or get API key first:**
- Go to: https://aistudio.google.com/app/apikey
- Click "Create API Key"
- Copy the key
- Paste into `.env` file

---

## ✅ **Verify Your Deployment**

After uploading, visit: **https://cipherpolice.com**

Check:
- [ ] Homepage loads
- [ ] "Cipher" logo visible
- [ ] Chat button appears (bottom right)
- [ ] Navigation menu works
- [ ] Compliance guide visible
- [ ] Scanner section works
- [ ] No 404 errors

---

## 🆘 **If Something Goes Wrong**

### **Issue: Page shows "Cannot GET /"**
- **Solution:** Make sure `.htaccess` file was created and uploaded

### **Issue: Chat button doesn't work**
- **Solution:** 
  - Check API key is in `.env`
  - Open browser console (F12) to see errors
  - Verify API key is valid at https://aistudio.google.com

### **Issue: Styles look broken**
- **Solution:**
  - Check `assets/` folder is uploaded
  - Clear browser cache (Ctrl+Shift+Delete)
  - Hard refresh (Ctrl+F5)

### **Issue: Images not showing**
- **Solution:**
  - Check `ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png` is uploaded
  - Verify filename is correct in code

---

## 📞 **Need Help?**

- **Hostinger Support:** https://support.hostinger.com
- **Live Chat:** Available in hPanel 24/7
- **File Manager Help:** In File Manager, click Help icon

---

## 📁 **What to Upload**

From your computer, upload everything from `dist/` folder:

```
✓ index.html
✓ manifest.json
✓ assets/ (folder with CSS and JS)
✓ ChatGPT Image Nov 19, 2025 at 12_33_15 AM.png
```

**Plus create:**
```
✓ .htaccess (create on Hostinger)
✓ .env (optional, for API key)
```

---

## 🎉 **That's It!**

Your CipherPolice platform will be LIVE at:

### 🌐 **https://cipherpolice.com**

All users can now:
- ✅ Ask the AI Chatbot legal questions
- ✅ Learn about GDPR, CCPA, AI Act
- ✅ Scan websites for security
- ✅ Access compliance guides
- ✅ Get instant legal guidance

---

## 📋 **Your Hostinger Deployment Checklist**

- [ ] Login to Hostinger hPanel
- [ ] Choose upload method (File Manager, FTP, or Git)
- [ ] Upload all files from `dist/` to `public_html/`
- [ ] Create `.htaccess` file with routing rules
- [ ] Create `.env` file with API key (optional)
- [ ] Visit https://cipherpolice.com
- [ ] Test all features work
- [ ] Celebrate! 🎉

---

**Ready to go live? Start with Step 1 above! 🚀**
