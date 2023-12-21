function solution(binomial) {
    let answer = 0;
    const arr = binomial.split(' ');
    const operator = arr[1];
    for (let i=0; i<=operator.length; i++) {
        switch (operator) {
            case '+': answer = parseInt(arr[0]) + parseInt(arr[2]); break;
            case '-': answer = parseInt(arr[0]) - parseInt(arr[2]); break;
            case '*': answer = parseInt(arr[0]) * parseInt(arr[2]); break;
        }
    }
    return answer;
}