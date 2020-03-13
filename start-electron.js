// process.env.NODE_ENV = "exe";
// const config = require('./service/config');
const path = require('path');
const url = require('url');

const {app, BrowserWindow, ipcMain, Menu} = require('electron');



let win = null;

function createWindow() {
    Menu.setApplicationMenu(null)
    win = new BrowserWindow({width: 1000, height: 800,webPreferences: {
            nodeIntegration: true
        }});

    win.webContents.openDevTools()

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    const server = require('./bin/www');
    // win.loadURL('http://127.0.0.1:3002');
    // if (config.api_url.key) {
    //     const server = require('./bin/www');
    //     win.loadURL('http://127.0.0.1:3002');
    // } else {
    //     win.loadURL(url.format({
    //         pathname: path.join(__dirname, 'index.html'),
    //         protocol: 'file:',
    //         slashes: true
    //     }));
    // }

    win.flashFrame(true);
    win = null;

    ipcMain.on('restart', () => {
        app.quit();
        app.relaunch({args: process.argv.slice(1).concat(['--relaunch'])});
        app.exit(0)
    })
}





app.commandLine.appendSwitch("--disable-http-cache");

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        let exec = require('child_process').exec;
        exec('taskkill /f /im app*',(err, stdout, stderr)=>{});
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

app.on('browser-window-created', function () {
})
