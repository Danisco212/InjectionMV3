
const script = this.document.createElement('script')
script.innerHTML = "window.testVariable = true"
this.document.documentElement.appendChild(script)

// clean it up afterwards
this.document.documentElement.removeChild(script)

