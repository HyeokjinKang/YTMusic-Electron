const { app, BrowserWindow, screen } = require("electron");

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  window = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
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
