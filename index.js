// Code your solutions in this file
function writeCards(array, event) {
    let myNewArray = []
      for ( let i = 0; i < array.length; i++) {
        myNewArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
      }
    return myNewArray
  }

  function countDown(posNum) {
    console.log(posNum);
    while(posNum > 0) {
        posNum--
        console.log(posNum)
    }
  }