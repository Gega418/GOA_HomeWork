#1
def filter_list(l):
    new_list = []
    for i in l:
        if type(i) == int:
            new_list.append(i)
    return new_list

#2
def solution(text, ending):
    if text.endswith(ending):
        return True
    else:
        return False
    
#3
def century(year):
    if year % 100 == 0:
        return year // 100
    else:
        return (year // 100) + 1
    
#4
def friend(x):
    my_friend = []
    for i in x:
        if len(i) == 4:
            my_friend.append(i)
    return my_friend

#5
def grow(arr):
    result = 1
    for i in arr:
        result = result * i
    return result

#6
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague