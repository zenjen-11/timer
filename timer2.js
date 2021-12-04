const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  } else if (key > 0 && key < 10) { //implicitly converts key to Number
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07Beep!\n');
    }, key * 1000); //implicitly converts key to Number
    }
  }
);