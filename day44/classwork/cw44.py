#1
def sum_array(a):
    equals = 0
    for i in a:
        equals = equals + i
    return equals

#2
def swap_values(args): 
    args[0], args[1] = args[1], args[0]

#3
def positive_sum(arr):
    sum = 0
    for i in arr:
        if i > 0:
            sum = sum + i
    return sum

#4
def sum_two_smallest_numbers(numbers):
    first_num = min(numbers)
    numbers.remove(first_num)
    second_num = min(numbers)
    return first_num + second_num

#5
def find_average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)