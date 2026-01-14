document.addEventListener("DOMContentLoaded", () => {
  const autofillBtn = document.getElementById("autofillBtn");

  autofillBtn.addEventListener("click", () => {
    console.log("Popup button clicked");

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "AUTOFILL_FORM",
      });
    });
  });
});
