// print process.argv
console.log("Process started by: " + process.execPath)
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
