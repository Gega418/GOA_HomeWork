#1
def unusual_five():
    return "abcdef".find("f") 

#2
def reverse_seq(n):
    l = []
    for i in range(n,0,-1):
        l.append(i)
    return l

#3
def array_diff(a, b):
    if b == []:
        return a
    a_b = []
    for i in a:
        if i not in b:
            a_b.append(i)
    return a_b

#4
def no_space(x):
    return x.replace(" ", "")
