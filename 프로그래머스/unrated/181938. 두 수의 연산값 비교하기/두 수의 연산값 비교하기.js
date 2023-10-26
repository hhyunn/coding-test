function solution(a, b) {
    const num1 = parseInt(a.toString() + b.toString());
    const num2 = 2 * a * b;
    return num1 > num2 ? num1 : (num1 < num2 ? num2 : num1);
}