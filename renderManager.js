

const { BrowserWindow } = require('electron').remote


let ARwindow 


//window creation functions 
function createdARwindow() {
    ARwindow = new BrowserWindow({
        width: 800,
        height: 600,
        x: 0,
        y: 0,
        frame: false,
        fullscreen: false,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true
        }
      })

      ARwindow.loadFile("ARview.html")

      ARwindow.on("closed", () => {
        ARwindow = null
      })
  
      return true;
}


//button management 
let launchBtn = document.getElementById("launch")
launchBtn.addEventListener("click", function launch() {
    createdARwindow()
})

let endDemoBtn = document.getElementById("endDemo")
endDemoBtn.addEventListener("click", function endDemo() {
    if(ARwindow != null){
        ARwindow.close()
    }
})