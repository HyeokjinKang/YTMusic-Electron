const { app, BrowserWindow, screen } = require("electron");

const createWindow = () => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  window = new BrowserWindow({
    width: width / 1.25,
    height: height / 1.25,
    webPreferences: {
      nodeIntegration: true,
    },
  });

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
