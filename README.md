# InjectionMV3
Chrome Extension to inject js with Manifest Version 3



## CSP solution

Create injection script
```javascript
window.testVariable = true;
```

Add script to web_accessible_resources

Link injection script into src property of content script like so
```javascript
const script = this.document.createElement('script')
script.src = chrome.runtime.getURL("injection.js")
this.document.documentElement.appendChild(script)

// clean it up afterwards
this.document.documentElement.removeChild(script)
```

To get the url of the script from the extension resources
```javascript
chrome.runtime.getURL("injection.js")
```


