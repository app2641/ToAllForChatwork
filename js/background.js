
var context = chrome.contextMenus.create({
    "title": "ToAll",
    "type": "normal",
    "contexts": ["editable"],
    "documentUrlPatterns" : ["*://*.www.chatwork.com/*"],
    "onclick": function (info, tab) {
        chrome.tabs.sendRequest(tab.id, {});
    }
});

