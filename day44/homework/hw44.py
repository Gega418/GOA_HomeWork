#1
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    elif sum(arr) == 0:
        return "even"
    else:
        return "odd"
    
#2
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

#3
def invert(lst):
    new_lst = []
    for i in lst:
        new_lst.append(-i)
    return new_lst

#4
def simple_multiplication(number):
    if number % 2 == 0:
        return number * 8
    else:
        return number * 9
    
#5
def no_space(x):
    return x.replace(" ", "")

#6
def repeat_str(repeat, string):
    return repeat * string