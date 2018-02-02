const { spawn } = require('child_process');

let sh = 'sh';
let shFlag = '-c';

const options = {
  stdio: 'inherit',
};

if (process.platform === 'win32') {
  // taken from npm's cli: https://git.io/vNFD4
  sh = process.env.comspec || 'cmd';
  shFlag = '/d /s /c';
  options.windowsVerbatimArguments = true;
}

const args = process.argv
  .slice(3)
  .map(_ => JSON.stringify(_))
  .join(' ');

spawn(sh, [shFlag, args], options);
