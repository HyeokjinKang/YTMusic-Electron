const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getSavedData: () => ipcRenderer.invoke("data-check"),
  initializeSave: (url, id, pw) => ipcRenderer.invoke("initialize-save", [url, id, pw]),
});
