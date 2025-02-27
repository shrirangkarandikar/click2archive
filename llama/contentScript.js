function openLinkInArchive(url) {
  const newUrl = url.substring(0, url.indexOf('?')) +
'https://archive.is:/' + url.substring(url.indexOf('?') + 1);
  window.open(newUrl, '_blank');
}

// Listen for clicks on links and execute the link-opening logic
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && event.target.href) {
    openLinkInArchive(event.target.href);
  }
});

// Listen for the custom command
chrome.commands.onCommand.addListener((command, commandDetails) => {
  console.log("in ContentScript!")
  if (command === "open-in-archive") {
    const selectedText = window.getSelection().toString();
    console.log("selected text is ", selectedText)
    if (selectedText) {
      openLinkInArchive(selectedText);
    } else {
      // Get the URL from the current page
      const currentUrl = chrome.tabs.url;
      console.log("current URL is ", currentURL)
      if (currentUrl) {
        openLinkInArchive(currentUrl);
      }
    }
  }
});
