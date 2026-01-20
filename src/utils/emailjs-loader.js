/**
 * EmailJS Loader Utility
 * Handles dynamic loading of EmailJS package
 * This prevents build errors when package is not installed
 * 
 * IMPORTANT: Run 'npm install' to install @emailjs/browser package
 */

let emailjsCache = null;
let loadPromise = null;
let loadAttempted = false;

export async function loadEmailJS() {
  // Return cached instance if already loaded
  if (emailjsCache) {
    return emailjsCache;
  }

  // Return existing promise if already loading
  if (loadPromise) {
    return loadPromise;
  }

  // Mark that we've attempted to load
  loadAttempted = true;

  // Create loading promise
  loadPromise = (async () => {
    try {
      // Method 1: Try npm package first (if installed)
      try {
        // Use eval to prevent Vite from analyzing this import at build time
        const importPath = '@emailjs/browser';
        const dynamicImport = new Function('path', 'return import(path)');
        const module = await dynamicImport(importPath);
        emailjsCache = module.default || module;
        return emailjsCache;
      } catch (npmError) {
        // Method 2: Try CDN fallback
        console.warn('NPM package not found, trying CDN fallback...');
        if (typeof window !== 'undefined') {
          // Load from CDN
          return new Promise((resolve, reject) => {
            if (window.emailjs) {
              emailjsCache = window.emailjs;
              resolve(emailjsCache);
              return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
            script.onload = () => {
              emailjsCache = window.emailjs;
              resolve(emailjsCache);
            };
            script.onerror = () => {
              console.error('Failed to load EmailJS from CDN');
              emailjsCache = null;
              resolve(null);
            };
            document.head.appendChild(script);
          });
        }
        throw npmError;
      }
    } catch (error) {
      console.error('EmailJS loading failed:', error.message);
      console.warn('To fix: Run "npm install @emailjs/browser" in your terminal');
      emailjsCache = null;
      return null;
    }
  })();

  return loadPromise;
}

export function getEmailJS() {
  return emailjsCache;
}

export function isEmailJSAvailable() {
  return emailjsCache !== null;
}
