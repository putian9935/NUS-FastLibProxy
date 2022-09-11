chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
        if(tab.url.substr(0, "https://proxylogin.nus.edu.sg/libproxy1/public/login.asp".length) == "https://proxylogin.nus.edu.sg/libproxy1/public/login.asp") {
            chrome.scripting.executeScript(
                {
                    target:{tabId : tabId},
                    files : ['1.js']
                }
            );   
        }

        if(tab.url.substr(0, "https://proxylogin.nus.edu.sg/libproxy1/public/aup.asp".length) == "https://proxylogin.nus.edu.sg/libproxy1/public/aup.asp") {
            chrome.scripting.executeScript(
                {
                    target:{tabId : tabId},
                    files : ['2.js']
                }
            );
        }
    }
);
