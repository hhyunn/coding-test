function solution(nums) {
    let answer = 0;
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                const decimal = () => {
                    for (let l=2; l<=Math.sqrt(sum); l++) {
                        if (sum % l === 0) {
                            return false;
                        }
                    }
                    return true;
                }
                decimal() ? answer++ : answer;
            }
        }
    }  
    return answer;
}