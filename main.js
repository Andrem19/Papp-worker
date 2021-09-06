const { BrowserWindow, app, ipcMain, Notification } = require('electron')
const path = require('path')
const loadData = require('./getdata/getData.js')

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
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
    loadData.startLoadData()
    
    return "Data loaded"
})

app.whenReady().then(createWindow)