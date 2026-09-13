# NRSA Steel — Windows Desktop Software

NRSA Steel is packaged as a Windows desktop application with Electron.

## Structure
- app/index.html — NRSA Steel application
- main.js — Electron desktop launcher
- preload.js — secure bridge
- package.json — Windows build configuration
- .github/workflows/windows-build.yml — automatic Windows build

## Local run
```
npm install
npm start
```

## Windows build
```
npm install
npm run dist
```

The dist folder contains an NSIS installer and a portable EXE.

GitHub Actions builds the Windows packages automatically on pushes to main and by manual workflow dispatch.

The supplied application is a self-contained HTML document titled “NRSA Steel BOQ”. fileciteturn0file0L3-L8
