#!/bin/bash
# Quick fix script for EmailJS installation

echo "🔧 Fixing EmailJS Import Error..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing all dependencies..."
    npm install
else
    echo "📦 Installing @emailjs/browser..."
    npm install @emailjs/browser
fi

echo ""
echo "✅ Installation complete!"
echo ""
echo "🔄 Please restart your dev server:"
echo "   1. Stop the current server (Ctrl+C or Cmd+C)"
echo "   2. Run: npm run dev"
echo ""
echo "📧 Next steps:"
echo "   - Set up EmailJS: See EMAILJS_SETUP.md"
echo "   - Create .env file with your EmailJS credentials"
