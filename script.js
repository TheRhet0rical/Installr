let i = 0;

let currentApps = [
  'https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86',
  'https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe'
]

function init(){
  document.getElementById('appList').innerHTML = currentApps;
  document.getElementById('numberOfApps').innerHTML = `Current Loaded Applications (${currentApps.length}):`
}

function addInstall(){
  let currentURL = document.getElementById('appURL').value;
  if (currentURL == '' || currentURL == null){
    alert('URL Textbox Is Empty.')
  } else {
    currentApps.push(currentURL);
    document.getElementById('appList').innerHTML = currentApps;
    document.getElementById('numberOfApps').innerHTML = `Current Loaded Applications (${currentApps.length}):`
  }
}

function runInstaller(){

  for(i = 0; i < currentApps.length; i++){
    window.open(currentApps[i]);
  }
  
}

function clearInstalls(){
  currentApps = [];

  document.getElementById('appList').innerHTML = currentApps;
  document.getElementById('numberOfApps').innerHTML = `Current Loaded Applications (${currentApps.length}):`
}

init();