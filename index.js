const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      for (let key in collection) {
        callback(collection[key])
      }
      return collection
    },

    map: function (collection, callback) {
      const newArray = [];
      for (const key in collection) {
        newArray.push(callback(collection[key]))
      }
      return newArray
    },

    reduce: function (collection, callback, acc) {
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1)
      }
      for (let key = 0; key < collection.length; key++) {
        acc = callback(acc, collection[key], collection)

      }
      return acc
    },
    find: function (collection, predicate) {
      for (const elem in collection) {

        if (predicate(collection[elem])) {
          return collection[elem];

        }
      }
    },
    filter: function (collection, predicate) {
      const newArray = [];
      for (const elem in collection) {
        if (predicate(collection[elem])) {
          newArray.push(collection[elem])
        }
      }
      return newArray
    },
    size: function (collection) {
      let size = 0;
      for (const elem in collection) { size += 1 }

      return size
    },
    first: function (array, n = false) {
      return (n) ? array.slice(0, n) : array[0];
    },
    last: function (array, n = false) {
      return (n) ? array.slice(-n) : array[array.length - 1];
    },
    compact: function (array) {
      let newArray = array.filter((num) => !!num == true)
      return newArray
    },
    sortBy: function (collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function (a, b) {

        return callback(a) - callback(b)
      })
    },
    flatten: function (array, shallow = false) {
      let flattened = []
      let levelNum = 0;
      function deepDive(level, once) {
        level.map(elem => {
          if (Array.isArray(elem)) {
            if (once) { levelNum += 1 }

            (levelNum > 1) ? flattened.push(elem) : deepDive(elem, once);

            levelNum -= 1

          } else {

            flattened.push(elem)

          }
        })
      }
      deepDive(array, shallow)
      return flattened
    },
    uniqSorted: function(array, callback, newArray) {
      let arr = []
      array.map(elem => {
        if (!newArray.includes(callback(elem))) {
          newArray.push(callback(elem))
          arr.push(elem)
        }
      })
      return arr
    },

    uniq: function (array, isSorted=false, callback=false) {
      let newArray = [];
      function ifExists(collection, elem) {
        for (let i in collection) { 
          if (collection[i] === elem) {
            return true
          }
        }
        return false
      }
      
        if (callback){
         
          return fi.uniqSorted(array, callback, newArray)
        } else {
          for (let elem in array) {
            (ifExists(newArray, array[elem])) ?  elem : newArray.push(array[elem])
        }
      }
      return newArray
    },
    keys: function(object) {
      let keyArray = [];
      for (const keys in object) {
        keyArray.push(keys)
      }
      return keyArray
    },
    values: function(object) {
      let keyArray = [];
      for (const keys in object) {
        keyArray.push(object[keys])
      }
      return keyArray
    },
    functions: function(object) {
      let functionsArray = [];
      for (const funcs in object) {
        if (typeof object[funcs] === 'function') {
          functionsArray.push(object[funcs])
        }
      }
      return functionsArray

    }


  }})()

  fi.libraryMethod()
