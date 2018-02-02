#!/usr/bin/env node
require('.');
const arg = process.argv[2];
if (arg) {
  if (arg === '--') {
    require('./spawn');
  } else {
    console.log(process.env[process.argv[2]]);
  }
} else {
  console.log(process.env);
}
