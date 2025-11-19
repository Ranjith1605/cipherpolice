#!/bin/bash

# CipherPolice Quick Start Script
# Run this to set up the project and start development

echo "🔐 CipherPolice - Quick Setup"
echo "=============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🔑 Setting up environment..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found. Creating from template..."
    cp .env.example .env.local
    echo ""
    echo "📝 Please edit .env.local and add your Gemini API key:"
    echo "   Get your key from: https://aistudio.google.com/app/apikey"
    echo ""
    read -p "Press enter after adding your API key..."
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "🚀 Starting development server..."
echo ""
echo "The website will be available at: http://localhost:5173"
echo ""
echo "To load as Chrome extension:"
echo "  1. Run: npm run build"
echo "  2. Go to: chrome://extensions/"
echo "  3. Enable 'Developer mode'"
echo "  4. Click 'Load unpacked' and select the 'dist' folder"
echo ""

npm run dev
