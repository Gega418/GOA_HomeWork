#1
def invert(lst):
    new_lst = []
    for i in lst:
        new_lst.append(-i)
    return new_lst

#2
def duplicate_encode(word):
    word = word.lower()
    result = ""
    for i in word:
        if word.count(i) > 1:
            result = result + ")"
        else:
            result = result + "("
    return result

#3
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False
    
#4
def between(a,b):
    result = []
    for i in range(a, b + 1):
        result.append(i)
    return result

#5
def double_char(s):
    result = ""
    for i in s:
        result = result + i * 2
    return result