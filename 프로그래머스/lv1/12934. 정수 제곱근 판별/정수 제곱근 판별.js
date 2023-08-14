function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n); // 소수점이 나오는 수는 제곱이 아님
    
    // 만약 x가 정수라면 x+1의 제곱을 리턴, x가 실수라면 -1을 리턴
    answer = (n % x) === 0 ? (x+1) ** 2 : -1 ;
    return answer;
}