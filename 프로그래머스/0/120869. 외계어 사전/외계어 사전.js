function solution(spell, dic) {
    let answer = 0;
    let count = 0;
    for (let i = 0; i < dic.length; i++) {
        for (let j = 0; j < spell.length; j++) {
            if (dic[i].indexOf(spell[j]) === -1) count++;
        }
        answer = count ? 2 : 1;
        count = 0;
        if (answer === 1) break;
    }
    return answer;
}