  # Jarvis backend RPi API

## Structure

```
├── src
│   ├── modules
│   │   └── <api_module_name>
│   └── main.js
├── package.json
├── README.MD
└── .gitignore
```

## Runtime environment - Node.js

### Installation

Official Linux (Debian) manual https://github.com/nodesource/distributions#debian-versions

or

download `zip` from https://nodejs.org/en/download


Try this command to check
```
node -v
npm -v
```
you should get something like
```
v20.8.0

```

### Run

Run via project npm script:
```
# Run in DEV mode (starts with file watcher)
npm run dev

# Run in PROD mode
npm run start
```

### Testing
Run via project npm script:
```
# Run all tests in the current directory and all sub-directories
npm run test
```
