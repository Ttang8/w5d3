function range(start, end) {
  if (start === end) {
    return [start];
  }
  else {
    let prevState = range(start, end-1);
    prevState.push(end);
    return prevState;
  }
}



function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  else {
    let prevState = sumRec(arr.slice(0,arr.length-1));
    return prevState + arr[arr.length-1];
  }

}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else {
    let prevState = exponent(base, exp-1);
    return base * prevState;
  }

}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else {
    if (exp % 2 === 0) {
      return Math.pow(exponent2(base, exp/2),2);
    }
    else {
      return base * Math.pow(exponent2(base, (exp - 1)/2), 2);
    }
  }
}

console.log(exponent2(2,3));


function fibonacci(n) {
  
}
