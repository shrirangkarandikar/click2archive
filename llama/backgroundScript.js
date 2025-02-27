console.log("origin BS")
chrome.commands.onCommand.addListener((command, commandDetails) => {
  if (command === "open-in-archive") {
    console.log("gotcha!")
    chrome.tabs.executeScript({
      code: `
        const selectedText = window.getSelection().toString();
        if (selectedText) {
          openLinkInArchive(selectedText);
        } else {
          const currentUrl = location.href;
          if (currentUrl) {
            openLinkInArchive(currentUrl);
          }
        }
      `,
      runAt: "document_end"
    });
  }
});
