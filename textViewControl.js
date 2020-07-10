


const { remote, ipcRenderer } = require ('electron');
let previousLetter
ipcRenderer.on('message', (event, message) => { 
  console.log ("window 2: ", message);
  
  console.log("prev: ", previousLetter)
  //temp solution
  if(previousLetter != message){
    if(message == "Del"){
      document.getElementById("display-text").textContent=""
    }
    else{
      document.getElementById("display-text").textContent += message
    }
    
  }
  
  previousLetter = message
});



