// manifest.json
{
  "manifest_version": 3,
  "name": "Archive Link Opener",
  "version": "1.0",
  "description": "Opens links with archive.is prepended and query parameters removed",
  "permissions": ["activeTab", "contextMenus"],
  "action": {
    "default_icon": {
      "16": "images/icon16.png",
      "48": "images/icon48.png",
      "128": "images/icon128.png"
    },
    "default_title": "Archive Link Opener"
  },
  "icons": {
    "16": "images/icon16.png",
    "48": "images/icon48.png",
    "128": "images/icon128.png"
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "background": {
    "service_worker": "background.js"
  }
}

// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openInArchive",
    title: "Open in Archive.is",
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openInArchive") {
    const url = info.linkUrl;
    const modifiedUrl = modifyUrl(url);
    chrome.tabs.create({ url: modifiedUrl });
  }
});

function modifyUrl(url) {
  // Remove query parameters (anything after the first '?')
  const baseUrl = url.split('?')[0];
  // Prepend with archive.is:/
  return "archive.is:/" + baseUrl;
}

// content.js
document.addEventListener('click', function(event) {
  // Check if the clicked element is a link or has a link parent
  const link = event.target.closest('a');
  
  if (link && event.ctrlKey) {
    // Only modify behavior when Ctrl key is pressed
    event.preventDefault();
    
    const url = link.href;
    // Remove query parameters (anything after the first '?')
    const baseUrl = url.split('?')[0];
    // Prepend with archive.is:/
    const modifiedUrl = "archive.is:/" + baseUrl;
    
    window.open(modifiedUrl, '_blank');
  }
});
