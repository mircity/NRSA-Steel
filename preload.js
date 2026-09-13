const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('nrsaDesktop', {
  platform: process.platform,
  isWindows: process.platform === 'win32',
  appVersion: '1.0.0'
});
