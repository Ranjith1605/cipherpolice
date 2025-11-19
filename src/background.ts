// Background script for Chrome Extension
// Handles communication between popup and content scripts
// Note: This file is only used when running as a Chrome extension

declare const chrome: any;

if (typeof chrome !== 'undefined' && chrome.runtime) {
  chrome.runtime.onMessage.addListener(
    (
      request: { type: string; title?: string; url?: string },
      _sender: any,
      sendResponse: (response: any) => void
    ) => {
      if (request.type === 'GET_PAGE_INFO') {
        const pageInfo = {
          title: request.title,
          url: request.url,
          timestamp: new Date().toISOString(),
        };
        sendResponse({ success: true, data: pageInfo });
      }
    }
  );

  // Initialize extension
  chrome.runtime.onInstalled.addListener(() => {
    console.log('Cipher Police extension installed!');
    chrome.storage.local.set({
      installDate: new Date().toISOString(),
      chatHistory: [],
    });
  });
}
