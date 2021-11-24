chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("index.html");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});

chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.status !== "complete" && tab.pendingUrl === "chrome://newtab/") {
    console.log(tab.pendingUrl);
    console.log(tab);
    let tabL = await chrome.tabs.update(tab.id, { url: "index.html" });
    console.log("create new kitty");
  }
});

// chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
// console.info("update complete!\n setting new kitty");
// console.log(tab);
// if (["chrome://newtab/", "chrome://new-tab-page/", ""].includes(tab?.url)) {
//   console.log("I am new tab");
//   await chrome.tabs.update({ url: "index.html" });
//   console.log("created new kitty");
// }
// });
