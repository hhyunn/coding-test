def solution(s):
    answer = []
    dict = {}
    for i, v in enumerate(s):
        if v not in dict:
            answer.append(-1)
        else:
            answer.append(i - dict[v])
        dict[v] = i
    return answer