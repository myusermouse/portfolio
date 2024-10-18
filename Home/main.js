
let body = document.getElementById('body'),
    modeBtn = document.getElementById('toggle'),
    darkBtn = document.getElementById('dark');

  modeBtn.onclick = function(){
      body.classList.toggle('dark-mode');
      darkBtn.src= "/icons/light-mode.png";
  }
  /******* close ********/
  
  