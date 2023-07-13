function solution(n) {
    let stringN = String(n);
    let arrayN = stringN.split('');
    let num = 0;
    
    arrayN.forEach(item => {
        num += parseInt(item);
    });
    
    return num;
}