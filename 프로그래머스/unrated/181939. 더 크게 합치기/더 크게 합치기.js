function solution(a, b) {
    let answer = 0;
    const aPlusB = parseInt(a.toString() + b.toString());
    const bPlusA = parseInt(b.toString() + a.toString());
    answer = aPlusB > bPlusA ? aPlusB : aPlusB === bPlusA ? aPlusB : bPlusA;
    return answer;
}