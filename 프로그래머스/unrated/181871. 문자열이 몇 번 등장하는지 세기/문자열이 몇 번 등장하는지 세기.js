function solution(myString, pat) {
    let answer = 0;
    for (let i=0; i<=myString.length-pat.length; i++) {
        myString.slice(i, pat.length+i) === pat ? answer++ : null;
    }
    return answer;
}