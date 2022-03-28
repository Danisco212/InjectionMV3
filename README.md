# InjectionMV3
Chrome Extension to inject JS into the main page context with 
Manifest Version 3

In MV3, it's no longer possible to ... TODO

## CSP solution

Create injection script:
```javascript
// Should be accessible in the main page context
// This is not normally the case with content scripts
window.testVariable = true;
```

Add script to `web_accessible_resources` section of manifest.json

Link injection script into src property of script like so:
```javascript
const script = this.document.createElement('script')
script.src = chrome.runtime.getURL("injection.js")
this.document.documentElement.appendChild(script)

// clean it up afterwards
this.document.documentElement.removeChild(script)
```

To get the url of the script from the extension resources:
```javascript
chrome.runtime.getURL("injection.js")
```


