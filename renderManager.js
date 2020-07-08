

const { BrowserWindow } = require('electron').remote


let ARwindow 
let ElevatorWindow

//window creation functions 
function createARwindow() {
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

      ARwindow.webContents.openDevTools({ mode: "detach" })

      ARwindow.on("closed", () => {
        ARwindow = null
      })
  
      return true;
}

function createElevatorWindow() {
    ElevatorWindow = new BrowserWindow({
        width: 600,
        height: 800,
        x: 100,
        y: 0,
        frame: false,
        fullscreen: false,
        autoHideMenuBar: true,
        webPreferences: {
          nodeIntegration: true
        }
      })

      ElevatorWindow.loadFile("elevatorView.html")

      ElevatorWindow.on("closed", () => {
        ElevatorWindow = null
      })
  
      return true;
}



//button management 
let launchBtn = document.getElementById("launch")
launchBtn.addEventListener("click", function launch() {
    createARwindow()
    createElevatorWindow()
})

let endDemoBtn = document.getElementById("endDemo")
endDemoBtn.addEventListener("click", function endDemo() {
    if(ARwindow != null){
        ARwindow.close()
    }

    if(ElevatorWindow != null){
        ElevatorWindow.close()
    }
})