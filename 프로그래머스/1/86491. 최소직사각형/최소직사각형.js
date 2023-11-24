function solution(sizes) {
    const firstNumArr = [];
    const secondNumArr = [];
    sizes.forEach(v => {
        secondNumArr.push(v.sort((a, b) => a - b)[0]);
        firstNumArr.push(v.sort((a, b) => a - b)[1]);
    })
    return Math.max(...firstNumArr) * Math.max(...secondNumArr);
}