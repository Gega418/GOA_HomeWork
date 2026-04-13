# 1
def solution(number):
    if number < 0:
        return 0
    total_sum = 0
    for i in range(0, number):
        if (i % 3 == 0 or i % 5 == 0):
            total_sum += i
    return total_sum

# 2
# ?

# 3
def duplicate_encode(word):
    word = word.lower()
    result = ""
    for i in word:
        if word.count(i) > 1:
            result = result + ")"
        else:
            result = result + "("
    return result

# 4
def high_and_low(numbers):
    cvladi = numbers.split()
    num_list = []
    for i in cvladi:
        num_list.append(int(i))
    h = max(num_list)
    l = min(num_list)
    return f"{h} {l}"

# 5
def camel_case(s):
    s = s.split()
    res = ""
    for i in s:
        res += i.capitalize()
    return res            

# 6
def spin_words(sentence):
    txt = []
    snt = sentence.split()
    for i in snt:
        if len(i) >= 5:
            txt.append(i[::-1])
        else:
            txt.append(i)
    return " ".join(txt)