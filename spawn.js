const { spawn } = require('child_process');

const stdio = [process.stdin, process.stdout, process.stderr];
const sh = 'sh';
const shFlag = '-c';
const spawnOptions = {
  // env: process.env,
  stdio: stdio,
};

if (process.platform === 'win32') {
  // taken from npm's cli: https://git.io/vNFD4
  sh = process.env.comspec || 'cmd';
  shFlag = '/d /s /c';
  spawnOptions.windowsVerbatimArguments = true;
}

const args = process.argv
  .slice(3)
  .map(_ => JSON.stringify(_))
  .join(' ');

spawn(sh, [shFlag, args], spawnOptions);
