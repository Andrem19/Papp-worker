const { BrowserWindow, app, ipcMain, Notification } = require('electron')
const path = require('path')
const fs = require('fs');
const loadData = require('./getdata/getData.js')
const pr = require('./res.js')
const config = require('./getdata2/config.js')
const loadData2 = require('./getdata2/getData.js')

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
            preload: path.join(__dirname, 'preload.js')
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
let globalCount = 0
ipcMain.handle("say-hello", async (event, args) => {
    date = new Date(args).getTime(),
    await loadData2.startLoadData(date)
    // return "Data Loaded"
})
// ipcMain.handle("pred", async (event, args) => {
    
//     // return "Hello Word"
//     // event.sender.send('asrepl', prediction)
//  })

 ipcMain.on("get:file", async () => {
   await loadData.startLoadData()
    const prediction = await pr.predict()
    console.log(prediction.join('-'));
    const res = prediction.join('-')
    console.log(prediction)
    globalCount ++
    console.log(`${globalCount}`)

    if (res.include("-")) {
    await win.webContents.send("wave:buffer", prediction);
    }
 })

app.whenReady().then(createWindow)