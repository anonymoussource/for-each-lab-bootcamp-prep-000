function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  const cubs = ["Anthony Rizzo", "Kris Bryant", "Jake Arrieta"]
  cubs.forEach(callback)
  return cubs
}

function doToArray(array, callback) {
  array.forEach(callback)
}
