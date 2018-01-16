#!/usr/bin/env node
require('.');
if (process.argv[2]) {
  console.log(process.env[process.argv[2]]);
} else {
  console.log(process.env);
}
