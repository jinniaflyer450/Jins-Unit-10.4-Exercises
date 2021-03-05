//Original function:

//function filterOutOdds() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }

//ES2015 function

function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0)
  }

  function findMin(...nums){
      return nums.reduce((min, currNum) => min < currNum ? min: currNum)
  }

  function mergeObjects(first, second){
      return {...first, ...second}
  }

  function doubleAndReturnArgs(firstArray, ...otherNums){
      const doubles = otherNums.map(val => val * 2)
      return [...firstArray, ...doubles]
  }

  //remove a random element in the items array and return a new array without that item.

  function removeRandom(items){
      let index = Math.floor((Math.random() * items.length))
      const first = items.slice(0, index)
      const second = items.slice(index + 1)
      return [...first, ...second]
  }

  /** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2]
}

// Return a new object with all the keys and values from obj, along with a new key/value pair.

function addKeyVal(obj, key, val){
    const obj2 = {...obj}
    obj2[key] = val
    return obj2
}

/** Return a new object with a key removed.  Consulted this for help https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object*/

function removeKey(obj, key){
    const obj2 = {...obj}
    delete obj2[key]
    return obj2
}

// Combine two objects and return a new object.

function combine(obj1, obj2){
    return {...obj1, ...obj2}
}

// Return a new object with a modified key and value.

function update(obj, key, val){
    const obj2 = {...obj}
    obj2[key] = val
    return obj2
}