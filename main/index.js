"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Native
const path_1 = require("path");
const url_1 = require("url");
// Packages
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_next_1 = __importDefault(require("electron-next"));
const electron_updater_1 = require("electron-updater");
let mainWindow;
// Prepare the renderer once the app is ready
electron_1.app.on("ready", async () => {
    await (0, electron_next_1.default)("./renderer");
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: (0, path_1.join)(__dirname, "preload.js"),
        },
    });
    const url = electron_is_dev_1.default
        ? "http://localhost:8000/"
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, "../renderer/out/index.html"),
            protocol: "file:",
            slashes: true,
        });
    mainWindow.loadURL(url);
    mainWindow.once("ready-to-show", () => {
        electron_updater_1.autoUpdater.checkForUpdates();
    });
});
// Quit the app once all windows are closed
electron_1.app.on("window-all-closed", electron_1.app.quit);
// listen the channel `message` and resend the received message to the renderer process
electron_1.ipcMain.on("message", (event, message) => {
    console.log(message);
    setTimeout(() => event.sender.send("message", "hi from electron"), 500);
});
electron_updater_1.autoUpdater.on("update-available", () => {
    const dialogOpts = {
        type: "info",
        buttons: ["Ok"],
        title: "Update Available",
        message: "",
        detail: "A new version download started. The app will be restarted to install the update.",
    };
    electron_1.dialog.showMessageBox(dialogOpts);
});
electron_updater_1.autoUpdater.on("update-downloaded", () => {
    const dialogOpts = {
        type: "info",
        buttons: ["Restart", "Later"],
        title: "Application Update",
        message: "",
        detail: "A new version has been downloaded. Restart the application to apply the updates.",
    };
    electron_1.dialog.showMessageBox(dialogOpts).then((returnValue) => {
        if (returnValue.response === 0)
            electron_updater_1.autoUpdater.quitAndInstall();
    });
});
