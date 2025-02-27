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

