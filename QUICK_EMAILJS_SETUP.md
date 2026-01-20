# Quick EmailJS Setup (5 Minutes)

## Step 1: Create Free EmailJS Account (2 min)

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free account - 200 emails/month)
3. Verify your email

## Step 2: Add Email Service (1 min)

1. Go to https://dashboard.emailjs.com/admin/integration
2. Click "Add New Service"
3. Choose **Gmail** (or your email provider)
4. Click "Connect Account" and authorize
5. **Copy the Service ID** (looks like: `service_xxxxx`)

## Step 3: Create Email Template (1 min)

1. Go to https://dashboard.emailjs.com/admin/template
2. Click "Create New Template"
3. **Template Name**: `consultation_form`
4. **To Email**: `contact@y-path.com`
5. **From Name**: `{{from_name}}`
6. **Reply To**: `{{from_email}}`
7. **Subject**: `New Consultation Request from {{from_name}}`

**Template Content:**
```
New Consultation Request

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Country of Interest: {{country}}
Visa Type: {{visa_type}}
Consultation Type: {{consultation_type}}

Additional Information:
{{message}}

---
Sent from Y-Path website consultation form.
```

8. Click "Save"
9. **Copy the Template ID** (looks like: `template_xxxxx`)

## Step 4: Get Public Key (30 sec)

1. Go to https://dashboard.emailjs.com/admin/integration
2. Scroll to "API Keys"
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxx`)

## Step 5: Configure Your App (30 sec)

1. Create `.env` file in project root:
```bash
touch .env
```

2. Add these lines (replace with YOUR values):
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. **Restart your dev server**:
   - Stop it (Ctrl+C)
   - Run: `npm run dev`

## Done! ✅

Your form will now send emails to `contact@y-path.com` when submitted.

## Test It

1. Fill out the consultation form
2. Submit it
3. Check `contact@y-path.com` inbox

## Troubleshooting

- **Email not received?** Check spam folder
- **Still getting error?** Make sure you restarted the dev server after creating `.env`
- **Wrong values?** Double-check you copied the IDs correctly (no extra spaces)
