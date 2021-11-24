chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("index.html");
  let tab = await chrome.tabs.create({ url });
  console.log(`Created tab ${tab.id}`);
});

chrome.tabs.onCreated.addListener(async (tab) => {
  console.info("create");
  console.log(tab.pendingUrl);
  if (tab.status !== "complete") {
    console.info("create");
    console.log(tab);
    if (["chrome://newtab/", "chrome://new-tab-page/", ""].includes(tab.url)) {
      console.log("I am new tab");
      //   let url = chrome.runtime.getURL("index.html");
      let tabL = await chrome.tabs.update({ url: "index.html" });

      console.log("create new kitty");
      //   console.log(tabL);
      //   chrome.tabs.create({ url: "" });
    }
    console.log(`Created tab`);
  }
});

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  console.info("update complete!\n setting new kitty");
  console.log(tab);
  if (["chrome://newtab/", "chrome://new-tab-page/", ""].includes(tab?.url)) {
    console.log("I am new tab");
    await chrome.tabs.update({ url: "index.html" });
    console.log("created new kitty");
  }
});
