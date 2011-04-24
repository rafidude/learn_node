var a = require('./a_event_emitter');

console.log(require.paths);

a.on('ready', function() {
  console.log('module a is ready');
});