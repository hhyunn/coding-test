function solution(letter) {
    let answer = "";
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    letter.split(" ").forEach(v => {
        if (morse.indexOf(v) >= 0) answer += alpha[morse.indexOf(v)];
    })
    return answer;
}