const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  initializeSave: (url, id, pw) => ipcRenderer.invoke("initialize-save", [url, id, pw]),
});
