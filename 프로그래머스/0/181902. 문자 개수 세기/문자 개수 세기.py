def solution(my_string):
    arr = [0 for i in range(52)]
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for v in my_string:
        arr[alphabet.index(v)] += 1
    return arr