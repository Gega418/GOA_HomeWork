# 1
def vaporcode(s):
    s = s.upper()
    s = s.replace(" ", "")
    res = ""
    for i in s:
        res += i + "  "
        
    return res[:-2]

# 2
def wave(people):
    li = []
    num = 0
    for i in range(len(people)):
        if people[num] == " ":pass
        else:
            li.append(people[0:num] + people[num].upper() + people[num+1::])
        num += 1
    return li

# 3
def sum_pairs(ints, s):
    lst = set()
    for i in ints:
        res = s - i
        if res in lst:
            return [res, i]
        lst.add(i)
    
# 4
