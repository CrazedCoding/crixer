const electron = require('electron');

const { app, BrowserWindow } = electron;

app.commandLine.appendSwitch('js-flags', '--max-old-space-size=1048576‬');
let win;
const createWindow = () => {
  var screenElectron = electron.screen;
  var mainScreen = screenElectron.getPrimaryDisplay();
  var dimensions = mainScreen.size;
  win = new BrowserWindow({
    width: Math.floor(dimensions.width*2.0/3),
    height: Math.floor(dimensions.height*2.0/3),
    toolbar: false,
    resizable: true,
    dark: "dark",
    frame:true,
    alwaysOnTop: false,
    webPreferences: {
        nodeIntegration: true
    }
  });
  win.setMenu(null)
  win.setResizable(true);
  win.loadURL('file://' + __dirname + '/index.html');
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});