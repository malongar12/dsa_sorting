function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];

        for (var j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
          }
      
          arr[j + 1] = value;
        
    }
    return array;

}

module.exports = insertionSort;