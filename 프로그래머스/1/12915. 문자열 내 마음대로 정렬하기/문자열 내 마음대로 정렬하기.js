function solution(strings, n) {
    const sortedStr = strings.sort();
    return sortedStr.sort((a, b) => a[n].charCodeAt() - b[n].charCodeAt());
}