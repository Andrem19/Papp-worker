const { BrowserWindow, app, ipcMain, Notification, dialog } = require('electron')
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
            enableRemoteModule: true,
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
    date = new Date(args).getTime()
    await loadData2.startLoadData(date)

    const { filePath } = await dialog.showSaveDialog({
        buttonLabel: 'Save File',
        defaultPath: `binance-${Date.now()}.json`
      });
      if (filePath) {
        // pathToFile = "./bull/bull1.json"
        const fileFrom = await JSON.parse(fs.readFileSync('bull1.json'))
        console.log("newData: ", fileFrom);
        fs.writeFileSync(filePath, JSON.stringify(fileFrom), () => console.log('file saved successfully!'));
      }

})

 ipcMain.on("get:file", async () => {
   await loadData.startLoadData()
//    eventEmitter.emit('greet');

 })
 ipcMain.on("get-predict", async () => {
const prediction = await pr.predict()
    console.log(prediction.join('-'));
    const res = prediction.join('-')
 win.webContents.send("data-ready", res);
  })




let content = "Hello, this is a content"

  ipcMain.on("message-box", async() => {
    const { filePath } = await dialog.showSaveDialog({
        buttonLabel: 'Save File',
        defaultPath: `vid-${Date.now()}.txt`
      });
      if (filePath) {
        fs.writeFileSync(filePath, content, () => console.log('file saved successfully!'));
      }
})
//   eventEmitter.on('greet', async() => {
//     console.log("Hi from Emmiter");
//       });

app.whenReady().then(createWindow)