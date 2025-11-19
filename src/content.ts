// Content script for Chrome Extension
// Injected into web pages to detect and report on page security
// Note: This file is only used when running as a Chrome extension

declare const chrome: any;

// Send page information to background script when page loads
if (typeof chrome !== 'undefined' && chrome.runtime) {
  window.addEventListener('load', () => {
    const pageInfo = {
      title: document.title,
      url: window.location.href,
      timestamp: new Date().toISOString(),
    };

    chrome.runtime.sendMessage({ type: 'PAGE_LOADED', data: pageInfo }).catch(() => {
      // Extension context may not be available in all scenarios
      console.log('Unable to communicate with extension');
    });
  });

  // Detect and log any external tracking scripts
  const scripts = document.querySelectorAll('script[src]');
  const trackers: string[] = [];

  scripts.forEach((script) => {
    const src = script.getAttribute('src');
    if (src && (src.includes('google-analytics') || src.includes('facebook') || src.includes('mixpanel'))) {
      trackers.push(src);
    }
  });

  if (trackers.length > 0) {
    console.log('Cipher Police: Detected tracking scripts', trackers);
  }

  // Check for security headers information in meta tags
  const securityMeta = document.querySelectorAll('meta');
  const securityInfo: Record<string, string> = {};

  securityMeta.forEach((meta) => {
    const name = meta.getAttribute('name');
    const content = meta.getAttribute('content');
    if (name && content && (name.toLowerCase().includes('security') || name.toLowerCase().includes('protection'))) {
      securityInfo[name] = content;
    }
  });

  console.log('Cipher Police: Security Information', securityInfo);
}
