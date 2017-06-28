Array.prototype.myEach = function (callback) {
  for ( let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


// let a = [1,2,3];
// a.myEach((el) => {
//   console.log(el + 2);
// });


Array.prototype.myMap = function (callback) {
  let blankArray = [];
  this.myEach((el) => {
    blankArray.push(callback(el));
  });
  return blankArray;
};

// let a = [1,2,3];
// console.log(a.myMap((element) => {
//     return (element + 2);
//   }
// ));

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;
  if (!initialValue) {
    arr = this.slice(1);
    initialValue = this[0];
  }
  arr.myEach((el) => {
    initialValue = callback(initialValue, el);
  });

  return initialValue;
};

let a = [1,2,3];
console.log(a.myReduce(((acc, el) => (acc + el)), 5
));
