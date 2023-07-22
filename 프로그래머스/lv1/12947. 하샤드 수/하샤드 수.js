function solution(x) {
    let strX = String(x);
    let sum = 0;
    
    for (let i=0; i<strX.length; i++) {
        sum += Number(strX[i]);
    }
    
   return x%sum ? false : true;
}