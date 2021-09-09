const { BrowserWindow, app, ipcMain, Notification } = require('electron')
const path = require('path')
const fs = require('fs');
const loadData = require('./getdata/getData.js')
const pr = require('./res.js')
const config = require('./getdata2/config.js')
const loadData2 = require('./getdata2/getData.js')
const EventEmitter = require('events');

const eventEmitter = new EventEmitter ();

const isDev = !app.isPackaged;
let win
function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        backgroundColor: "white",
        // frame:false,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false,
        }
    })
    // win.setMenu(null)
    win.loadFile('index.html')
}
if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}
ipcMain.on("download-data", async (event, args) => {
    date = new Date(args).getTime(),
    await loadData2.startLoadData(date)

})

 ipcMain.on("get:file", async () => {
   await loadData.startLoadData()
   eventEmitter.emit('greet');

 })
 ipcMain.on("get-predict", async () => {
const prediction = await pr.predict()
    console.log(prediction.join('-'));
    const res = prediction.join('-')
 win.webContents.send("data-ready", res);
  })

  
  eventEmitter.on('greet', async() => {
    console.log("Hi from Emmiter");
      });

app.whenReady().then(createWindow)