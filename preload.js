const { ipcRenderer, contextBridge} = require('electron')

contextBridge.exposeInMainWorld("myApp", {
    sayHello: (arg) => ipcRenderer.invoke("say-hello", arg),
    startPredict: (arg) => ipcRenderer.invoke("pred", arg),
    // mainReply: (arg) => ipcRenderer.on('asrepl', arg)

})