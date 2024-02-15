function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length > arr[i].length) {
            arr[i] = arr[i].concat(Array(arr.length - arr[i].length).fill(0));
        } else if (arr.length < arr[i].length) {
            arr.push(Array(arr[i].length).fill(0));
        }
    }
    return arr;
}