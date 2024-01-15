function solution(N, stages) {
    const arr = Array.from({ length: N }, () => 0);
    for (let idx=1; idx<=N; idx++) {
        for (let j=0; j<stages.length; j++) {
            if (stages[j] === idx || (stages[j] < idx && stages[j] >= idx) ) {
                arr[idx-1]++;
            }
        }
    }

    const failRates = [];
    let leng = stages.length;
    arr.forEach((v, i) => {
        if (i === 0) {
            failRates.push(v / leng);
        } else {
            failRates.push(v / (leng -= arr[i-1]));
        }
    })

    const answer = failRates.map((failRate, idx) => ({ failRate, idx }))
                            .sort((a, b) => b.failRate - a.failRate)
                            .map(({ idx }) => idx+1);
    return answer;
}