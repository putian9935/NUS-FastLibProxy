chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
        if(tab.url.substr(0, "https://proxylogin.nus.edu.sg/libproxy1/public/login.asp".length) == "https://proxylogin.nus.edu.sg/libproxy1/public/login.asp") {
            // Change correspondingly if you're in other domains
            chrome.tabs.executeScript(tabId, {code : 'document.querySelector("select").value = "NUSSTU"; '});
            // Change USERNAME to your studentID, e1234567, e.g.
            chrome.tabs.executeScript(tabId, {code : 'document.forms[1].user.value ="USERNAME";'});
            // Change PASSWORD to your password yo login
            chrome.tabs.executeScript(tabId, {code : 'document.forms[1].pass.value ="PASSWORD";'});
            chrome.tabs.executeScript(tabId, {code : 'document.forms[1].submit();'});        
        }

        if(tab.url.substr(0, "https://proxylogin.nus.edu.sg/libproxy1/public/aup.asp".length) == "https://proxylogin.nus.edu.sg/libproxy1/public/aup.asp") {
            chrome.tabs.executeScript(tabId, {code : 'document.getElementsByTagName("input")[1].click();'});
        }
    }
  );
