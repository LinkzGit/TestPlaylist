# Playlist App UI Tests

## Setup

1. Download NodeJS >
 # installs fnm (Fast Node Manager)
winget install Schniz.fnm
# configure fnm environment
fnm env --use-on-cd | Out-String | Invoke-Expression
# download and install Node.js
fnm use --install-if-missing 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

2. Install dependencies: "npm install", "npx playwright install"
3. Then, run the command: "npm run test"
