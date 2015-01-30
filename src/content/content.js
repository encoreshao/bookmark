// Send a message containing the page details back to the event page
chrome.runtime.sendMessage({
  'title': document.title,
  'url': document.location.href,
  'summary': document.getSelection().toString()
});