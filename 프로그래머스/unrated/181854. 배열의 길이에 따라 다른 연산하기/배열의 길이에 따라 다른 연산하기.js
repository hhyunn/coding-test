function solution(arr, n) {
    for (let i=0; i<Math.ceil(arr.length/2); i++) {
        arr.length % 2 ? arr[2*i] = arr[2*i] + n : arr[2*i+1] = arr[2*i+1] + n;
    }
    return arr;
}