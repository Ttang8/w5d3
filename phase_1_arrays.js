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



Array.prototype.twoSum = function () {
  let newArr = [];
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < (this.length-1); j++) {
        if (this[i] + this[j] === 0)
          newArr.push([i, j]);
    }
  }
  return newArr;
};

Array.prototype.transpose = function () {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr[i] = [];
    for (let j = 0; j < this.length; j++) {
      newArr[i].push(this[j][i]);
    }
  }
  return newArr;
};

let a = [[1,2],[3,4]];
console.log(a.transpose());
