#1
def solution(s):
    result = ""
    for i in s:
        if i.isupper():
            result += " "
        result += i
    return result

#2
def array_diff(a, b):
    if b == []:
        return a
    a_b = []
    for i in a:
        if i not in b:
            a_b.append(i)
    return a_b

#3
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    elif sum(arr) == 0:
        return "even"
    else:
        return "odd"
    
#4
def filter_list(l):
    new_list = []
    for i in l:
        if type(i) == int:
            new_list.append(i)
    return new_list

#5
def is_square(n):    
    if n < 0:
        return False
    return (n **0.5) % 1 == 0

#6
for i in seq:
        if seq.count(i) % 2 != 0:
            return i
        
#7
def string_transformer(s):
    s = s.split(" ")[::-1]
    return " ".join(s).swapcase()

#8
def create_phone_number(n):
    result = ""
    for i in range(0,10):
        if i == 0:
            result += "("
        if i == 3:
            result += ") "
        if i == 6:
            result += "-"
        
        result = result + str(n[i])
    return result