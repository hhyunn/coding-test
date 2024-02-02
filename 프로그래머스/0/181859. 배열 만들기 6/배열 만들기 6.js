function solution(arr) {
    const stk = [];
    for (let i=0; i<arr.length; i++) {
        if (!stk.length) {
            stk.push(arr[i]);
        } else if (stk.length && stk[stk.length - 1] === arr[i]) {
            stk.pop();
        } else if (stk.length && stk[stk.length - 1] !== arr[i]) {
            stk.push(arr[i]);
        }
    }
    return stk.length ? stk : [-1];
}