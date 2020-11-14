let n = 0

setInterval(() => {
  const letra = javascript[n % javascript.length]
  console.log('\n' + letra + '\n')
  n = n + 1
}, 1000)