def solution(s1, s2):
    # return sum(1 for i in s1 if i in s2)
    return len(set(s1).intersection(s2))