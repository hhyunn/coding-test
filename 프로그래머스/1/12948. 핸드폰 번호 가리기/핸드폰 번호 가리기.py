def solution(phone_number):
    lastNum = phone_number[-4:]
    star = '*' * (len(phone_number) - 4)
    return f'{star}{lastNum}'