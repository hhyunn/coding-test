function solution(A, B) {
    if (A === B) return 0;
    const splitA = A.split('');
    for (let i = 1; i <= A.length; i++) {
        const lastStr = splitA.pop();
        splitA.unshift(lastStr);
        if (splitA.join('') === B) return i;
        else if (i === A.length) return -1;
    }
}