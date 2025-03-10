// Listen for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("📌 Extension installed or updated.");
});

// Listen for when a new window is created
chrome.windows.onCreated.addListener(() => {
    console.log("🆕 New window created.");
});

// Listen for when a window is removed (closed)
chrome.windows.onRemoved.addListener(async (windowId) => {
    console.log(`❌ Window ${windowId} closed.`);

    try {
        // Check if all Chrome windows are closed
        const windows = await chrome.windows.getAll();
        if (windows.length === 0) {
            // Open the Chrome extension's main page when all windows are closed
            const extensionPageUrl = chrome.runtime.getURL("index.html"); // Ensure this file exists in your `dist` folder
            await chrome.tabs.create({ url: extensionPageUrl });
            console.log(`🖥️ All windows closed, reopening: ${extensionPageUrl}`);
        }
    } catch (error) {
        console.error("❗ Error checking windows:", error);
    }
});

// Listen for when the extension icon is clicked
// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.action.onClicked.addListener(async (_tab) => {
    console.log("🖱️ Extension icon clicked.");
    
    try {
        // Open the extension's page instead of Chrome bookmarks
        const extensionPageUrl = chrome.runtime.getURL("index.html");
        await chrome.tabs.create({ url: extensionPageUrl });
        console.log(`📂 Opening extension page: ${extensionPageUrl}`);
    } catch (error) {
        console.error("❗ Error opening extension page:", error);
    }
});
