# 1
def generate_hashtag(s):
    words = [word.capitalize() for word in s.split()]
    hashtag = "#" + "".join(words)
    return hashtag if 1 < len(hashtag) <= 140 else False