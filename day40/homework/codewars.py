#1
def get_count(sentence):
    count = 0
    for i in sentence:
        if i in "aeiou":
            count += 1
    return count

#2
def filter_list(l):
    new_list = []
    for i in l:
        if type(i) == int:
            new_list.append(i)
    return new_list

#3
def solution(text, ending):
    if text.endswith(ending):
        return True
    else:
        return False
    
#4
def century(year):
    if year % 100 == 0:
        return year // 100
    else:
        return (year // 100) + 1
    
#5
def friend(x):
    my_friend = []
    for i in x:
        if len(i) == 4:
            my_friend.append(i)
    return my_friend

#6
def grow(arr):
    result = 1
    for i in arr:
        result = result * i
    return result

#7
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague