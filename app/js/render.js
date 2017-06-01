//Ipc = Inter Process Comunication, aquin eu consigo comunicar com o precesso principal que está em main.js
// O precesso IPC se comunica com eventos
//Processo Render
const {ipcRenderer} = require('electron')

let aboutLink = document.querySelector('#about');

aboutLink.addEventListener('click', () => {
  ipcRenderer.send('open-aboutWindow');
});