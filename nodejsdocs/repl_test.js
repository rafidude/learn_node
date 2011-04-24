var repl = require("repl"),
    msg = "message",
    a = [1, 2, 3, .3];

r = repl.start();
r.context.a = a;
r.context.m = msg;
