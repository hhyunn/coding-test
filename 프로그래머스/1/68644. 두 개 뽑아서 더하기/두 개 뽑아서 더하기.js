function solution(numbers) {
    const answer = [];
    for (let i=0; i<numbers.length; i++) {
        for (let j=0; j<numbers.length; j++) {
            i !== j ? (answer.includes(numbers[i] + numbers[j]) ? null : answer.push(numbers[i] + numbers[j])) : null;
        }
    }
    return answer.sort((a, b) => a - b);
}