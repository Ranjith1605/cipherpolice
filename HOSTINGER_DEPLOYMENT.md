# 🚀 Deploy CipherPolice to Hostinger

## ✅ Perfect! You Have Everything Ready

Since your domain `cipherpolice.com` is already on Hostinger, this is straightforward.

---

## 📋 **Option 1: Hostinger Hosting (Recommended - Easiest)**

Hostinger offers multiple ways to host your React app. Here are the best options:

### **Option 1A: Hostinger Web Hosting (cPanel) - Easiest**

#### Step 1: Access Your Hostinger Control Panel
1. Go to https://hpanel.hostinger.com
2. Login with your credentials
3. Select your domain: `cipherpolice.com`
4. Go to **File Manager** or **FTP**

#### Step 2: Upload Your Build Files
1. Navigate to `public_html/` folder
2. Delete everything inside (if not first deployment)
3. Upload all files from your `dist/` folder:
   ```
   dist/index.html
   dist/assets/
   ```

#### Step 3: Configure Server Settings (Important!)
For React routing to work properly on Hostinger:

**Option A: Using .htaccess (Recommended)**

1. In File Manager, go to `public_html/`
2. Create a new file called `.htaccess`
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

**Option B: Using Node.js (If available on your plan)**

1. In hPanel, go to **Node.js** section
2. Set up Node.js application
3. Upload your project files
4. Set start command: `npm start`

#### Step 4: Test Your Site
1. Visit https://cipherpolice.com
2. Check all pages load correctly
3. Test the chat button

---

## 📋 **Option 2: FTP Upload (If you prefer FTP)**

### **Step 1: Get FTP Credentials**
1. In hPanel, go to **FTP Accounts**
2. Create new FTP account or use default
3. Note down:
   - FTP Hostname
   - Username
   - Password

### **Step 2: Connect via FTP**
Using FileZilla or similar:
1. Download FileZilla: https://filezilla-project.org
2. Connect:
   - Host: Your FTP hostname
   - Username: FTP username
   - Password: FTP password
3. Navigate to `public_html/`

### **Step 3: Upload dist/ Contents**
1. Drag and drop all files from `dist/` to `public_html/`
2. Make sure ALL files are uploaded including `.htaccess`
3. Wait for upload to complete

### **Step 4: Create .htaccess**
1. Right-click in `public_html/`
2. Create new file: `.htaccess`
3. Add the code from above
4. Save

---

## 📋 **Option 3: Hostinger Git Integration (Most Automatic)**

### **Step 1: Connect GitHub to Hostinger**
1. In hPanel, go to **Git** (if available on your plan)
2. Click **Connect Repository**
3. Authorize GitHub
4. Select: `Ranjith1605/cipherpolice`

### **Step 2: Configure Build Settings**
1. **Repository Branch:** main
2. **Build Command:** `npm run build`
3. **Output Directory:** dist
4. **Auto Deploy:** Enable

### **Step 3: Deploy**
1. Click **Deploy**
2. Wait for build and upload
3. Hostinger auto-deploys on every git push!

---

## 🔑 **Important: Environment Variables on Hostinger**

### **Step 1: Create .env.production File**
In your project root, create `.env.production`:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### **Step 2: Commit to GitHub**
```bash
git add .env.production
git commit -m "Add production environment variables"
git push origin main
```

### **Step 3: Upload to Hostinger**
If not using Git integration:
1. Upload `.env.production` to `public_html/`
2. Make sure it's NOT in the dist folder (dist doesn't need it)

**Alternative: Add API Key to .htaccess**
```apache
SetEnv VITE_GEMINI_API_KEY your_api_key_here
```

---

## 🎯 **Quickest Method - Step-by-Step (FTP)**

### **For Hostinger FTP Upload (Fastest)**

```bash
# 1. In your terminal, navigate to project
cd /workspaces/cipherpolice

# 2. Verify build exists
ls -la dist/

# 3. You now have all files ready to upload
```

**Then:**
1. Open FileZilla
2. Connect to Hostinger FTP
3. Go to `public_html/`
4. Upload all files from `dist/`
5. Create `.htaccess` with the code above
6. Visit `https://cipherpolice.com`
7. Done! ✅

---

## 📦 **Complete File List to Upload**

```
dist/
├── index.html              (Main file)
├── assets/
│   ├── index-D8_Dk_NQ.css (Styles)
│   └── index-CH7VuF58.js   (JavaScript)
└── .htaccess               (Routing config - create this!)
```

---

## ✅ **Hostinger Deployment Checklist**

- [ ] Build project locally: `npm run build`
- [ ] Access Hostinger hPanel
- [ ] Choose upload method (FTP, File Manager, or Git)
- [ ] Upload all files from `dist/` folder
- [ ] Create `.htaccess` file with routing rules
- [ ] Add environment variable (API key)
- [ ] Visit https://cipherpolice.com
- [ ] Test all features:
  - [ ] Homepage loads
  - [ ] Chat button visible
  - [ ] Navigation links work
  - [ ] Compliance guide displays
  - [ ] Scanner works

---

## 🆘 **Troubleshooting on Hostinger**

### **Problem: "Cannot GET /" or 404 errors**
**Solution:** Create `.htaccess` file with routing rules (see above)

### **Problem: Chat button not working**
**Solution:** 
1. Add API key to environment variables
2. Check browser console (F12) for errors
3. Verify API key is correct

### **Problem: Styles not loading**
**Solution:**
1. Make sure `assets/` folder is uploaded
2. Check file permissions (should be 644)
3. Clear browser cache

### **Problem: Images not showing**
**Solution:**
1. Check image paths in code
2. Verify images uploaded correctly
3. Check file permissions

---

## 📞 **Hostinger Support**

If you need help:
1. **Hostinger Support:** https://support.hostinger.com
2. **Live Chat:** Available 24/7 in hPanel
3. **Knowledge Base:** https://www.hostinger.com/help

---

## 💡 **Pro Tips for Hostinger**

✓ **Use File Manager** if you're not comfortable with FTP
✓ **Enable SSL** in hPanel (usually free with Hostinger)
✓ **Set up auto-backups** before uploading
✓ **Test on staging first** if available on your plan
✓ **Enable compression** in hPanel for better performance

---

## 📋 **Next Steps**

1. **Build is ready:** `npm run build` ✅ (already done)
2. **Choose upload method:** FTP, File Manager, or Git
3. **Upload `dist/` contents** to `public_html/`
4. **Create `.htaccess`** for routing
5. **Add API key** to environment
6. **Visit your site:** https://cipherpolice.com 🎉

---

## 🚀 **Ready? Start Here!**

**Recommended fastest path:**
```
1. Use Hostinger File Manager
2. Go to public_html/
3. Upload all files from dist/
4. Create .htaccess file
5. Done! Visit cipherpolice.com
```

**Or using FTP:**
```
1. Connect FileZilla to Hostinger
2. Drag dist/ files to public_html/
3. Create .htaccess
4. Done!
```

---

**Your domain is ready, your build is ready, let's get it live on Hostinger! 🎉**
