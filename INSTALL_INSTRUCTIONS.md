# Fix: EmailJS Import Error

## The Problem
You're seeing this error:
```
Failed to resolve import "@emailjs/browser" from "src/components/ConsultationForm.vue"
```

## The Solution

The package is listed in `package.json` but needs to be installed. Run this command in your terminal:

```bash
cd /Users/vinaypatel/y-path
npm install
```

This will install all dependencies including `@emailjs/browser`.

## After Installation

1. **Restart your dev server** if it's running:
   - Stop it (Ctrl+C)
   - Run `npm run dev` again

2. **Set up EmailJS** (optional, for email functionality):
   - Follow the guide in `EMAILJS_SETUP.md`
   - Create a `.env` file with your EmailJS credentials

## Quick Test

After running `npm install`, the import error should be gone. The form will work, but email sending will only work after you configure EmailJS.

## If npm install fails

If you get permission errors, try:
```bash
sudo npm install
```

Or fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
npm install
```
