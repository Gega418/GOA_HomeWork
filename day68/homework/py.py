# 5kyu

# 1
def make_readable(seconds):
    h = seconds // 3600
    m = (seconds % 3600) // 60
    s = seconds % 60
    if h < 10:
        h_str = "0" + str(h)
    else:
        h_str = str(h)
    if m < 10:
        m_str = "0" + str(m)
    else:
        m_str = str(m)
    if s < 10:
        s_str = "0" + str(s)
    else:
        s_str = str(s)
    return h_str + ":" + m_str + ":" + s_str

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