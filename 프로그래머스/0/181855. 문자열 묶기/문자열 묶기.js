function solution(strArr) {
    const strLeng = strArr.map(v => v.length);
    const maxLeng = Math.max(...strLeng);
    const countArr = Array.from({ length: maxLeng }, () => 0);
    strArr.map(v => countArr[v.length - 1]++);
    return Math.max(...countArr);
}