# CipherPolice

Your Personal Super AI Police - A Chrome extension and web platform that guides you through AI era laws, data protection regulations, and digital rights. Think of us as the friendly officer always by your side explaining what's legal and what to watch out for in the digital world.

## 🎯 Mission

CipherPolice empowers users and businesses to navigate the complex landscape of:
- 🇪🇺 **GDPR** (EU Data Protection)
- 🇺🇸 **CCPA** (California Privacy)
- 🍁 **PIPEDA** (Canada Privacy)
- 🤖 **AI Regulations** (EU AI Act and emerging global standards)
- 💡 **Digital Rights** and best practices
- 🔒 **Cybersecurity Compliance** guidance

## ✨ Key Features

### 🤖 AI Chatbot ("Cipher Police")
- Integrated Gemini AI chatbot on the sidebar
- Ask questions about AI laws, regulations, and compliance
- Get instant, accurate guidance on digital rights
- Available as both web interface and Chrome extension

### 🛡️ Website Security Scanner
- Analyze any domain for security vulnerabilities
- Check SSL/TLS status and certificates
- Review security headers
- Get prioritized fixes and recommendations

### 📚 Compliance Guide
- Comprehensive coverage of global AI and data protection laws
- AI ethics and responsible development principles
- Consumer rights and business best practices
- Interactive and easy-to-understand content

### 🔐 Chrome Extension Support
- Inline access to legal guidance while browsing
- Quick security compliance checks
- Easy reporting and support requests

## Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **AI Integration**: Google Gemini API
- **Backend**: Supabase
- **Icons**: Lucide React 0.344
- **Extension**: Chrome MV3

## Project Structure

```
src/
├── components/
│   ├── ChatSidebar.tsx      # AI chatbot sidebar component
│   └── ComplianceGuide.tsx  # Legal compliance section
├── services/
│   └── geminiService.ts     # Gemini API integration
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
├── index.css                # Global styles
├── background.ts            # Chrome extension background script
├── content.ts               # Chrome extension content script
└── vite-env.d.ts           # Vite environment types
public/
├── manifest.json            # Chrome extension manifest
└── ChatGPT Image...         # Extension icons
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Chrome browser (for extension testing)
- Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Ranjith1605/cipherpolice.git
cd cipherpolice
npm install
```

### 2. Configure Gemini API

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Gemini API key:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from: [Google AI Studio](https://aistudio.google.com/app/apikey)

### 3. Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port displayed in your terminal).

### 4. Testing the Chrome Extension

1. Build the project:
```bash
npm run build
```

2. Open Chrome and go to `chrome://extensions/`

3. Enable "Developer mode" (top right)

4. Click "Load unpacked" and select the `dist` folder from your project

5. The extension will appear in your Chrome toolbar

## Available Commands

### Development
```bash
npm run dev          # Start dev server with HMR
npm run build        # Create optimized production build
npm run preview      # Preview production build locally
npm run typecheck    # Run TypeScript type checking
npm run lint         # Run ESLint code quality checks
```

## Configuration Files

- `vite.config.ts` - Vite build configuration with React plugin
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS setup for Tailwind
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules and configuration
- `public/manifest.json` - Chrome extension manifest (MV3)

## Using the AI Chatbot

Click the gold chat button (bottom right) to open Cipher Police. Ask questions like:

- "What is GDPR and how does it affect me?"
- "Explain the CCPA in simple terms"
- "What are my digital rights in the EU?"
- "How should companies handle user data legally?"
- "What are the key principles of AI ethics?"

## Chrome Extension Permissions

The extension requests the following permissions:
- `activeTab` - Access to current tab information
- `scripting` - Inject scripts for security analysis
- `storage` - Store user preferences and chat history
- `https://*/*` and `http://*/*` - Analyze all websites

## Features Roadmap

- [ ] Direct integration with legal databases
- [ ] Custom compliance checklists
- [ ] Team collaboration features
- [ ] Automated compliance reporting
- [ ] Multi-language support
- [ ] Advanced security scanning
- [ ] Integration with popular web frameworks

## Support

For issues, questions, or feature requests, please open an issue on GitHub or use the extension's built-in support feature.

## Privacy & Security

- Your chat history with Cipher Police is stored locally
- Gemini API calls are encrypted
- No user data is sold or shared
- We comply with GDPR, CCPA, and other privacy laws

## Contributing

We welcome contributions! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and maintained by Ranjith1605.

## Disclaimer

CipherPolice provides educational guidance on data protection and AI regulations. Always consult with legal professionals for specific legal advice. We strive for accuracy but cannot guarantee completeness or suitability for specific situations.

---

**Made with ⚖️ and 🤖 by Ranjith1605**

*Your Personal Super AI Police - Staying compliant, one question at a time.*

