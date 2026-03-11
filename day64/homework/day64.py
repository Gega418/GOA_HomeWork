#1
def duplicate_encode(word):
    word = word.lower()
    result = ""
    for i in word:
        if word.count(i) > 1:
            result = result + ")"
        else:
            result = result + "("
    return result

#2
def generate_shape(n):
    new_n = ""
    for i in range(0, n):
        new_n += n * "+" + "\n"
    return new_n[0:-1]

#3
def max_diff(lst):
    if lst == []:
        return 0
    lst1 = max(lst)
    lst2 = min(lst)
    return lst1 - lst2

#4
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False
    
#5
def twice_as_old(dad_years_old, son_years_old):
    age = (dad_years_old - 2 * son_years_old)
    if age < 0:
        return age * -1
    else:
        return age