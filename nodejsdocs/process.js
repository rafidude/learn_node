var util = require('util');

console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/arbitrary');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}
console.log('Current uid: ' + process.getuid());
console.log('Version: ' + process.version);
console.log('Prefix: ' + process.installPrefix);
console.log(util.inspect(process, false, 1));