def solution(s):
    answer = []
    words = s.split(' ')
    for word in words:
        newWord = ''
        for i, v in enumerate(word):
            if i%2 == 0:
                newWord += v.upper()
            else:
                newWord += v.lower()
        answer.append(newWord)
    return ' '.join(answer)