function solution(array, commands) {
    let answer = [];
    // let num1 = array.slice(2-1, 5).sort((a, b) => a - b)[3-1];
    for (let i=0; i<commands.length; i++) {
        answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b)[commands[i][2]-1]);
    }
    return answer;
}