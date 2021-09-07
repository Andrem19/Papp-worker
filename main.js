const { BrowserWindow, app, ipcMain, Notification } = require('electron')
const path = require('path')
const fs = require('fs');
const loadData = require('./getdata/getData.js')
const pr = require('./res.js')

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 500,
        height: 500,
        backgroundColor: "white",
        // frame:false,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
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

ipcMain.handle("say-hello", async (event, args) => {
   await loadData.startLoadData()
    return "Data Loaded"
})
ipcMain.handle("pred", async (event, args) => {
    await pr.predict()
 })

app.whenReady().then(createWindow)