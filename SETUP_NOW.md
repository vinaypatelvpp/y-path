# ⚡ Quick Setup - Get Email Working in 5 Minutes

## The Error You're Seeing
```
EmailJS not configured. Please set up EmailJS service.
```

This means EmailJS package is installed ✅ but needs configuration.

## Option 1: Automated Setup (Easiest)

Run this command in your terminal:
```bash
./setup-emailjs.sh
```

It will ask for your EmailJS credentials and create the `.env` file automatically.

## Option 2: Manual Setup (Step by Step)

### Step 1: Get EmailJS Credentials (3 minutes)

1. **Sign up/Login**: https://www.emailjs.com/
2. **Add Email Service**: 
   - Go to https://dashboard.emailjs.com/admin/integration
   - Click "Add New Service" → Choose Gmail → Connect
   - **Copy Service ID** (looks like: `service_xxxxx`)

3. **Create Email Template**:
   - Go to https://dashboard.emailjs.com/admin/template
   - Click "Create New Template"
   - **To Email**: `contact@y-path.com`
   - **Subject**: `New Consultation Request from {{from_name}}`
   - **Content**: 
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     Country: {{country}}
     Visa Type: {{visa_type}}
     Consultation Type: {{consultation_type}}
     
     Message: {{message}}
     ```
   - **Copy Template ID** (looks like: `template_xxxxx`)

4. **Get Public Key**:
   - Go to https://dashboard.emailjs.com/admin/integration
   - Scroll to "API Keys"
   - **Copy Public Key**

### Step 2: Create .env File (30 seconds)

In your project root, create `.env` file:

```bash
touch .env
```

Add these lines (replace with YOUR values):
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

### Step 3: Restart Dev Server (10 seconds)

```bash
# Stop current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Done!

Your form will now send emails to `contact@y-path.com` when submitted.

## Test It

1. Fill out the consultation form on your website
2. Submit it
3. Check `contact@y-path.com` inbox (check spam too)

## Need Help?

See `QUICK_EMAILJS_SETUP.md` for detailed instructions with screenshots.
