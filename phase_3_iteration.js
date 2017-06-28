
Array.prototype.bubbleSort = function () {
  let sorted = true;
    while (sorted) {
      sorted = false;
      for (let i = 0; i < this.length; i++) {
        if (this[i] > this[i+1]) {
          let a = this[i];
          let b = this[i+1];
          this[i] = b;
          this[i+1] = a;
          sorted = true;
        }
      }
    }
    return this;
};


// let a = [3,2,1];
// console.log(a.bubbleSort());

Array.prototype.myuniq = function () {
  let newArr = [];
  this.forEach(function (element) {
    if (newArr.includes(element))
      newArr;
    else
      newArr.push(element);

    });
  return newArr;
};

String.prototype.substrings = function () {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      resultArr.push(this.slice(i, j + 1));
    }
  }
  return resultArr.myuniq();
};

let b = 'hello';
console.log(b.substrings());
