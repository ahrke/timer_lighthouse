const BEEP = '\x07';

const timer = (delay) => {
  console.log("Setting timer for", delay, "seconds");
  setTimeout(() => {
    process.stdout.write(BEEP);
  }, delay * 1000);
};

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (c) => {
  switch (true) {
    case c === 'b':
    process.stdout.write(BEEP);
    break;
    case (c.charCodeAt(0) > '0'.charCodeAt(0) && c.charCodeAt(0) < '9'.charCodeAt(0)):
    timer(Number(c));
    break;
    case c === '\u0003':
    process.exit(0);
    break;
  }
});