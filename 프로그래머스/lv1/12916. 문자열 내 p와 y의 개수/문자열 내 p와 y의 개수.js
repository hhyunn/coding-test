function solution(s){
    let countP = 0;
    let countY = 0;
    
    s.split('').forEach(v => {
        v === 'p' || v === 'P' ? countP++ : v === 'y' || v === 'Y' ? countY++ : null;
    })
    
    return countP === countY ? true : false;
}