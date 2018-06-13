var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //initialize a variable that contains current queueSize


  // Implement the methods below

  someInstance.enqueue = function(value) {
  };
  /*
  //input: a value
  //output: none
  //constraints: none
  //edge cases: none

  //queue always adds to the end (index zero)
  //if queue size is zero
    //add a key-value pair to storage obj where the key is queueSize and the value is value
    //increment queueSize
  //else (queue has items already)
    //shift existing key-value pairs : for loop to iterate the objkeys length where i starts at one
      //no need to start at zero because it will be vacated
      //for each index
        //set obj[i] to be obj[i-1]
    //insert new key-val pair at obj['0'] (first index)
    //increment queuesize
*/
  someInstance.dequeue = function() {
  };

  /*
  input: none
  output: returns the item that is taken off the queue
  constraints: none
  edge cases: none

  //queue always removes from the front (the object's size - 1 can get length of obj.keys)
  //if queueSize > 0
    //make variable of returnValue and set to value of queue at queueSize
    //delete the key-value pair where key is queueSize-1 from the obj
    //decrement queueSize
    //return returnValue
  */

  someInstance.size = function() {
  //inpt
  };

  return someInstance;
};

