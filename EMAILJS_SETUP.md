# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from the consultation form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Create Email Service

1. Go to [Email Services](https://dashboard.emailjs.com/admin/integration)
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to [Email Templates](https://dashboard.emailjs.com/admin/template)
2. Click "Create New Template"
3. Use this template:

**Subject:**
```
New Consultation Request from {{from_name}}
```

**Content:**
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
This email was sent from the Y-Path website consultation form.
```

4. Set "To Email" to: `contact@y-path.com`
5. Set "From Name" to: `{{from_name}}`
6. Set "Reply To" to: `{{from_email}}`
7. Save the template and copy the **Template ID**

## Step 4: Get Public Key

1. Go to [Account > API Keys](https://dashboard.emailjs.com/admin/integration)
2. Copy your **Public Key**

## Step 5: Configure Environment Variables

Create a `.env` file in the root of your project:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Important:** Add `.env` to your `.gitignore` file to keep your keys secure!

## Step 6: Install Dependencies

Run:
```bash
npm install
```

## Step 7: Test

1. Start your development server: `npm run dev`
2. Fill out the consultation form
3. Submit and check if email is received at contact@y-path.com

## Troubleshooting

- Make sure all environment variables are set correctly
- Check EmailJS dashboard for any error logs
- Verify your email service is connected properly
- Free tier allows 200 emails/month

## Alternative: Direct Configuration

If you prefer not to use environment variables, you can directly edit `ConsultationForm.vue` and replace:
- `YOUR_PUBLIC_KEY` with your public key
- `YOUR_SERVICE_ID` with your service ID  
- `YOUR_TEMPLATE_ID` with your template ID

**Note:** This is less secure and not recommended for production.
