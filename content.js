console.log("Content script loaded");

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "AUTOFILL_FORM") {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      const placeholder = (input.placeholder || "").trim().toLowerCase();
      if (placeholder.includes("name")) {
        input.value = "Pratiksha Ranade";
      } else if (placeholder.includes("email") || input.type === "email") {
        input.value = "pratiksha@gmail.com";
      } else if (
        placeholder.includes("phone") ||
        placeholder.includes("mobile") ||
        input.type === "tel"
      ) {
        input.value = "9999999999";
      } else if (placeholder.includes("skills")) {
        input.value = "HTML, CSS, JavaScript, React";
      }
    });

    console.log("✅ Autofilled form fields");
  }
});
