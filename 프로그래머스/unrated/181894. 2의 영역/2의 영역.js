function solution(arr) {
    const index = [];
    arr.forEach((v, i) => {
        v === 2 ? index.push(i) : null;
    })
    return index.length ? arr.slice(index[0], index[index.length-1]+1) : [-1];
}