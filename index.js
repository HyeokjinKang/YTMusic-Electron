const { app, BrowserWindow, screen, ipcMain, globalShortcut } = require("electron");
const Store = require("electron-store");
const path = require("path");

const store = new Store();

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  window = new BrowserWindow({
    width: 1200,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: "#222",
    icon: path.join(__dirname, "resources/icon.png"),
    webPreferences: {
      nodeIntegration: true,
    },
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  window.setMenuBarVisibility(false);
  window.loadFile("dist/index.html");
};

let window = null;

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("browser-window-focus", function () {
  globalShortcut.register("CommandOrControl+R", () => {
    console.log("CommandOrControl+R: Reload Disabled");
  });
  globalShortcut.register("F5", () => {
    console.log("F5: Reload Disabled");
  });
});

app.on("browser-window-blur", function () {
  globalShortcut.unregister("CommandOrControl+R");
  globalShortcut.unregister("F5");
});

ipcMain.handle("data-check", async (event) => {
  return [store.get("url"), store.get("id"), store.get("pw")];
});

ipcMain.handle("initialize-save", async (event, data) => {
  store.set("url", data[0]);
  store.set("id", data[1]);
  store.set("pw", data[2]);
  return "complete";
});
