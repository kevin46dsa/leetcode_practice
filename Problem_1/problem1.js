var mySqrt = function(x) {
    
    for(let i = 0; i <= x; i++) {
    let num = i * i;
    if(x === 0){
    return i;
    } else if(num === x) {
    return i;
    } else if(num > x) {
    return --i;
    }
    }
  
};

console.log(mySqrt(11)) //test case