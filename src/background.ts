// Ensure the service worker is properly loaded
console.log("Service Worker Loaded!");

// Listen for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: 'chrome://bookmarks/' });
});

// Listen for when the extension icon is clicked
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'chrome://bookmarks/' });
});
