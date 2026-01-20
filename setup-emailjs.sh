#!/bin/bash

echo "📧 EmailJS Quick Setup"
echo "======================"
echo ""

# Check if .env exists
if [ -f ".env" ]; then
    echo "⚠️  .env file already exists!"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 1
    fi
fi

echo ""
echo "Please provide your EmailJS credentials:"
echo "(You can find these at https://dashboard.emailjs.com/admin)"
echo ""

read -p "Public Key: " PUBLIC_KEY
read -p "Service ID: " SERVICE_ID
read -p "Template ID: " TEMPLATE_ID

# Create .env file
cat > .env << EOF
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=$PUBLIC_KEY
VITE_EMAILJS_SERVICE_ID=$SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID=$TEMPLATE_ID
EOF

echo ""
echo "✅ .env file created successfully!"
echo ""
echo "🔄 Please restart your dev server:"
echo "   1. Stop the current server (Ctrl+C or Cmd+C)"
echo "   2. Run: npm run dev"
echo ""
echo "📖 For detailed setup instructions, see: QUICK_EMAILJS_SETUP.md"
