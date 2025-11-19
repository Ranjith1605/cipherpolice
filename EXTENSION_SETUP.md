# CipherPolice Chrome Extension Setup Guide

## Overview

CipherPolice is a Chrome extension that acts as your "Personal Super AI Police" - helping you understand and comply with AI era laws, data protection regulations, and digital rights while browsing the web.

## Features

1. **AI Chatbot Sidebar** - Ask legal compliance questions anytime
2. **Security Scanner** - Analyze websites for security vulnerabilities
3. **Compliance Guide** - Learn about GDPR, CCPA, AI Act, and more
4. **Real-time Guidance** - Get instant answers about digital rights

## Installation Instructions

### Option 1: Install from Chrome Web Store (Coming Soon)
- Open Chrome
- Go to Chrome Web Store
- Search for "Cipher Police"
- Click "Add to Chrome"

### Option 2: Install from Source (Developer Mode)

#### Step 1: Build the Project
```bash
cd cipherpolice
npm install
npm run build
```

#### Step 2: Load in Chrome
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **"Developer mode"** (toggle in top right)
3. Click **"Load unpacked"**
4. Select the `dist` folder from the cipherpolice project
5. The extension will appear in your Chrome toolbar

#### Step 3: Configure Gemini API
1. Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a `.env.local` file in the project root:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. Rebuild the project: `npm run build`
4. Reload the extension in Chrome (click the reload icon on `chrome://extensions/`)

## Usage

### Open the Extension
- Click the Cipher Police icon in your Chrome toolbar
- Or use keyboard shortcut: `Ctrl+Shift+Y` (to be configured)

### Use the AI Chatbot
1. Click the gold chat button (bottom right of any page)
2. Ask Cipher Police about:
   - Legal compliance requirements
   - Data protection regulations
   - AI ethics and responsible practices
   - Digital rights and privacy
   - Internet laws in different countries

### Scan Website Security
1. Navigate to the Cipher Police website (http://localhost:5173)
2. Use the "Instant Website Security Scan" feature
3. Enter any domain name
4. Get instant analysis of security vulnerabilities

### Learn About Compliance
- Visit the "Global AI & Data Protection Laws" section
- Explore regulations for GDPR, CCPA, PIPEDA, and AI Act
- Review AI ethics principles
- Understand consumer rights and best practices

## Permissions Explanation

CipherPolice requests these permissions for:
- **activeTab** - Access current page info for context-aware guidance
- **scripting** - Inject security analysis scripts
- **storage** - Save your chat history and preferences locally
- **https://*/*, http://*/*** - Analyze all websites for security

**Privacy Note**: We don't store your browsing history or sell any data. Everything is processed locally.

## Troubleshooting

### Extension Not Loading
1. Clear Chrome cache: `Settings > Privacy > Clear Browsing Data`
2. Go to `chrome://extensions/`
3. Click the reload icon on CipherPolice
4. Refresh any open tabs

### Gemini API Not Working
1. Verify your API key is correct in `.env.local`
2. Make sure your API key has the Generative AI API enabled
3. Check you haven't exceeded your API quota
4. Restart Chrome completely

### Chat Not Responding
1. Check your internet connection
2. Verify the Gemini API key in settings
3. Try refreshing the page
4. Check Chrome DevTools for errors (F12)

## Settings & Privacy

### Access Settings
1. Right-click the Cipher Police icon
2. Select "Manage extension"
3. Adjust permissions as needed

### Clear Data
To clear your chat history:
1. Open the extension
2. Click the settings icon (gear)
3. Select "Clear chat history"
4. Confirm

## Tips & Best Practices

1. **Ask Specific Questions** - The more specific, the better the answers
2. **Save Important Info** - Bookmark valuable compliance information
3. **Stay Updated** - Check back regularly for new regulations and guidelines
4. **Share Knowledge** - Help others in your organization understand compliance

## Example Questions to Ask

- "What data can I collect from EU users under GDPR?"
- "How do I ensure my AI model is not biased?"
- "What is the California Consumer Privacy Act (CCPA)?"
- "Explain the EU AI Act in simple terms"
- "What are my rights regarding personal data online?"
- "How should I handle data breaches?"
- "What is consent and when is it required?"

## Support & Feedback

Have questions or feedback?
- Email: support@cipherpolice.ai (Coming soon)
- GitHub Issues: [Report a bug](https://github.com/Ranjith1605/cipherpolice/issues)
- Feature Requests: [Suggest an idea](https://github.com/Ranjith1605/cipherpolice/discussions)

## Version History

### v1.0.0 (Current)
- Initial release
- AI Chatbot with Gemini integration
- Security scanner
- Compliance guide
- Chrome MV3 extension support

## Legal Disclaimer

CipherPolice provides educational information about data protection and AI regulations. **Always consult with legal professionals for specific legal advice.** We strive for accuracy but cannot guarantee completeness or suitability for your specific situation.

## Privacy Policy

- No data is collected about your browsing
- Chat history is stored locally on your device only
- Gemini API calls are encrypted
- We do not share or sell any personal information

---

**Made by Ranjith1605 | Cipher Police v1.0.0**

*Your Personal Super AI Police - Making compliance simple, one question at a time.*
