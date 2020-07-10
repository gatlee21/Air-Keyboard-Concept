


const { remote, ipcRenderer } = require ('electron');

ipcRenderer.on('message', (event, message) => { 
  console.log ("window 2: ", message);
  let previousLetter
  console.log(previousLetter)
  //temp solution
  if(previousLetter != message){
    document.getElementById("display-text").textContent += message
  }
  
  previousLetter = message
});



