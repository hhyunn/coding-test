def solution(a, b):
    answer = 0
    minNum = min(a, b)
    maxNum = max(a, b)
    for i in range(minNum, maxNum+1):
        answer += i
    return answer