function solution(s) {
    let arr = s.split(' ');
    let arr2 = [];
    arr.forEach((v, i) => {
        arr2.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase())
    })
    return arr2.join(' ');
}