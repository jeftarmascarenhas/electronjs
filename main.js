//sub-modulo serve para controlar o clico de vida da aplicação
//Este main js é o precesso principal
// IpcMain é responsável por escutar o IPCRenderer
const {app, BrowserWindow, ipcMain} = require('electron');

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width:600,
    height:400
  });

  mainWindow.loadURL(`file://${__dirname}/app/src/index.html`);

});

app.on('window-all-closed', () => {
  app.quit();
  console.log('closed');
});

let aboutWindow = null;

ipcMain.on('open-aboutWindow', ()=> {
  if(aboutWindow === null) {
    aboutWindow = new BrowserWindow({
      width:300,
      height:200
    });

    aboutWindow.on('closed', () => {
      aboutWindow = null;
    });
  }
  aboutWindow.loadURL(`file://${__dirname}/app/about.html`);
});