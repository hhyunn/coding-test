def solution(arr):
    if len(arr) == 1:
        return [-1]
    minNum = min(arr)
    while minNum in arr:
        arr.remove(minNum)
    return arr