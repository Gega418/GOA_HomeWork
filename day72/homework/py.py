# 1
def move_zeros(lst):
    zeros = []
    nums = []
    for i in lst:
        if i != 0:
            nums.append(i)
        elif i == 0:
            zeros.append(i)
    nums.extend(zeros)
    return nums

# 2
def pig_it(text):
    text = text.split(" ")
    txt = ""
    for i in text:
        txt += i[1:]
        txt += i[0] + "ay" + " "
    if txt.endswith("?ay "):
        return txt[0:-3]
    elif txt.endswith("!ay "):
        return txt[0:-3]
    else:
        return txt[0:-1]