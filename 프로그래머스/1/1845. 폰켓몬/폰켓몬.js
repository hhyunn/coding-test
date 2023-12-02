function solution(nums) {
    const num = nums.length / 2;
    const arr = Array.from(new Set(nums));
    return arr.slice(0, num).length;
}