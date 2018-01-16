require('.');
if (process.argv[2]) {
  console.log(process.argv[2], process.env[process.argv[2]]);
} else {
  console.log(process.env);
}
