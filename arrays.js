var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function addElementToBeginningOfArray(array, element) {
    var addedArray = [element, ...array]
    return addedArray
    
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
  }
  
  function addElementToEndOfArray(array, element) {
    var addedArray = [...array, element]
    return addedArray
  }
  
  function destructivelyAddElementToEndOfArray(array, element) {