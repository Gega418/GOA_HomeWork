# Map:
# 1.გაქვთ ლისტი: [1, 2, 3, 4, 5].
# გამოიყენეთ map, რომ შექმნათ ახალი ლისტი, სადაც ყველა ელემენტი გაორმაგებული იქნება.

# 2.გაქვთ ლისტი: ["apple", "banana", "cherry"].
# გამოიყენეთ map, რომ ყველა სიტყვის პირველი ასო დიდი იყოს.

# 3.გაქვთ ლისტი: [10, 20, 30, 40].
# გამოიყენეთ map, რომ თითოეული ელემენტი 5-ით გაზარდოთ.
# Filter:
# 1.გაქვთ ლისტი: [5, 12, 8, 20, 7].
# გამოიყენეთ filter, რომ ახალი ლისტი მოიქმნას მხოლოდ იმ ელემენტებით, რომლებიც მეტია 10-ზე.

# 2.გაქვთ ლისტი: ["cat", "dog", "elephant", "ant"].
# გამოიყენეთ filter, რომ მოიშალოს მხოლოდ ის სიტყვები, რომლებიც 3 ან ნაკლები ასოსგან შედგება.

# 3.გაქვთ ლისტი: [2, 3, 4, 5, 6].
# გამოიყენეთ filter, რომ დარჩეს მხოლოდ ლუწი რიცხვები.

#1
nums = [1, 2, 3, 4, 5]
doubled = (map(lambda x: x * 2, nums))
print(list(doubled))

#2
fruits = ["apple", "banana", "cherry"]
capitalized = (map(lambda x: x.capitalize(), fruits))
print(list(capitalized))

#3
numbers = [10, 20, 30, 40]
increased = (map(lambda x: x + 5, numbers))
print(list(increased))

#1
nums = [5, 12, 8, 20, 7]
more_10 = (filter(lambda x: x > 10, nums))
print(list(more_10))

#2
words = ["cat", "dog", "elephant", "ant"]
filtered_words = (filter(lambda x: len(x) > 3, words))
print(list(filtered_words))

#3
nums = [2, 3, 4, 5, 6]
even_nums = (filter(lambda x: x % 2 == 0, nums))
print(list(even_nums))