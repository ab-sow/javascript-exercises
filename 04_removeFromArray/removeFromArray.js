const removeFromArray = function(arr) {
 for(i = 0; i < arr.length; i++) {
   if(arr[i] === 5) {
    arr.splice(i, 1); 
   }
   retun arr;
 }
};
removeFromArray(1, 2, 3, 4, 5, 6);
module.exports = removeFromArray;
