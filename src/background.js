document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete") {
      chrome.tabs.executeScript(tabId, { file: "content.js" });
    }
  });
});
