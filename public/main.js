const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1024,
    height: 600,
    minWidth: 1024,
    minHeight:600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.setMenu(null);
  window.loadURL("http://localhost:3000");
};

// Create Window after Electron initialization finished.
app.whenReady().then(createWindow);

// Quite when all windows are closed.
// As it is a single page application, no exception for MacOS.
app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
});
