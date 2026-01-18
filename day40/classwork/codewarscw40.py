def are_you_playing_banjo(name):
    if name.lower().startswith("r"):
        return f"{name} plays banjo"
    else:
        return f"{name} does not play banjo"


def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "/":
        return value1 / value2
    elif operator == "*":
        return value1 * value2

def count_positives_sum_negatives(arr):
    count_positives = 0
    sum_negatives = 0
    if len(arr) == 0:
        return []
    for i in arr:
        if i > 0:
            count_positives += 1
        else:
            sum_negatives += i
    return [count_positives, sum_negatives]

def reverse_seq(n):
    l = []
    for i in range(n,0,-1):
        l.append(i)
    return l