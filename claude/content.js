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

