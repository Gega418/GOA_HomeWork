#1
def spin_words(sentence):
    txt = []
    snt = sentence.split()
    for i in snt:
        if len(i) >= 5:
            txt.append(i[::-1])
        else:
            txt.append(i)
    return " ".join(txt)

#2
def xo(s):
    s = s.lower()
    if s.count("x") == s.count("o"):
        return True
    else:
        return False
    
#3
def find_short(s):
    x = s.split()
    x.sort(key = len)
    return len(x[0])

#4
def get_sum(a,b):
    if a == b:
        return a
    elif a < b:
        total = 0
        for i in range(a, b + 1):
            total += i
        return total
    else:
        total = 0
        for i in range(b, a + 1):
            total += i
        return total
    
#5
def to_camel_case(text):
    text = text.replace("-", " ")
    text = text.replace("_", " ")
    text = text.split(" ")
    st = ""
    st += text[0]
    text.pop(0)
    for i in text:
        st += i.capitalize()
    return st