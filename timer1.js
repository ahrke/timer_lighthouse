const args = process.argv.slice(2);

const timer = (delay) => {
  
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay * 1000)
}

args.forEach(e => {
  if (!isNaN(e) && (e > 0)) {
    timer(e)
  } 
}) 

module.exports = timer;