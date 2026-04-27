# 1
def domain_name(url):
    url = url.replace("http://", "").replace("https://", "")
    url = url.replace("www.", "")
    return url.split(".")[0]

# 2
def duplicate_count(text):
    text = text.lower()
    unique = set(text)
    count = 0
    for i in unique:
        if text.count(i) > 1:
            count += 1
    return count

# 3