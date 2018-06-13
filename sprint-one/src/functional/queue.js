var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  //initialize a variable that contains current queueSize


  // Implement the methods below

  someInstance.enqueue = function(value) {
  };
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
  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
  //inpt
  };

  return someInstance;
};

