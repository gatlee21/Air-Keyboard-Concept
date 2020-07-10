

const { BrowserWindow } = require('electron').remote
const { remote, ipcRenderer } = require ('electron');


let ARwindow
let TextWindow


//window creation functions 
function createARwindow(x,y, fullscreen) {
    ARwindow = new BrowserWindow({
        width: 800,
        height: 600,
        x: x,
        y: y,
        frame: false,
        fullscreen: fullscreen,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true
        }
      })

      ARwindow.loadFile("ARview.html")

      ARwindow.webContents.openDevTools({ mode: "detach" })

      ARwindow.on("closed", () => {
        ARwindow = null
      })
  
      return true;
}

function createTextWindow() {
    TextWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        x: 100,
        y: 0,
        frame: true,
        fullscreen: false,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true
        }
      })

      TextWindow.loadFile("textView.html")

      TextWindow.webContents.openDevTools({ mode: "detach" })

      TextWindow.on("closed", () => {
        TextWindow = null
      })
  
      return true;
}



//button management 
let launchBtn = document.getElementById("launch")
launchBtn.addEventListener("click", function launch() {
    let x = document.getElementById("x-pos").value
    let y = document.getElementById("y-pos").value
    let fullscreen = document.getElementById("fullscreen").checked
    createARwindow(parseInt(x),parseInt(y), fullscreen)
    createTextWindow()
    remote.getGlobal("windows").ARwindow = ARwindow 
    remote.getGlobal("windows").TextWindow = TextWindow
})

let endDemoBtn = document.getElementById("endDemo")
endDemoBtn.addEventListener("click", function endDemo() {
    if(ARwindow != null){
        ARwindow.close()
    }

    if(TextWindow != null){
        TextWindow.close()
    }
})